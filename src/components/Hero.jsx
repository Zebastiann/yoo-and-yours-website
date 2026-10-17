import yooLogo from "../assets/images/yoo-and-yours-logo.jpg";
import heroDrinks from "../assets/images/hero-drinks.jpg";
import pressedFlowers from "../assets/images/pressed-flowers.png";
import vintageLace from "../assets/images/vintage-lace.png";

function Hero() {
    return (
        <section className="hero">

            <div className="hero-left">

                <p className="eyebrow">
                    YOUR COFFEE & MATCHA POP-UP CART
                </p>

                <h1>
                    Coffee & Matcha,
                    <br />
                    for yoo & yours.
                </h1>

                <p className="hero-description">
                    A little cart for your sweetest gatherings.
                    We bring the coffee, matcha, and a moment to sip
                    and stay awhile.
                </p>

                <div className="hero-buttons">
                <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeUuRInxARNvB_34J1NbBqRWHL4l51MJsjiUXxdrTqlhKURxw/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-btn-primary"
                >
                    Book us for your event ↗
                </a>

                <a href="#menu" className="hero-btn-secondary">
                    Explore the menu →
                </a>
            </div>
                
            </div>

            <div className="hero-right">
                <div className="hero-collage">
                    <img
                        src={vintageLace}
                        alt=""
                        className="hero-lace"
                    />

                    <div className="hero-polaroid">
                    <img
                        src={heroDrinks}
                        alt="A cup of coffee and a cup of matcha"
                    />
                    </div>

                    <img
                        src={pressedFlowers}
                        alt=""
                        className="hero-flowers"
                    />

                    <img
                        src={yooLogo}
                        alt="Yoo & Yours logo"
                        className="hero-logo"
                    />
                </div>
            </div>

        </section>
    );
}

export default Hero;