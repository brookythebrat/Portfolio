import React from "react";

const Navbar = () => {

  return (
    <nav style={{ backgroundColor: "black", color: "white", padding: "1rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          
        }}
      >
        {/* Logo */}
        <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Brook</div>

        {/* Navigation Links */}
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <a
            href="#home"
            style={{
              color: "white",
              textDecoration: "none",
              transition: "color 0.3s",
              
             }}
          >
            Home
          </a>
          <a
            href="#about-me"
            style={{
              color: "white",
              textDecoration: "none",
              transition: "color 0.3s",
            }}
          >
            About Me
          </a>
          <a
            href="#services"
            style={{
              color: "white",
              textDecoration: "none",
              transition: "color 0.3s",
            }}
          >
            Services
          </a>
          <a
            href="#projects"
            style={{
              color: "white",
              textDecoration: "none",
              transition: "color 0.3s",
            }}
          >
            Projects
          </a>
          <a
            href="#contact"
            style={{
              color: "white",
              textDecoration: "none",
              transition: "color 0.3s",
            }}
          >
            Contact
          </a>
        </div>

        {/* Connect Me Button */}
        <button
          style={{
            background: "linear-gradient(to right, #38bdf8, #3b82f6)",
            color: "white",
            padding: "0.5rem 1rem",
            borderRadius: "9999px",
            border: "none",
            cursor: "pointer",
            transition: "transform 0.3s",
          }}
        >
          Connect Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
