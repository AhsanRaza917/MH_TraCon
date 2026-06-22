import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from './ScrollReveal';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero" id="hero">
      <div className="hero__bg">
        <div className="hero__gradient"></div>
        <div className="hero__particles">
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`hero__particle hero__particle--${i + 1}`}></div>
          ))}
        </div>
      </div>
      <div className="hero__content">
        <div className="hero__text">
          <ScrollReveal delay={0.1}>
            <span className="hero__badge">{t.hero.subtitle}</span>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h1 className="hero__title">
              {t.hero.title}{' '}
              <span className="hero__title--gold">{t.hero.highlight}</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="hero__description">{t.hero.description}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <div className="hero__buttons">
              <Link to="/services" className="btn btn--primary" id="hero-cta">
                {t.hero.cta}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link to="/contact" className="btn btn--outline" id="hero-contact">
                {t.hero.ctaSecondary}
              </Link>
            </div>
          </ScrollReveal>
        </div>
        <ScrollReveal delay={0.5} direction="right">
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">{t.about.stats.services}</span>
              <span className="hero__stat-label">{t.about.stats.servicesLabel}</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">{t.about.stats.clients}</span>
              <span className="hero__stat-label">{t.about.stats.clientsLabel}</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">{t.about.stats.projects}</span>
              <span className="hero__stat-label">{t.about.stats.projectsLabel}</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
