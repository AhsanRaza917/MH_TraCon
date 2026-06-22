import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from '../components/ScrollReveal';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="page-transition">
      {/* Page Hero */}
      <section className="page-hero" id="about-hero">
        <div className="container">
          <span className="section-tag">{t.about.sectionSubtitle}</span>
          <h1>{t.about.sectionTitle}</h1>
        </div>
      </section>

      {/* About Content */}
      <section className="section" id="about-content">
        <div className="container">
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

      {/* Mission & Vision */}
      <section className="section" id="mission-vision" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-tag">{t.about.mission} & {t.about.vision}</span>
              <h2>{t.about.mission}</h2>
            </div>
          </ScrollReveal>
          <div className="mv-grid">
            <ScrollReveal delay={0.1}>
              <div className="mv-card">
                <h3>{t.about.mission}</h3>
                <p>{t.about.missionText}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="mv-card">
                <h3>{t.about.vision}</h3>
                <p>{t.about.visionText}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Goals */}
      <section className="section" id="about-goals">
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

      {/* Why Choose Us */}
      <section className="section" id="about-why" style={{ background: 'var(--bg-secondary)' }}>
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
                <div className="why-card" id={`about-why-card-${index}`}>
                  <span className="why-card__icon">{item.icon}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="section" id="about-clients">
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
                <div key={index} className="client-card">
                  {client}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
