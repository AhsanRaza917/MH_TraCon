"""
Vercel Serverless Function — MH TraCon Backend

This replaces the Flask dev server with a single serverless function.
Vercel's Python runtime calls the `handler` (a Flask/WSGI app) for every
request that matches /api/*.

IMPORTANT: Vercel has a READ-ONLY filesystem (except /tmp).
           Excel file writing will NOT work.  All contact data is
           sent directly to Google Sheets via the Apps Script URL.
"""

from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime
import os
import requests

app = Flask(__name__)
CORS(app)

GOOGLE_APPS_SCRIPT_URL = os.environ.get('GOOGLE_APPS_SCRIPT_URL', '')


@app.route('/api/contact', methods=['POST'])
def submit_contact():
    """Handle contact form submission and save to Google Sheets."""
    try:
        data = request.get_json()

        # Validate required fields
        required_fields = ['name', 'email', 'phone', 'message']
        for field in required_fields:
            if not data.get(field, '').strip():
                return jsonify({
                    'success': False,
                    'message': f'Field "{field}" is required.'
                }), 400

        # --- Send to Google Sheets ---
        if not GOOGLE_APPS_SCRIPT_URL or not GOOGLE_APPS_SCRIPT_URL.strip():
            return jsonify({
                'success': False,
                'message': 'Server misconfiguration: Google Sheets URL not set.'
            }), 500

        payload = {
            'name': data.get('name', '').strip(),
            'email': data.get('email', '').strip(),
            'phone': data.get('phone', '').strip(),
            'company': data.get('company', '').strip(),
            'message': data.get('message', '').strip()
        }

        response = requests.post(
            GOOGLE_APPS_SCRIPT_URL,
            json=payload,
            timeout=15
        )

        if response.status_code == 200:
            resp_json = response.json()
            if resp_json.get('success'):
                return jsonify({
                    'success': True,
                    'message': 'Contact information saved to Google Sheets successfully!'
                }), 200
            else:
                print(f"Google Sheets Script error: {resp_json.get('error')}")
                return jsonify({
                    'success': False,
                    'message': 'Failed to save — Google Sheets script returned an error.'
                }), 500
        else:
            print(f"Google Sheets Script returned status {response.status_code}")
            return jsonify({
                'success': False,
                'message': 'Failed to reach Google Sheets. Please try again later.'
            }), 502

    except Exception as e:
        print(f"Error saving contact: {e}")
        return jsonify({
            'success': False,
            'message': 'An error occurred while saving your information.'
        }), 500


@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint."""
    return jsonify({'status': 'ok', 'message': 'MH TraCon API is running'})
