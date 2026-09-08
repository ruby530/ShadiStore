function Hero() {

  return (

    <section className="hero" id="home">

      <div className="hero-overlay">

        <p className="small-heading">
          CELEBRATE LOVE
        </p>

        <h1>
          Your Story.
          <br />
          Your Moment.
        </h1>

        <p className="hero-text">
          Discover beautiful ideas, traditions and
          unforgettable moments for your special day.
        </p>

        <button
          className="primary-btn"
          onClick={() =>
            document
              .getElementById("journey")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Explore Wedding
        </button>

      </div>

    </section>
  );
}

export default Hero;