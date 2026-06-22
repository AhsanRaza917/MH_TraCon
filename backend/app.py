from flask import Flask, request, jsonify
from flask_cors import CORS
from openpyxl import Workbook, load_workbook
from datetime import datetime
import os

app = Flask(__name__)
CORS(app)

EXCEL_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'contacts.xlsx')


def init_excel():
    """Initialize Excel file with headers if it doesn't exist."""
    if not os.path.exists(EXCEL_FILE):
        wb = Workbook()
        ws = wb.active
        ws.title = "Contacts"
        headers = ['Date', 'Full Name', 'Email', 'Phone', 'Company', 'Message']
        # Style headers
        for col, header in enumerate(headers, 1):
            cell = ws.cell(row=1, column=col, value=header)
            cell.font = cell.font.copy(bold=True)
        # Set column widths
        ws.column_dimensions['A'].width = 20
        ws.column_dimensions['B'].width = 25
        ws.column_dimensions['C'].width = 30
        ws.column_dimensions['D'].width = 18
        ws.column_dimensions['E'].width = 25
        ws.column_dimensions['F'].width = 50
        wb.save(EXCEL_FILE)


@app.route('/api/contact', methods=['POST'])
def submit_contact():
    """Handle contact form submission and save to Excel."""
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

        # Initialize Excel if needed
        init_excel()

        # Load workbook and append data
        wb = load_workbook(EXCEL_FILE)
        ws = wb.active

        row_data = [
            datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
            data.get('name', '').strip(),
            data.get('email', '').strip(),
            data.get('phone', '').strip(),
            data.get('company', '').strip(),
            data.get('message', '').strip()
        ]

        ws.append(row_data)
        wb.save(EXCEL_FILE)

        return jsonify({
            'success': True,
            'message': 'Contact information saved successfully!'
        }), 200

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


if __name__ == '__main__':
    init_excel()
    print("MH TraCon Backend running on http://localhost:5000")
    app.run(debug=True, port=5000)
