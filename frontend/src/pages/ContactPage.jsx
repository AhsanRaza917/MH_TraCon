import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from '../components/ScrollReveal';

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState(null); // 'success' | 'error' | 'loading'

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
        setTimeout(() => setStatus(null), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus(null), 5000);
      }
    } catch (err) {
      console.error('Contact form error:', err);
      setStatus('error');
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <div className="page-transition">
      {/* Page Hero */}
      <section className="page-hero" id="contact-hero">
        <div className="container">
          <span className="section-tag">{t.contact.sectionSubtitle}</span>
          <h1>{t.contact.sectionTitle}</h1>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="section" id="contact-form-section">
        <div className="container">
          <div className="contact-grid">
            {/* Form */}
            <div>
              <ScrollReveal delay={0.1}>
                <h2 style={{
                  fontFamily: "'Outfit', 'Tajawal', sans-serif",
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  marginBottom: '24px',
                  color: 'var(--text-primary)'
                }}>
                  {t.contact.formTitle}
                </h2>
              </ScrollReveal>

              <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
                <ScrollReveal delay={0.15}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="contact-name">{t.contact.nameLabel}</label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        placeholder={t.contact.namePlaceholder}
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-email">{t.contact.emailLabel}</label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        placeholder={t.contact.emailPlaceholder}
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="contact-phone">{t.contact.phoneLabel}</label>
                      <input
                        type="tel"
                        id="contact-phone"
                        name="phone"
                        placeholder={t.contact.phonePlaceholder}
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-company">{t.contact.companyLabel}</label>
                      <input
                        type="text"
                        id="contact-company"
                        name="company"
                        placeholder={t.contact.companyPlaceholder}
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.25}>
                  <div className="form-group">
                    <label htmlFor="contact-message">{t.contact.messageLabel}</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      placeholder={t.contact.messagePlaceholder}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                    />
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                  <button
                    type="submit"
                    className="btn btn--primary"
                    id="contact-submit"
                    disabled={status === 'loading'}
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    {status === 'loading' ? t.contact.submitting : t.contact.submitBtn}
                    {status !== 'loading' && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                      </svg>
                    )}
                  </button>
                </ScrollReveal>

                {status === 'success' && (
                  <div className="form-message form-message--success" id="form-success">
                    ✅ {t.contact.successMessage}
                  </div>
                )}
                {status === 'error' && (
                  <div className="form-message form-message--error" id="form-error">
                    ❌ {t.contact.errorMessage}
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <ScrollReveal delay={0.15} direction="right">
                <div className="contact-info">
                  <h3 className="contact-info__title">{t.contact.infoTitle}</h3>

                  <div className="contact-info-card" id="info-phone">
                    <div className="contact-info-card__icon">📞</div>
                    <div className="contact-info-card__content">
                      <h4>{t.contact.phoneLabel2}</h4>
                      <a href={`tel:${t.contact.phone1.replace(/\s/g, '')}`}>{t.contact.phone1}</a>
                      <a href={`tel:${t.contact.phone2.replace(/\s/g, '')}`}>{t.contact.phone2}</a>
                    </div>
                  </div>

                  <div className="contact-info-card" id="info-email">
                    <div className="contact-info-card__icon">✉️</div>
                    <div className="contact-info-card__content">
                      <h4>{t.contact.emailLabel2}</h4>
                      <a href={`mailto:${t.contact.email}`}>{t.contact.email}</a>
                    </div>
                  </div>

                  <div className="contact-info-card" id="info-address">
                    <div className="contact-info-card__icon">📍</div>
                    <div className="contact-info-card__content">
                      <h4>{t.contact.addressLabel}</h4>
                      <p>{t.contact.address}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
