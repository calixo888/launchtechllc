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
    </div>
  )
}

export default index;
