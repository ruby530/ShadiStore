const moments = [
  {
    title: "The Bride",
    image:
      "https://www.shaadidukaan.com/vogue/wp-content/uploads/2020/03/Bridal-Poses-Photo.jpg"
  },
  {
    title: "The Celebration",
    image:
      "https://elegantweddingdirectory.com/wp-content/uploads/2020/03/elegant-wedding-magical-boho-hilltop-wedding-at-sunset31.jpg"
  },
  {
    title: "The Details",
    image:
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "The Couple",
    image:
      "https://cdn.pixabay.com/photo/2023/08/08/09/20/wedding-8176868_1280.jpg"
  },
  {
    title: "The Traditions",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.5LgHOYgwY14so4zQA3KRlwHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    title: "The Memories",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80"
  }
];

function Moments() {

  return (

    <section className="section moments" id="moments">

      <div className="section-heading">

        <p>LOVE IN EVERY FRAME</p>

        <h2>
          Wedding Moments
        </h2>

        <span>
          The little moments that become forever memories.
        </span>

      </div>

      <div className="moments-grid">

        {moments.map((moment) => (

          <div className="moment-card" key={moment.title}>

            <img
              src={moment.image}
              alt={moment.title}
            />

            <div className="moment-overlay">

              <h3>{moment.title}</h3>

              <span>
                Explore →
              </span>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Moments;