const events = [
  {
    number: "01",
    title: "Engagement",
    text: "Begin your forever with a beautiful celebration."
  },
  {
    number: "02",
    title: "Haldi",
    text: "A colourful celebration filled with laughter and joy."
  },
  {
    number: "03",
    title: "Mehendi",
    text: "Celebrate love with beautiful traditions and patterns."
  },
  {
    number: "04",
    title: "Wedding",
    text: "The moment two hearts become one."
  },
  {
    number: "05",
    title: "Reception",
    text: "End the celebration with unforgettable memories."
  }
];

function WeddingJourney() {

  return (

    <section className="section journey" id="journey">

      <div className="section-heading">

        <p>THE CELEBRATION</p>

        <h2>
          Your Wedding Journey
        </h2>

        <span>
          Every ceremony has a story.
        </span>

      </div>

      <div className="journey-grid">

        {events.map((event) => (

          <div className="journey-card" key={event.number}>

            <span className="event-number">
              {event.number}
            </span>

            <h3>{event.title}</h3>

            <p>{event.text}</p>

            <button>
              Discover →
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default WeddingJourney;