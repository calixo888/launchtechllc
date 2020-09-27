import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const index = () => {
  return (
    <div>
      <header>
        <div className="container text-center">
          <h1>Launch Tech LLC</h1>
          <p>We build the world's best SaaS products!</p>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="stats-grid">
            <div className="stat">
              <span className="title">Interactions</span>
              <span className="number">30,000</span>
            </div>
            <div className="stat">
              <span className="title">Interactions</span>
              <span className="number">30,000</span>
            </div>
            <div className="stat">
              <span className="title">Interactions</span>
              <span className="number">30,000</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="projects-grid">
            <div className="project">
              <h3>Title</h3>
              <p>Description</p>
              <div className="tags">
                <div className="tag">Tag</div>
                <div className="tag">Tag</div>
                <div className="tag">Tag</div>
                <div className="tag">Tag</div>
                <div className="tag">Tag</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="about-grid">
            <img src="/img/people/calix.jpeg" alt="Calix Huang - Launch Tech LLC" />
            <div className="about">
              <h2>Calix Huang</h2>
              <div className="tags my-2">
                <div className="tag">Tag</div>
                <div className="tag">Tag</div>
                <div className="tag">Tag</div>
                <div className="tag">Tag</div>
                <div className="tag">Tag</div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
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
    </div>
  )
}

export default index;
