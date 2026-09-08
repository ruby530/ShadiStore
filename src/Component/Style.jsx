import { useState } from "react";

const styles = [
  {
    name: "Royal",
    description:
      "Grand celebrations inspired by timeless Indian royalty.",
    image:
      "https://i.pinimg.com/736x/58/89/e6/5889e6ee7788fc456f7d9ffedb2411cd.jpg"
  },
  {
    name: "Modern",
    description:
      "Elegant contemporary celebrations for the modern couple.",
    image:
      "https://cdnnew.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-sunny-roses-and-gerberas-bouquet-278923-m.jpg"
  },
  {
    name: "Traditional",
    description:
      "Beautiful customs, colours and traditions.",
    image:
      "https://i.pinimg.com/736x/53/85/8e/53858e97c2a3cd97b4a3588efea15558.jpg"
  }
];

function Styles() {

  const [selectedStyle, setSelectedStyle] = useState("Royal");

  const currentStyle = styles.find(
    (style) => style.name === selectedStyle
  );

  return (

    <section className="style-section" id="styles">

      <div className="style-image">

        <img
          src={currentStyle.image}
          alt={currentStyle.name}
        />

      </div>

      <div className="style-content">

        <p>FIND YOUR STYLE</p>

        <h2>
          A celebration that feels like you.
        </h2>

        <div className="style-buttons">

          {styles.map((style) => (

            <button
              key={style.name}
              className={
                selectedStyle === style.name
                  ? "selected"
                  : ""
              }
              onClick={() =>
                setSelectedStyle(style.name)
              }
            >
              {style.name}
            </button>

          ))}

        </div>

        <div className="style-description">

          <h3>
            {currentStyle.name} Weddings
          </h3>

          <p>
            {currentStyle.description}
          </p>

        </div>

      </div>

    </section>
  );
}

export default Styles;