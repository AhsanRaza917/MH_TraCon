import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from '../components/ScrollReveal';

export default function ServicesPage() {
  const { t } = useLanguage();

  return (
    <div className="page-transition">
      {/* Page Hero */}
      <section className="page-hero" id="services-hero">
        <div className="container">
          <span className="section-tag">{t.services.sectionSubtitle}</span>
          <h1>{t.services.sectionTitle}</h1>
        </div>
      </section>

      {/* All Services */}
      <section className="section" id="all-services">
        <div className="container">
          <div className="services-grid">
            {t.services.items.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.06}>
                <div className="card" id={`service-full-${index}`}>
                  <span className="card__icon">{service.icon}</span>
                  <h3 className="card__title">{service.title}</h3>
                  <p className="card__text">{service.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="section" id="specializations" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-tag">{t.whyUs.sectionSubtitle}</span>
              <h2>{t.whyUs.sectionTitle}</h2>
            </div>
          </ScrollReveal>
          <div className="why-grid">
            {t.whyUs.items.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="why-card" id={`services-why-${index}`}>
                  <span className="why-card__icon">{item.icon}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
