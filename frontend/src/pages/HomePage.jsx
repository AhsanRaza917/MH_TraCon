import Hero from '../components/Hero';
import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from '../components/ScrollReveal';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="page-transition">
      <Hero />

      {/* About Preview */}
      <section className="section" id="about-preview">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-tag">{t.about.sectionSubtitle}</span>
              <h2>{t.about.sectionTitle}</h2>
            </div>
          </ScrollReveal>
          <div className="about-content">
            <div className="about-content__text">
              <ScrollReveal delay={0.1}>
                <h2>{t.about.title}</h2>
                <p className="about-content__arabic">{t.about.arabicName}</p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p>{t.about.description1}</p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <p>{t.about.description2}</p>
              </ScrollReveal>
            </div>
            <div>
              <ScrollReveal delay={0.2} direction="right">
                <div className="about-stats">
                  <div className="about-stat-card">
                    <span className="about-stat-card__value">{t.about.stats.experience}</span>
                    <span className="about-stat-card__label">{t.about.stats.experienceLabel}</span>
                  </div>
                  <div className="about-stat-card">
                    <span className="about-stat-card__value">{t.about.stats.services}</span>
                    <span className="about-stat-card__label">{t.about.stats.servicesLabel}</span>
                  </div>
                  <div className="about-stat-card">
                    <span className="about-stat-card__value">{t.about.stats.clients}</span>
                    <span className="about-stat-card__label">{t.about.stats.clientsLabel}</span>
                  </div>
                  <div className="about-stat-card">
                    <span className="about-stat-card__value">{t.about.stats.projects}</span>
                    <span className="about-stat-card__label">{t.about.stats.projectsLabel}</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section" id="services-preview" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-tag">{t.services.sectionSubtitle}</span>
              <h2>{t.services.sectionTitle}</h2>
            </div>
          </ScrollReveal>
          <div className="services-grid">
            {t.services.items.slice(0, 6).map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.08}>
                <div className="card" id={`service-card-${index}`}>
                  <span className="card__icon">{service.icon}</span>
                  <h3 className="card__title">{service.title}</h3>
                  <p className="card__text">{service.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.3}>
            <div className="section-cta">
              <Link to="/services" className="btn btn--outline" id="view-all-services">
                {t.services.viewAll}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section" id="why-us">
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
                <div className="why-card" id={`why-card-${index}`}>
                  <span className="why-card__icon">{item.icon}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Goals */}
      <section className="section" id="goals" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-tag">{t.goals.sectionSubtitle}</span>
              <h2>{t.goals.sectionTitle}</h2>
            </div>
          </ScrollReveal>
          <div className="goals-grid">
            <ScrollReveal delay={0.1}>
              <div className="goal-card">
                <div className="goal-card__number">01</div>
                <p>{t.goals.goal1}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="goal-card">
                <div className="goal-card__number">02</div>
                <p>{t.goals.goal2}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="section" id="clients">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-tag">{t.clients.sectionSubtitle}</span>
              <h2>{t.clients.sectionTitle}</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="clients-grid">
              {t.clients.list.map((client, index) => (
                <div key={index} className="client-card" id={`client-${index}`}>
                  {client}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section" id="cta">
        <div className="container">
          <ScrollReveal>
            <div className="cta-content">
              <h2>{t.contact.sectionTitle}</h2>
              <p>{t.about.description2}</p>
              <Link to="/contact" className="btn btn--primary" id="cta-contact">
                {t.hero.ctaSecondary}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
