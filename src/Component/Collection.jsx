import { useState } from "react";

const collection = [
  {
    id: 1,
    name: "Royal Necklace",
    category: "Jewellery",
    price: "₹1,25,000",
    image:
      "https://media.istockphoto.com/id/2212704901/photo/premium-gemstone-necklace-styled-on-luxurious-green-cloth-background.jpg?s=1024x1024&w=is&k=20&c=oc-fOs6dDaMll0f9K6jN6p7JpjUpKPIUWFaQXefg5nQ="
  },
  {
    id: 2,
    name: "Bridal Earrings",
    category: "Jewellery",
    price: "₹75,000",
    image:
      "https://media.istockphoto.com/id/1383885182/photo/gold-jewelry-earrings-made-of-gold-on-the-background-of-silk.jpg?s=1024x1024&w=is&k=20&c=70TUy12DOjUr3Y8Jb3pgKQPM4C7oImoWoR8uVtFYAhs="
  },
  {
    id: 3,
    name: "Wedding Bangles",
    category: "Accessories",
    price: "₹45,000",
    image:
      "https://media.istockphoto.com/id/2291149139/photo/traditional-gold-bangles-with-intricate-carved-designs-placed-on-white-background-elegant.jpg?s=1024x1024&w=is&k=20&c=jCLAFfP8NuxgyNLoPnV-Vxm4nvr2QouhaSxeod96Zos="
  },
  {
    id: 4,
    name: "Bridal Makeup Kit",
    category: "Jewellery",
    price: "₹1,85,000",
    image:
      "https://media.istockphoto.com/id/1351893996/photo/makeup-palettes-with-shadows-and-concealers-make-up-products-on-beige-background.jpg?s=1024x1024&w=is&k=20&c=ash0vMFByMxxK9hCf84XslzOLRXATfm-fchN4AiTZr4="
  }
];

function Collection() {

  const [selectedItem, setSelectedItem] = useState(null);

  return (

    <section className="section collection" id="collection">

      <div className="section-heading">

        <p>THE BRIDAL COLLECTION</p>

        <h2>
          Made for your forever.
        </h2>

        <span>
          Discover pieces created for unforgettable celebrations.
        </span>

      </div>

      <div className="collection-grid">

        {collection.map((item) => (

          <div
            className="product-card"
            key={item.id}
          >

            <div className="product-image">

              <img
                src={item.image}
                alt={item.name}
              />

            </div>

            <div className="product-info">

              <span>{item.category}</span>

              <h3>{item.name}</h3>

              <p>{item.price}</p>

              <button
                onClick={() => setSelectedItem(item)}
              >
                View Details
              </button>

            </div>

          </div>

        ))}

      </div>

      {selectedItem && (

        <div className="modal">

          <div className="modal-box">

            <button
              className="close-btn"
              onClick={() => setSelectedItem(null)}
            >
              ×
            </button>

            <img
              src={selectedItem.image}
              alt={selectedItem.name}
            />

            <h2>{selectedItem.name}</h2>

            <p>{selectedItem.category}</p>

            <strong>{selectedItem.price}</strong>

            <button className="primary-btn">
              Enquire Now
            </button>

          </div>

        </div>

      )}

    </section>
  );
}

export default Collection;