import Head from "next/head";
import { NextSeo } from 'next-seo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faArrowDown, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import products from '../data/products.js';
import SwiperCore, { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Autoplay, EffectCoverflow]);

const index = () => {
  return (
    <div>
      <Head>
        <meta property="og:image" content="https://launchtechllc.com/ogimage.png" key="ogimage" />
        <link rel="icon" href="/img/logos/favicon.png" />
      </Head>

      <NextSeo
        title="Launch Tech LLC - Build. Deploy. Scale."
        description="Launch Tech LLC is a B2C SaaS product ideater, incubator, and accelerator, launching scaled, consumer-based applications aiming to impact the world. We are home to Hours.zone, Ano.js, NPO Core, and much more."
      />

      <nav className="navbar navbar-expand-sm navbar-light">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img style={{ width: "50px" }} src="/img/logos/logo.png" alt="Launch Tech LLC Logo" />
          </a>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="https://www.instagram.com/launchtechllc/" target="_blank">
                <FontAwesomeIcon style={{ width: "18px" }} icon={faInstagram} />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://twitter.com/launchtechllc" target="_blank">
                <FontAwesomeIcon style={{ width: "18px" }} icon={faTwitter} />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.linkedin.com/company/launchtechllc" target="_blank">
                <FontAwesomeIcon style={{ width: "18px" }} icon={faLinkedin} />
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <header style={{ paddingTop: "50px" }}>
        <div className="container">
          <div className="header-grid split-grid" style={{ position: "relative" }}>
            <div>
              <h1 className="header-primary">Build. Deploy. Scale.</h1>
              <p>We launch consumer-based products to impact the world.</p>
              <a className="button-dark" href="#about">Learn more</a>
            </div>
            <img src="/img/illustrations/header.jpg" />
          </div>
        </div>
      </header>

      <div className="logo-banner">
        <div className="container">
          {
            // <div className="label">Happy users from</div>
          }
          <div className="logo-grid">
            <img className="tks" src="/img/users/tks.png" />
            <img className="launchx" src="/img/users/launchx.png" />
            <img className="leangap" src="/img/users/leangap.png" />
            <img className="cvt" src="/img/users/cvt.png" />
            <img className="beeznests" src="/img/users/beeznests.png" />
          </div>
        </div>
      </div>

      <div className="container py-4">
        <div className="stats-grid">
          <div className="stat">
            <span className="title">Commits</span>
            <span className="number">3,000+</span>
          </div>
          <div className="stat">
            <span className="title">Users</span>
            <span className="number">1,500+</span>
          </div>
          <div className="stat">
            <span className="title">Products</span>
            <span className="number">{products.length}</span>
          </div>
        </div>
      </div>

      <section id="about">
        <div className="container">
          <div className="about-grid split-grid">
            <img src="/img/illustrations/about.jpg" />
            <div>
              <h1 className="header-secondary">We launch impactful products.</h1>
              <p>Our mission is to build, deploy, and scale the world's most impactful consumer-based and B2C SaaS products.</p>
              <p>We ideate, incubate, and accelerate startup ideas, garner a sense of growth, and constantly ship things to market.</p>

              <a className="button-dark" href="#products">Our products</a>
            </div>
          </div>
        </div>
      </section>

      <section className="products" id="products">
        <div className="">
          <h2 className="header-secondary mb-5 text-center">Products</h2>

          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            navigation
            autoplay
            pagination={{ clickable: true }}
            breakpoints={{
              1200: {
                slidesPerView: 1.75
              },
              700: {
                slidesPerView: 1.5
              },
              300: {
                slidesPerView: 1.25
              }
            }}
          >
            {products.map((product, i) => (
              <SwiperSlide style={{ backgroundImage: `linear-gradient(to right bottom, ${product.colors.primary}, ${product.colors.secondary})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="product-slide">
                  <div className="split-grid">
                    <div>
                      <h3 className="header-tertiary" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        {product.title}
                        <div className="tags">
                          {product.featured ?
                            <span className="tag">FEATURED</span> : ""
                          }
                          {product.acquired ?
                            <span className="tag acquired">ACQUIRED</span> : ""
                          }
                        </div>
                      </h3>
                      <p>{product.description}</p>
                      <div className="tags">
                        {product.tags.map((tag, i) => (
                          <span className="tag">{tag}</span>
                        ))}
                      </div>
                      <a className="button-light mt-3" href={product.link} target="_blank">Check it out</a>
                    </div>
                    <div>
                      <table>
                        <tr>
                          <td style={{ borderRight: "2px solid white", borderBottom: "2px solid white" }}>
                            <span className="number">{product.users}</span>
                            users
                          </td>
                          <td style={{ borderLeft: "2px solid white", borderBottom: "2px solid white" }}>
                            <span className="number">{product.latestRelease}</span>
                            latest release
                          </td>
                        </tr>
                        <tr>
                        <td style={{ borderRight: "2px solid white", borderTop: "2px solid white" }}>
                          <span className="number">{product.commits}</span>
                          commits
                        </td>
                        <td style={{ borderLeft: "2px solid white", borderTop: "2px solid white" }}>
                          <span className="number date">{product.started}</span>
                          started
                        </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="header-secondary mb-5 text-center">The Story of Launch Tech</h2>
          <div className="founder-grid">
            <div>
              <p>I started Launch Tech for reasons completely different than what it is today.</p>
              <p>Back in January-April 2020, I was building projects furiously. <strong>Anything I learned or anything I wanted to build, I built.</strong></p>
              <p>But, what stayed true throughout the many projects I built was that they were all <strong>real-world, consumer-based applications,</strong> and that's where my passion lies.</p>
              <p>My mom helped me setup a company to give my projects some legal protection. But, I decided I wanted Launch Tech to be more than just a holding company.</p>
              <p>After cycling through many ideas, as well as a failed attempt at one concept, here we are!</p>
            </div>
            <div>
              <p>Launch Tech is a startup ideater, incubator, and accelerator, and the platform I always dreamed of having.</p>
              <p>No formal structures, boring business operations, or any of that. Purely ideas, code, and launches, day in day out.</p>
              <p>I hope that Launch Tech will continue to produce and launch more products into the future, and that users may find it helpful in whatever means available.</p>

              <div className="founder mt-3">
                <img src="/img/people/calix.jpg" alt="Calix Huang - Launch Tech LLC" />
                <div>
                  <h5 className="header-fourth mb-0">Calix Huang</h5>
                  <span className="title">Founder</span>
                  <div className="social mt-1">
                    <a href="https://www.instagram.com/calixo888/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                    <a href="https://www.twitter.com/calixo888/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                    <a href="https://www.linkedin.com/in/calix-huang/" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a>
                    <a href="https://github.com/calixo888" target="_blank"><FontAwesomeIcon icon={faGithub}/></a>
                    <a href="mailto:me@calix.dev" target="_blank"><FontAwesomeIcon icon={faEnvelope}/></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2020 Launch Tech LLC. All rights reserved.</p>
          <div className="social-media">
            <a href="https://www.instagram.com/launchtechllc/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://twitter.com/launchtechllc" target="_blank">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.linkedin.com/company/launchtechllc" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="mailto:hello@launchtechllc.com" target="_blank">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default index;
