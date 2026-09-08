import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import WeddingJourney from "./Component/WeddingJourney";
import Moments from "./Component/Moments";
import Style from "./Component/Style";
import Collection from "./Component/Collection";
import Planner from "./Component/Planner";
import Footer from "./Component/Footer";

import "./App.css";

function App() {
  return (
    
    <div className="app">

      <Navbar />

      <main>
        <Hero/>

        <WeddingJourney />

        <Moments />

        <Style />

        <Collection />

        <Planner />
      </main>

      <Footer />

    </div>
  );
}

export default App;