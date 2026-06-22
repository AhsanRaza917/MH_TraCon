import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer" id="footer">
      <div className="footer__glow"></div>
      <div className="footer__container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" className="navbar__logo">
              <span className="navbar__logo-icon">MH</span>
              <span className="navbar__logo-text">TraCon</span>
            </Link>
            <p className="footer__tagline">{t.footer.tagline}</p>
            <p className="footer__desc">{t.footer.description}</p>
          </div>

          <div className="footer__section">
            <h3 className="footer__heading">{t.footer.quickLinks}</h3>
            <div className="footer__links">
              <Link to="/">{t.nav.home}</Link>
              <Link to="/about">{t.nav.about}</Link>
              <Link to="/services">{t.nav.services}</Link>
              <Link to="/projects">{t.nav.projects}</Link>
              <Link to="/contact">{t.nav.contact}</Link>
            </div>
          </div>

          <div className="footer__section">
            <h3 className="footer__heading">{t.footer.contactInfo}</h3>
            <div className="footer__contact-list">
              <a href={`tel:${t.contact.phone1.replace(/\s/g, '')}`} className="footer__contact-item">
                <span className="footer__contact-icon">📞</span>
                {t.contact.phone1}
              </a>
              <a href={`tel:${t.contact.phone2.replace(/\s/g, '')}`} className="footer__contact-item">
                <span className="footer__contact-icon">📞</span>
                {t.contact.phone2}
              </a>
              <a href={`mailto:${t.contact.email}`} className="footer__contact-item">
                <span className="footer__contact-icon">✉️</span>
                {t.contact.email}
              </a>
              <p className="footer__contact-item">
                <span className="footer__contact-icon">📍</span>
                {t.contact.address}
              </p>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
