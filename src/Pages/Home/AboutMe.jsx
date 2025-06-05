export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/hero_img.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About Me</p>
          <h1 className="skills-section--heading">Hi, I'm Ruth Garedew!</h1>
          <p className="hero--section-description">
            I'm a Full Stack Developer who loves building websites. I work with the MERN stack, Angular, and databases like PostgreSQL and MySQL to create interactive web apps.
          </p>
         
          <p className="hero--section-description">
            As a UI designer, I use Figma to design user-friendly interfaces. I enjoy solving problems creatively and making projects look great.
          </p>
          
          <p className="hero--section-description">
            I work well in teams and always strive to deliver high-quality work on time. I’m friendly, reliable, and eager to learn new things.
          </p>
          
          <p className="hero--section-description">
            Outside of coding, I like exploring new tech, reading about design, and enjoying nature. Feel free to check out my portfolio and get in touch!
          </p>
        </div>
      </div>
    </section>
  );
}