import { useMemo } from "react";
import "./App.css";
import heroImage from "./assets/logo.jpeg";
import bouquet from "./assets/bouquet.jpg";
import bouquet1 from "./assets/bouquet1.jpeg";
import CollectionSection from "./collectionsection";
import ContactSection from "./contactsection";
import FooterSection from "./footersection";

import bouquet2 from "./assets/bouquet2.webp";
import bouquet4 from "./assets/bouquet4.jpg";
import bouquet5 from "./assets/bouquet5.webp";
import bouquet6 from "./assets/bouquet6.avif";


function App() {
  // Generate petal positions once instead of re-randomizing on every render
  const petals = useMemo(
    () =>
      Array.from({ length: 40 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 15 + Math.random() * 25,
        duration: 5 + Math.random() * 4,
      })),
    []
  );

  return (
    <div
      style={{
        position: "relative", // anchors the absolutely-positioned petals
        minHeight: "100vh",
        background: "linear-gradient(135deg,#fff8fb,#fff7fa)",
        textAlign: "center",
        padding: "20px",
        overflow: "hidden",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 50px",
          color: "#B76E79",
          fontWeight: "600",
          fontSize: "18px",
        }}
      >
        <h2>The Mala Story</h2>

        <div style={{ display: "flex", gap: "25px" }}>
          <span>Home</span>
          <span>Collection</span>
          <span>Gallery</span>
          <span>Contact</span>
        </div>
      </nav>

      {petals.map((petal, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${petal.left}%`,
            top: `${petal.top}%`,
            fontSize: `${petal.size}px`,
            opacity: 0.25,
            animation: `float ${petal.duration}s ease-in-out infinite`,
            pointerEvents: "none",
          }}
        >
          🌸
        </div>
      ))}

      {/* Hero */}
      <img
        src={heroImage}
        alt="The Mala Story logo"
        style={{
          width: "380px",
          marginTop: "20px",
        }}
      />

      <h1
        style={{
          fontSize: "70px",
          color: "#A86B5A",
          marginBottom: "10px",
          textTransform: "uppercase",
          textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
          fontWeight: "700",
          fontFamily: "'Cormorant Garamond', serif",
        }}
      >
        THE MALA STORY
      </h1>

      <p
        style={{
          fontSize: "20px",
          color: "#9c6b3c",
        }}
      >
        Premium Handmade Varmalas, Garlands & Bouquets
      </p>

      <button
        onClick={() => {
          document.getElementById("gallery")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        style={{
          marginTop: "25px",
          background: "linear-gradient(135deg,#FFF5F8 0%,#FDEDEC 100%)",
          color: "#9c6b3c",
          padding: "16px 40px",
          border: "none",
          borderRadius: "50px",
          fontSize: "22px",
          cursor: "pointer",
          margin: "0 auto",
        }}
      >
        Explore Collection
      </button>
      

      {/* Gallery */}
      <div
        id="gallery"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "50px",
          flexWrap: "wrap",
        }}
      >
        <img
          src={bouquet}
          alt="Handmade bouquet"
          style={{ width: "220px", borderRadius: "20px" }}
        />

        <img
          src={bouquet1}
          alt="Handmade bouquet"
          style={{ width: "220px", borderRadius: "20px" }}
        />

        <img
          src={bouquet3}
          alt="Handmade bouquet"
          style={{ width: "220px", borderRadius: "20px" }}
        />
      </div><CollectionSection /><img
  src={bouquet2}
  alt="Bouquet"
  style={{ width: "220px", borderRadius: "20px" }}
/>

<img
  src={bouquet4}
  alt="Bouquet"
  style={{ width: "220px", borderRadius: "20px" }}
/>

<img
  src={bouquet5}
  alt="Bouquet"
  style={{ width: "220px", borderRadius: "20px" }}
/>

<img
  src={bouquet6}
  alt="Bouquet"
  style={{ width: "220px", borderRadius: "20px" }}
/>

      {/* About Section */}
      <div
        style={{
          marginTop: "80px",
          padding: "60px 30px",
          background: "#fff0f5",
          borderRadius: "30px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "48px",
            color: "#b76e79",
            fontFamily: "'Cormorant Garamond', serif",
            marginBottom: "20px",
          }}
        >
          About The Mala Story
        </h2>

        <p
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            fontSize: "20px",
            color: "#7a5a5a",
            lineHeight: "1.8",
          }}
        >
          Every varmala, bouquet and floral accessory is handcrafted with love
          and elegance. We create beautiful floral designs that make your
          wedding and special moments unforgettable.
        </p><FooterSection />
      </div>
      <ContactSection />
    </div>
    
  );
}

export default App;