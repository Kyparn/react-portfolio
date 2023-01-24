import './Portfolio.css'

const Portfolio = () => {
  const DATA = [
    {
      id: 1,
      image: ['https://i.imgur.com/leQfBzE.png'],
      title: 'Todo',
      github: 'https://github.com/Kyparn/project-todos',
      demo: 'https://luxury-hummingbird-8c8ae2.netlify.app',
    },
    {
      id: 2,
      image: ['https://i.imgur.com/0Ws00vj.png'],
      title: 'Calculator',
      github: 'https://github.com/Kyparn/Redux-calculator',
      demo: 'https://reactredux-calculator.netlify.app',
    },
    {
      id: 3,
      image: ['https://i.imgur.com/RvCP5Vu.jpg'],
      title: 'Spotify',
      github: 'https://github.com/Kyparn/project-music-releases',
      demo: 'https://musing-joliot-d59b54.netlify.app',
    },
    {
      id: 4,
      image: ['https://i.imgur.com/6WxPyRY.png'],
      title: 'Githubtracker',
      github: 'https://github.com/Kyparn/project-github-tracker',
      demo: 'https://github-trackar.netlify.app',
    },
    {
      id: 5,
      image: ['https://i.imgur.com/tCQkrW7.png'],
      title: 'Guess Who',
      github: 'https://github.com/Kyparn/project-guess-who',
      demo: 'https://sad-wing-a82c72.netlify.app',
    },
  ]
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="contianer portfolio_container">
        {DATA.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a
                  href={github}
                  className="button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="button button-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Web Site
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
