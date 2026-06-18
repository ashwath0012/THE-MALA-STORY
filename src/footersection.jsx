// TODO: replace these with your real links/handles
const WHATSAPP_NUMBER = "919876543210";
const INSTAGRAM_URL = "https://instagram.com/themalastory";
const FACEBOOK_URL = "https://facebook.com/themalastory";

const linkStyle = {
  color: "#e8c9cf",
  textDecoration: "none",
  fontSize: "15px",
  display: "block",
  marginBottom: "10px",
};

function IconLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={{
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        background: "rgba(255,255,255,0.1)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        marginRight: "12px",
      }}
    >
      {children}
    </a>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.06 1.97.24 2.43.41a4.9 4.9 0 0 1 1.77 1.15 4.9 4.9 0 0 1 1.15 1.77c.17.46.35 1.26.41 2.43.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.06 1.17-.24 1.97-.41 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.46.17-1.26.35-2.43.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.06-1.97-.24-2.43-.41a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.17-.46-.35-1.26-.41-2.43C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.06-1.17.24-1.97.41-2.43a4.9 4.9 0 0 1 1.15-1.77 4.9 4.9 0 0 1 1.77-1.15c.46-.17 1.26-.35 2.43-.41C8.42 2.21 8.8 2.2 12 2.2Zm0 1.8c-3.14 0-3.5.01-4.74.07-1.02.05-1.58.21-1.94.35a3.1 3.1 0 0 0-1.15.75 3.1 3.1 0 0 0-.75 1.15c-.14.36-.3.92-.35 1.94C3.01 8.5 3 8.86 3 12s.01 3.5.07 4.74c.05 1.02.21 1.58.35 1.94.16.43.39.79.75 1.15.36.36.72.59 1.15.75.36.14.92.3 1.94.35 1.24.06 1.6.07 4.74.07s3.5-.01 4.74-.07c1.02-.05 1.58-.21 1.94-.35.43-.16.79-.39 1.15-.75.36-.36.59-.72.75-1.15.14-.36.3-.92.35-1.94.06-1.24.07-1.6.07-4.74s-.01-3.5-.07-4.74c-.05-1.02-.21-1.58-.35-1.94a3.1 3.1 0 0 0-.75-1.15 3.1 3.1 0 0 0-1.15-.75c-.36-.14-.92-.3-1.94-.35C15.5 4.01 15.14 4 12 4Zm0 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 1.8a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm5.7-2.5a1.05 1.05 0 1 1-2.1 0 1.05 1.05 0 0 1 2.1 0Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.83c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M16 0C7.16 0 0 7.16 0 16c0 2.82.74 5.46 2.03 7.75L0 32l8.46-2.22A15.9 15.9 0 0 0 16 32c8.84 0 16-7.16 16-16S24.84 0 16 0Zm0 29.09c-2.49 0-4.81-.68-6.8-1.86l-.49-.29-5.02 1.32 1.34-4.9-.32-.5A13.05 13.05 0 0 1 2.91 16C2.91 8.78 8.78 2.91 16 2.91S29.09 8.78 29.09 16 23.22 29.09 16 29.09Zm7.18-9.79c-.39-.2-2.31-1.14-2.67-1.27-.36-.13-.62-.2-.88.2-.26.39-1 1.27-1.23 1.53-.23.26-.45.29-.84.1-2.27-1.13-3.76-2.02-5.26-4.58-.4-.69.4-.64 1.14-2.13.13-.26.07-.49-.04-.69-.13-.2-.78-1.88-1.07-2.57-.28-.68-.57-.59-.78-.6h-.67c-.23 0-.6.09-.92.43-.32.34-1.23 1.2-1.23 2.93s1.26 3.4 1.43 3.63c.17.23 2.4 3.67 5.83 5 3.43 1.33 3.43.89 4.05.83.62-.06 2-.82 2.28-1.6.28-.79.28-1.47.2-1.61-.08-.14-.32-.23-.71-.43Z" />
    </svg>
  );
}

function FooterSection() {
  return (
    <footer
      style={{
        marginTop: "80px",
        background: "#3c2329",
        borderRadius: "30px 30px 0 0",
        padding: "60px 40px 30px",
        textAlign: "left",
        color: "#e8c9cf",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "40px",
          justifyContent: "space-between",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* Brand */}
        <div style={{ flex: "1 1 260px", minWidth: "220px" }}>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "32px",
              color: "#fff",
              marginBottom: "10px",
            }}
          >
            The Mala Story
          </h2>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#e8c9cf", maxWidth: "320px" }}>
            Handmade varmalas, garlands and bouquets, crafted with love for
            your wedding and special moments.
          </p>
        </div>

        {/* Quick links */}
        <div style={{ flex: "1 1 160px", minWidth: "160px" }}>
          <h3 style={{ color: "#fff", fontSize: "16px", marginBottom: "16px" }}>
            Quick Links
          </h3>
          <a href="#" style={linkStyle}>Home</a>
          <a href="#collection" style={linkStyle}>Collection</a>
          <a href="#gallery" style={linkStyle}>Gallery</a>
          <a href="#contact" style={linkStyle}>Contact</a>
        </div>

        {/* Connect */}
        <div style={{ flex: "1 1 200px", minWidth: "200px" }}>
          <h3 style={{ color: "#fff", fontSize: "16px", marginBottom: "16px" }}>
            Connect With Us
          </h3>
          <div style={{ marginBottom: "16px" }}>
            <IconLink href={INSTAGRAM_URL} label="Instagram">
              <InstagramIcon />
            </IconLink>
            <IconLink href={FACEBOOK_URL} label="Facebook">
              <FacebookIcon />
            </IconLink>
            <IconLink href={`https://wa.me/${8446614188}`} label="WhatsApp">
              <WhatsAppIcon />
            </IconLink>
          </div>
          <p style={{ fontSize: "14px", color: "#e8c9cf" }}>
            +{8446614188}
          </p>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.12)",
          marginTop: "40px",
          paddingTop: "20px",
          textAlign: "center",
          fontSize: "13px",
          color: "#c9a3aa",
        }}
      >
        © {new Date().getFullYear()} The Mala Story. All rights reserved.
      </div>
    </footer>
  );
}

export default FooterSection;