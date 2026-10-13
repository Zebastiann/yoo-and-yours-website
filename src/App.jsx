import "././App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedDrinks from "./components/FeaturedDrinks";
import BookingSteps from "./components/Bookingsteps";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <FeaturedDrinks />
            <BookingSteps />
            <Gallery />
            <Footer />
        </>
    );
}

export default App;