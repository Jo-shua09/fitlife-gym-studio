import AboutHero from "./sections/AboutHero";
import AboutUs from "./sections/AboutUs";
import Location from "./sections/Location";
import Trainers from "./sections/Trainers";

const About = () => {
  return (
    <div className="w-full">
      <AboutHero />
      <AboutUs />
      <Trainers />
      <Location />
    </div>
  );
};

export default About;
