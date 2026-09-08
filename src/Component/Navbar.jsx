import { useState } from "react";
function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });

    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      <div className="logo">
        {/* <span>Shaadi</span>
        <strong>Stores</strong> */}
        <div className="logoimage">
            <img  src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6e0d9853-1604-498d-b94c-4eccb3515a9e/d9cvdyf-75d40ed4-469d-41ce-8db6-6ecfa6b4df96.png/v1/fill/w_1600,h_1600/concept_logo___ruby_by_ssaazz_d9cvdyf-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYwMCIsInBhdGgiOiJcL2ZcLzZlMGQ5ODUzLTE2MDQtNDk4ZC1iOTRjLTRlY2NiMzUxNWE5ZVwvZDljdmR5Zi03NWQ0MGVkNC00NjlkLTQxY2UtOGRiNi02ZWNmYTZiNGRmOTYucG5nIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.caO2yajAMyq_yvj-kpxUM0lY-_vnGyqr1g7FiVoP_w8" alt="no image" />
        </div>
        
      </div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>

        <button onClick={() => scrollToSection("home")}>
          Home
        </button>

        <button onClick={() => scrollToSection("journey")}>
          Wedding
        </button>

        <button onClick={() => scrollToSection("moments")}>
          Moments
        </button>

        <button onClick={() => scrollToSection("styles")}>
          Styles
        </button>

        <button onClick={() => scrollToSection("collection")}>
          Collection
        </button>

      </div>
      <div className="searchButton">
        <input type="text" placeholder="Search something...!"/>
        <button style={{width:"40%"}}>search</button>
      </div>

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

    </nav>
  );
}

export default Navbar;