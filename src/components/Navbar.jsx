import instagramLogo from "../assets/images/ig-logo.png";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <a href="/">
                    <h2>Yoo & Yours</h2>
                    <p>Coffee & Matcha Cart</p>
                </a>
            </div>

            <div className="nav-links">
                <a href="#menu">Menu</a>
                <a href="#events">Events</a>
                <a href="#gallery">Gallery</a>
                <a href="#contact">Contact</a>

                <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeUuRInxARNvB_34J1NbBqRWHL4l51MJsjiUXxdrTqlhKURxw/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-book-btn"
                >
                    Book an Event ↗
                </a>

                <a
                    href="https://www.instagram.com/yooandyours/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Yoo & Yours on Instagram"
                >
                    <img src={instagramLogo} alt="" className="nav-instagram"/>
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
