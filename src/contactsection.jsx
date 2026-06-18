import { useState } from "react";

// TODO: replace with your real business WhatsApp number (country code, no + or spaces)
const WHATSAPP_NUMBER = "918446614188";
const BUSINESS_EMAIL = "hello@themalastory.com";

const inputStyle = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: "14px",
  border: "1px solid #f0d9dd",
  fontSize: "16px",
  color: "#5a3d3d",
  outline: "none",
  marginBottom: "16px",
  fontFamily: "inherit",
  boxSizing: "border-box",
};

function WhatsAppIcon({ size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16 0C7.16 0 0 7.16 0 16c0 2.82.74 5.46 2.03 7.75L0 32l8.46-2.22A15.9 15.9 0 0 0 16 32c8.84 0 16-7.16 16-16S24.84 0 16 0Zm0 29.09c-2.49 0-4.81-.68-6.8-1.86l-.49-.29-5.02 1.32 1.34-4.9-.32-.5A13.05 13.05 0 0 1 2.91 16C2.91 8.78 8.78 2.91 16 2.91S29.09 8.78 29.09 16 23.22 29.09 16 29.09Zm7.18-9.79c-.39-.2-2.31-1.14-2.67-1.27-.36-.13-.62-.2-.88.2-.26.39-1 1.27-1.23 1.53-.23.26-.45.29-.84.1-2.27-1.13-3.76-2.02-5.26-4.58-.4-.69.4-.64 1.14-2.13.13-.26.07-.49-.04-.69-.13-.2-.78-1.88-1.07-2.57-.28-.68-.57-.59-.78-.6h-.67c-.23 0-.6.09-.92.43-.32.34-1.23 1.2-1.23 2.93s1.26 3.4 1.43 3.63c.17.23 2.4 3.67 5.83 5 3.43 1.33 3.43.89 4.05.83.62-.06 2-.82 2.28-1.6.28-.79.28-1.47.2-1.61-.08-.14-.32-.23-.71-.43Z" />
    </svg>
  );
}

function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) {
      setError("Please fill in your name and message.");
      return;
    }
    const text = `Hi! I'm ${form.name}${
      form.phone ? ` (${form.phone})` : ""
    }. ${form.message}`;
    const url = `https://wa.me/${8446614188}?text=${encodeURIComponent(
      text
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div
      id="contact"
      style={{
        marginTop: "80px",
        padding: "60px 30px",
        background: "#fff8fb",
        borderRadius: "30px",
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
        Let's Create Something Beautiful
      </h2>

      <p
        style={{
          maxWidth: "600px",
          margin: "0 auto 40px",
          fontSize: "20px",
          color: "#7a5a5a",
          lineHeight: "1.8",
        }}
      >
        Tell us about your event and we'll help you design the perfect
        varmala, garland or bouquet.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          flexWrap: "wrap",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {/* Contact info */}
        <div
          style={{
            minWidth: "240px",
            flex: "1 1 240px",
            background: "#fff",
            borderRadius: "20px",
            padding: "30px",
            boxShadow: "0 8px 24px rgba(183,110,121,0.08)",
            textAlign: "left",
          }}
        >
          <h3 style={{ color: "#A86B5A", marginBottom: "16px" }}>
            Reach us directly
          </h3>

          <p style={{ color: "#7a5a5a", marginBottom: "12px" }}>
            📞 +{8446614188}
          </p>
          <p style={{ color: "#7a5a5a", marginBottom: "12px" }}>
            ✉️ {BUSINESS_EMAIL}
          </p>
          <p style={{ color: "#7a5a5a", marginBottom: "24px" }}>
            📍 nagpur, Maharashtra
          </p>

          <a
            href="https://wa.me/918446614188?text=Hi%20The%20Mala%20Story,%20I%20want%20to%20enquire%20about%20your%20bouquets%20and%20varmalas."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "#25D366",
              color: "#fff",
              padding: "12px 24px",
              borderRadius: "50px",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            <WhatsAppIcon size={20} />
            Chat on WhatsApp
          </a>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          style={{
            minWidth: "280px",
            flex: "1 1 320px",
            background: "#fff",
            borderRadius: "20px",
            padding: "30px",
            boxShadow: "0 8px 24px rgba(183,110,121,0.08)",
            textAlign: "left",
          }}
        >
          <label
            style={{
              display: "block",
              marginBottom: "6px",
              color: "#9c6b3c",
              fontSize: "14px",
            }}
          >
            Your name
          </label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="e.g. Priya Sharma"
            style={inputStyle}
          />

          <label
            style={{
              display: "block",
              marginBottom: "6px",
              color: "#9c6b3c",
              fontSize: "14px",
            }}
          >
            Phone number (optional)
          </label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="e.g. 8446614188"
            style={inputStyle}
          />

          <label
            style={{
              display: "block",
              marginBottom: "6px",
              color: "#9c6b3c",
              fontSize: "14px",
            }}
          >
            Tell us about your event
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Wedding date, flowers you like, quantity needed..."
            rows={4}
            style={{ ...inputStyle, resize: "vertical" }}
          />

          {error && (
            <p
              style={{
                color: "#c0392b",
                fontSize: "14px",
                marginBottom: "12px",
              }}
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            style={{
              width: "100%",
              background: "linear-gradient(135deg,#FFF5F8 0%,#FDEDEC 100%)",
              color: "#9c6b3c",
              padding: "14px",
              border: "none",
              borderRadius: "50px",
              fontSize: "18px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Send via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactSection;