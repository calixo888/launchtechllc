import Head from "next/head";
import { NextSeo } from 'next-seo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import products from '../data/products.js';
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const index = () => {
  return (
    <div>
      <Head>
        <meta property="og:image" content="https://launchtechllc.com/ogimage.png" key="ogimage" />
        <link rel="icon" href="/img/logos/favicon.png" />
      </Head>

      <NextSeo
        title="Launch Tech LLC - Scaled applications to impact the world."
        description="Launch Tech LLC is a SaaS product holding company for scaled applications aiming to impact the world. We create, incubate, and accelerate the growth of different software applications and deploy them for the world to use!"
      />

      {
        // <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
        //   <div className="container">
        //     <a href="/" className="navbar-brand">
        //       <img style={{ width: "50px" }} src="/img/logos/logo-cut-light.png" alt="Launch Tech LLC Logo" />
        //     </a>
        //     <ul className="navbar-nav ml-auto">
        //       <li className="nav-item">
        //         <a className="nav-link" href="#">Home</a>
        //       </li>
        //       <li className="nav-item">
        //         <a className="nav-link" href="#">About</a>
        //       </li>
        //       <li className="nav-item">
        //         <a className="nav-link" href="#">Products</a>
        //       </li>
        //     </ul>
        //   </div>
        // </nav>
      }

      <header>
        <div className="container">
          <div className="split-grid">
            <div>
              <h1 className="header-primary">Build. Deploy. Scale.</h1>
              <p>Scaled applications to impact the world.</p>
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

      <section className="products">
        <div className="">
          <h1 className="header-secondary mb-5 text-center">Products</h1>

          <Swiper
            effect='coverflow'
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1.75}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
          >
            {products.map((product, i) => (
              <SwiperSlide style={{ backgroundImage: "url(/img/projects/anojs.png)", backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="product-slide">
                  <div className="split-grid">
                    <div>
                      <h3 className="header-tertiary">{product.title}</h3>
                      <p>{product.description}</p>
                      <div className="tags">
                        {product.tags.map((tag, i) => (
                          <span className="tag">{tag}</span>
                        ))}
                      </div>
                      <a className="button-light mt-3" href={product.link} target="_blank">Learn more</a>
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
                          <span className="number">{product.users}</span>
                          users
                        </td>
                        <td style={{ borderLeft: "2px solid white", borderTop: "2px solid white" }}>
                          <span className="number">{product.latestRelease}</span>
                          latest release
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
          <h1 className="header-secondary mb-4">From the Founder</h1>
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
                Hey there! My name is Calix, and I'm a self-taught startup engineer, with a focus on full-stack web development. I believe in learning by doing, so I try to model my products around useful ideas that can be deployed to users around the globe. My skills in full-stack development allow me to take a project from an idea to a product!
              </p>
              <p>
                Launch Tech LLC is my personal software holding company, and this is where I build, host, deploy, and scale all of my personal products :)
              </p>
              <div className="social">
                <a href="https://www.instagram.com/calixo888/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                <a href="https://www.twitter.com/calixo888/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                <a href="https://www.linkedin.com/in/calix-huang/" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a>
                <a href="https://github.com/calixo888" target="_blank"><FontAwesomeIcon icon={faGithub}/></a>
                <a href="mailto:me@calix.dev" target="_blank"><FontAwesomeIcon icon={faEnvelope}/></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2020 Launch Tech LLC. All rights reserved.</p>
          <div className="social-media">
            <a href="#" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" target="_blank">
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
