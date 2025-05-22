function HomePage() {
  //const [count, setCount] = useState(0)

  return (
      
      <div>
        
      <main className="hero">
    <div className="hero-text">
      <h1><span className="highlight">Powerful</span> data insights <span className="highlight">for all</span></h1>
      <p>
        Torch makes data analysis easy for everyone. Visualise key metrics, track performance, and discover trends without needing a data science background.
      </p>
      <div className="buttons">
        <a href="get-started.html" className="get-started">Get started</a>
        <a href="learn-more.html" className="learn-more">Learn more</a>
      </div>
    </div>
    <div className="hero-image">
      <img src="https://i.imgur.com/aXKS7KL.png" alt="Charts" />
    </div>
  </main>
  
    </div>
  )
}

export default HomePage
