import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from '../components/ScrollReveal';

export default function ProjectsPage() {
  const { t } = useLanguage();

  return (
    <div className="page-transition">
      {/* Page Hero */}
      <section className="page-hero" id="projects-hero">
        <div className="container">
          <span className="section-tag">{t.projects.sectionSubtitle}</span>
          <h1>{t.projects.sectionTitle}</h1>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section" id="all-projects">
        <div className="container">
          <div className="projects-grid">
            {t.projects.items.map((project, index) => (
              <ScrollReveal key={index} delay={index * 0.08}>
                <div className="project-card" id={`project-${index}`}>
                  <div className="project-card__number">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="section" id="projects-clients" style={{ background: 'var(--bg-secondary)' }}>
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
