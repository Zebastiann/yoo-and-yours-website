import matchaLatte from '../assets/images/matcha-latte.jpeg';
import cafeLatte from '../assets/images/cafe-latte.jpeg';
import hojichaLatte from '../assets/images/hojicha-latte.jpeg';

function FeaturedDrinks() {
    return (
        <section className="featured-drinks" id="menu">
            <div className="featured-header">
                <p className="eyebrow">
                    A LITTLE SOMETHING TO SIP
                </p>

                <h2>Made for slow moments.</h2>

                <p>
                    From your first sip of matcha to your
                    favorite afternoon coffee.
                </p>
            </div>

            <div className="drinks-grid">
                {/* Card 1: Matcha Latte */}
                <div className="drink-card">
                    <div className="drink-image">
                        <img src={matchaLatte} alt="Iced matcha latte" />
                    </div>

                    <div className="drink-info">
                        <span className="drink-number">01 / THE FAVORITES</span>
                        <h3>Matcha Latte</h3>
                        <p>Earthy, creamy, and made for slow mornings.</p>
                    </div>
                </div>

                {/* Card 2: Café Latte */}
                <div className="drink-card">
                    <div className="drink-image">
                        <img src={cafeLatte} alt="Iced café latte" />
                    </div>

                    <div className="drink-info">
                        <span className="drink-number">02 / THE FAVORITES</span>
                        <h3>Café Latte</h3>
                        <p>A little everyday ritual.</p>
                    </div>
                </div>

                {/* Card 3: Hojicha Latte */}
                <div className="drink-card">
                    <div className="drink-image">
                        <img src={hojichaLatte} alt="Iced hojicha latte" />
                    </div>

                    <div className="drink-info">
                        <span className="drink-number">03 / THE FAVORITES</span>
                        <h3>Hojicha Latte</h3>
                        <p>Roasted, mellow, and comforting.</p>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default FeaturedDrinks;