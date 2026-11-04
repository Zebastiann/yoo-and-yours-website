function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-main">
        <div className="footer-brand">
          <h2>Yoo & Yours</h2>
          <p>Coffee, matcha & good company.</p>
        </div>

        <div className="footer-links">
          <h3>EXPLORE</h3>
          <a href="#menu">Menu</a>
          <a href="#gallery">Gallery</a>
          <a href="#events">Events</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Yoo & Yours. All rights reserved.</p>

        <div className="footer-socials">
          <a href="https://www.instagram.com/yooandyours/" target="_blank" rel="noopener noreferrer">Instagram ↗</a>
          <a href="mailto:megan@yooandyours.com">Email ↗</a>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeUuRInxARNvB_34J1NbBqRWHL4l51MJsjiUXxdrTqlhKURxw/viewform" target="_blank" rel="noopener noreferrer">Book an Event ↗</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;