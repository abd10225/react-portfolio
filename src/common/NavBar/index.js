import React from "react";

function Navbar() {
  return (
    <section className="section" style={{ backgroundColor: "#f8ede3" }}>
      <h1 className="heading1 has-text-centered">ABDULLAH</h1>
      <nav className="navbar" role="navigation" aria-label="main navigation" style={{ backgroundColor: "#f8ede3" }}>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a href="/" target="_self" className="navbar-item">
              HOME
            </a>
            <a href="/about" target="_self" className="navbar-item">
              ABOUT
            </a>
            <a href="/exp" target="_self" className="navbar-item">
              EXPERIENCE
            </a>
            <a href="/skills" target="_self" className="navbar-item">
              SKILLS
            </a>
            <a className="navbar-item" href="/contact">
              CONTACT
            </a>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
