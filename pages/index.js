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
      </Head>

      <NextSeo
        title="Launch Tech LLC - Build. Deploy. Scale."
        description="Launch Tech LLC ideates, incubates, and accelerates consumer-centric products through head-on development and organic growth. Our mission is to launch the world's most impactful ventures to a massive scale."
      />

      <div className="alert-banner">
        <div className="container">
          <p>🔥 Hours has officially been acquired by Fiveable! <a href="https://hi.fiveable.me/post/fiveable-acquires-hours-to-bring-virtual-study-rooms-to-students" target="_blank">Read more &rarr;</a>  🔥</p>
        </div>
      </div>

      <nav className="navbar navbar-expand-sm navbar-light">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img style={{ width: "150px" }} src="/img/logos/logo-full.png" alt="Launch Tech LLC Logo" />
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
              <p>We launch consumer-centric products & ventures to impact the world.</p>
              <a className="button-dark" href="#about">Learn more</a>
            </div>
            <img src="/img/illustrations/header.jpg" />
          </div>
        </div>
      </header>

      <div className="logo-banner">
        <div className="container">
          <div className="label">Featured in</div>
          <div className="logo-grid">

            <a href="https://techcrunch.com/2021/05/12/fiveable-hours-acquisition/" target="_blank">
              <img className="techcrunch" src="/img/banner/techcrunch.png" />
            </a>
            <a href="https://www.morningbrew.com/sidekick/issues/2021/02/22" target="_blank">
              <img className="morningbrew" src="/img/banner/morningbrew.png" />
            </a>
            <a href="https://markets.businessinsider.com/news/stocks/fiveable-acquires-hours-a-virtual-studying-platform-founded-by-a-16-year-old-high-school-junior-1030409076" target="_blank">
              <img className="businessinsider" src="/img/banner/businessinsider.png" />
            </a>
            <a href="https://news.yahoo.com/fiveable-acquires-hours-virtual-studying-122500748.html" target="_blank">
              <img className="yahoo" src="/img/banner/yahoo.png" />
            </a>
            <a href="https://www.crunchbase.com/acquisition/fiveable-acquires-hours--dbad6653" target="_blank">
              <img className="crunchbase" src="/img/banner/crunchbase.png" />
            </a>
          </div>
        </div>
      </div>

      <section id="about">
        <div className="container">
          <div className="about-container">
            <h1 className="header-secondary">We love consumers.</h1>
            <p style={{ fontSize: "18.5px" }}>We ideate, incubate, and accelerate consumer-centric products through head-on development and organic growth. Our mission is to launch the world's most impactful ventures to a massive scale.</p>
          </div>

          <div className="container mt-5 py-2">
            <div className="stats-grid">
              <div className="stat">
                <span className="title label">People reached</span>
                <span className="number">500,000+</span>
              </div>
              <div className="stat">
                <span className="title label">Users</span>
                <span className="number">20,000+</span>
              </div>
              <div className="stat">
                <span className="title label">Acquisitions</span>
                <span className="number">4</span>
              </div>
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
                      {
                        // <div className="tags">
                        //   {product.tags.map((tag, i) => (
                        //     <span className="tag">{tag}</span>
                        //   ))}
                        // </div>
                      }
                      <a className="button-light" href={product.link} target="_blank">Check it out</a>
                    </div>
                    <div>
                      <table>
                        <tr>
                          <td style={{ borderRight: "2px solid white", borderBottom: "2px solid white" }}>
                            <span className="number">{product.tag1.value}</span>
                            {product.tag1.label}
                          </td>
                          <td style={{ borderLeft: "2px solid white", borderBottom: "2px solid white" }}>
                            <span className="number">{product.tag2.value}</span>
                            {product.tag2.label}
                          </td>
                        </tr>
                        <tr>
                          <td style={{ borderRight: "2px solid white", borderTop: "2px solid white" }}>
                            <span className="number">{product.tag3.value}</span>
                            {product.tag3.label}
                          </td>
                          <td style={{ borderLeft: "2px solid white", borderTop: "2px solid white" }}>
                            <span className="number date">{product.tag4.value}</span>
                            {product.tag4.label}
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
              <p>I was able to setup a company to give my projects some legal protection. But, I decided I wanted Launch Tech to be more than just a holding company.</p>
              <p>After cycling through many ideas, as well as a failed attempt at one concept, here we are!</p>
            </div>
            <div>
              <p>Launch Tech is a consumer-centric venture ideater, incubator, and accelerator. No formal structures, boring business operations, or any of that. Purely ideas, execution, launches, and exits - day in day out.</p>
              <p>I hope that Launch Tech will continue to produce and launch more ventures into the future, and that users may find it helpful in whatever means available.</p>
              <p>Launch Tech will continue to evolve over time, but always with consumers and impact at the front of minds.</p>

              <div className="founder mt-3">
                <img src="/img/people/calix.jpg" alt="Calix Huang - Launch Tech LLC" />
                <div>
                  <h5 className="header-fourth mb-0">Calix Huang</h5>
                  <span className="title">Founder & CEO</span>
                  <div className="social mt-1">
                    <a href="https://www.instagram.com/calixo888/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                    <a href="https://www.twitter.com/calixo888/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                    <a href="https://www.linkedin.com/in/calix-huang/" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a>
                    <a href="mailto:calix@launchtechllc.com" target="_blank"><FontAwesomeIcon icon={faEnvelope}/></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2021 Launch Tech LLC. All rights reserved.</p>
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
