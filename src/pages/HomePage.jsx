import CarouselContainer from "../Component/CarouselContainer";
import FeatureSection from "../Component/FeatureSection";
import News from "../Component/News";
import NewsLetter from "../Component/NewsLetter";
import Reviews from "../Component/Reviews";
import Sponser from "../Component/Sponser";
import Testimonial from "../Component/Testimonial";


const HomePage = () => {
    return (
        <div>
            <CarouselContainer />
            <FeatureSection />
            <News />
            <Reviews />
            <NewsLetter />
            <Testimonial />
            <Sponser />
        </div>
    );
};

export default HomePage;