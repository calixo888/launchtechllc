import { NextSeo } from 'next-seo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import projects from '../data/projects.js';

const index = () => {
  return (
    <div>
      <NextSeo
        title="Launch Tech LLC - Scaled applications to impact the world."
        description="Launch Tech LLC is a SaaS product holding company for scaled applications aiming to impact the world. We create, incubate, and accelerate the growth of different software applications and deploy them for the world to use!"
      />

      <header>
        <div className="container text-center">
          <h1 className="header-primary">Launch Tech LLC</h1>
          <p>Scaled applications to impact the world.</p>
        </div>
      </header>

      <div className="container py-4">
        <div className="stats-grid">
          <div className="stat">
            <span className="title">Interactions</span>
            <span className="number">30,000+</span>
          </div>
          <div className="stat">
            <span className="title">Users</span>
            <span className="number">2,000+</span>
          </div>
          <div className="stat">
            <span className="title">Projects</span>
            <span className="number">{projects.length}</span>
          </div>
        </div>
      </div>

      <section>
        <div className="container">
          <h1 className="header-secondary mb-4">Projects</h1>
          <div className="projects-grid">
            {projects.map((project, i) => (
              <a href={project.link} target="_blank">
                <div className={`project ${project.featured ? "featured" : ""}`}>
                  <h3 className="header-fourth">{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.tags.map((tag, i) => (
                      <span className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h1 className="header-secondary mb-4">About</h1>
          <div className="about-grid">
            <img src="/img/people/calix.jpeg" alt="Calix Huang - Launch Tech LLC" />
            <div className="about">
              <h2 className="header-tertiary">Calix Huang</h2>
              <div className="tags my-2">
                <div className="tag">@calixo888</div>
                <div className="tag">Full-stack developer</div>
                <div className="tag">Startup engineer</div>
                <div className="tag">Entrepreneur</div>
              </div>
              <p>
                Hey there! My name is Calix, and I'm a self-taught startup engineer, with a focus on full-stack web development. I believe in learning by doing, so I try to model my projects around useful ideas that can be deployed to users around the globe. My skills in full-stack development allow me to take a project from an idea to a product!
              </p>
              <div className="social">
                <a href="https://www.instagram.com/calixo888/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                <a href="https://www.linkedin.com/in/calix-huang/" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a>
                <a href="https://github.com/calixo888" target="_blank"><FontAwesomeIcon icon={faGithub}/></a>
                <a href="mailto:me@calix.dev" target="_blank"><FontAwesomeIcon icon={faEnvelope}/></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="copyright">
        <small>&copy; 2020 Launch Tech LLC. All rights reserved.</small>
      </div>
    </div>
  )
}

export default index;
