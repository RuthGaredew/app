export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Ruth</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Passionate About Crafting Exceptional Websites.
          </p>
        </div>
        <a
        href="https://www.instagram.com/ruth_garedew"
        className="navbar--content"
        target="_blank"
        rel="noreferrer"
      >
        <button className="btn btn-primary">Get In Touch</button>
        </a>
      </div>
      <div className="hero--section--img">
        <img src="./img/about-me.png" alt="Hero Section" />
      </div>
    </section>
  );
}
