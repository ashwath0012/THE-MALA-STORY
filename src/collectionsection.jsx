import { useState } from "react";
import bouquet from "./assets/bouquet.jpg";
import bouquet1 from "./assets/bouquet1.jpeg";
import bouquet3 from "./assets/bouquet3.jpg";

// TODO: keep this number in sync with ContactSection.jsx (or move both into a shared config file)
const WHATSAPP_NUMBER = "919876543210";

const CATEGORIES = ["All", "Varmalas", "Garlands", "Bouquets"];

// TODO: swap the emoji placeholders for real photos once you have them —
// just import the image like the bouquet ones below and set it on `image`.
const PRODUCTS = [
  {
    id: 1,
    name: "Rose & Marigold Varmala",
    category: "Varmalas",
   
    description:
      "Classic red rose varmala with marigold accents, ideal for traditional ceremonies.",
    image: null,
    emoji: "🌺",
  },
  {
    id: 2,
    name: "White Orchid Varmala",
    category: "Varmalas",
   
    description:
      "Elegant white orchids with a touch of greenery for a modern, minimal look.",
    image: null,
    emoji: "🤍",
  },
  {
    id: 3,
    name: "Marigold Door Garland",
    category: "Garlands",
    
    description:
      "Vibrant marigold toran, perfect for entrance and mandap decor.",
    image: null,
    emoji: "🌼",
  },
  {
    id: 4,
    name: "Jasmine Hair Garland",
    category: "Garlands",
    
    description: "Fragrant jasmine strand for hair, ideal for festive occasions.",
    image: null,
    emoji: "🌸",
  },
  {
    id: 5,
    name: "Pastel Rose Bouquet",
    category: "Bouquets",
    
    description: "Soft pastel roses wrapped in premium paper, ready to gift.",
    image: bouquet,
  },
  {
    id: 6,
    name: "Mixed Bloom Bouquet",
    category: "Bouquets",
    
    description: "A lively mix of seasonal blooms for any celebration.",
    image: bouquet1,
  },
  {
    id: 7,
    name: "Classic White Bouquet",
    category: "Bouquets",
    
    description: "Timeless white florals, popular for bridal use.",
    image: bouquet3,
  },
];

function ProductCard({ product }) {
  const enquireUrl = `https://wa.me/${8446614188}?text=${encodeURIComponent(
    `Hi! I'm interested in the "${product.name}" (${product.price}). Could you share more details?`
  )}`;

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 8px 24px rgba(183,110,121,0.08)",
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {product.image ? (
        <img
          src={product.image}
          alt={product.name}
          style={{ width: "100%", height: "220px", objectFit: "cover" }}
        />
      ) : (
        <div
          style={{
            width: "100%",
            height: "220px",
            background: "linear-gradient(135deg,#fff0f5,#fdedec)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "64px",
          }}
        >
          {product.emoji}
        </div>
      )}

      <div style={{ padding: "20px", flex: 1, display: "flex", flexDirection: "column" }}>
        <span
          style={{
            fontSize: "12px",
            color: "#B76E79",
            fontWeight: "600",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            marginBottom: "6px",
          }}
        >
          {product.category}
        </span>

        <h3
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "24px",
            color: "#A86B5A",
            margin: "0 0 8px",
          }}
        >
          {product.name}
        </h3>

        <p style={{ color: "#7a5a5a", fontSize: "15px", lineHeight: "1.5", flex: 1 }}>
          {product.description}
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "16px",
          }}
        >
          <span style={{ fontSize: "20px", fontWeight: "700", color: "#9c6b3c" }}>
            {product.price}
          </span>

          <a
            href={enquireUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#25D366",
              color: "#fff",
              padding: "8px 16px",
              borderRadius: "50px",
              fontSize: "13px",
              fontWeight: "600",
              textDecoration: "none",
            }}
          >
            Enquire
          </a>
        </div>
      </div>
    </div>
  );
}

function CollectionSection() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active);

  return (
    <div
      id="collection"
      style={{
        marginTop: "80px",
        padding: "60px 30px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "48px",
          color: "#b76e79",
          fontFamily: "'Cormorant Garamond', serif",
          marginBottom: "12px",
        }}
      >
        Our Collection
      </h2>

      <p
        style={{
          maxWidth: "600px",
          margin: "0 auto 30px",
          fontSize: "20px",
          color: "#7a5a5a",
          lineHeight: "1.8",
        }}
      >
        Browse our handmade varmalas, garlands and bouquets, each crafted to
        order.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          marginBottom: "40px",
          flexWrap: "wrap",
        }}
      >
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            style={{
              padding: "10px 24px",
              borderRadius: "50px",
              border: active === cat ? "none" : "1px solid #f0d9dd",
              background: active === cat ? "#B76E79" : "#fff",
              color: active === cat ? "#fff" : "#B76E79",
              fontSize: "15px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: "24px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default CollectionSection;