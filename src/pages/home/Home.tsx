import Hero from "./sections/Hero";
import Services from "./sections/Services";
import WhyChooseUs from "./sections/WhyChooseUs";
import Gallery from "./sections/Gallery";
import Plans from "./sections/Plans";
import Testimonials from "./sections/Testimonials";
import Newsletter from "./sections/Newsletter";

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <WhyChooseUs />
      <Services />
      <Gallery />
      <Plans />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
