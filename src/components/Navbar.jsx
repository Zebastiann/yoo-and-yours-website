function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <h2>Yoo & Yours</h2>
                <p>Coffee & Matcha Cart</p>
            </div>

            <div className="nav-links">
                <a href="#">Menu</a>
                <a href="#">Events</a>
                <a href="#">Contact</a>

                <button>Book an Event ↗</button>
                <a href="https://www.instagram.com/yooandyours/" target="_blank" rel="noopener noreferrer">
                    <img src="/src/assets/images/ig-logo.png" alt="Instagram" />
                </a>
            </div>

        </nav>
    );
}

export default Navbar;