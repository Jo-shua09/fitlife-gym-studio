import { Button } from "../../../components/Buttons";
import gallery from "/src/assets/images/gallery.jpg";
import gallery2 from "/src/assets/images/gallery2.jpg";
import gallery3 from "/src/assets/images/gallery3.jpg";

const Gallery = () => {
  return (
    <div className="w-full section">
      <div className="w-full flex items-center gap-x-16 justify-between gap-y-16 flex-wrap md:flex-nowrap ">
        <div className="w-full flex md:mt-0 mt-10 md:text-start text-center md:justify-normal justify-center flex-col gap-y-6 md:flex-[2]">
          <h2 className="font-bold  md:text-6xl text-5xl">Inspiring Success Stories from FitLife Studio Members</h2>
          <p className="text-3xl font-medium normal-case">
            At FitLife Studio, we celebrate the incredible journeys of our members. From weight loss triumphs and muscle gain milestones to enhanced well-being
            and newfound confidence, our members' success stories highlight the power of commitment and community. Explore these inspiring testimonials and see
            how FitLife Studio can help you reach your fitness goals.
          </p>
          <div className="mt-6">
            <Button name="join today" wFull={false} />
          </div>
        </div>

        <div className="w-full relative flex justify-center items-center overflow-x-hidden md:flex-[3]">
          <img
            src={gallery3}
            alt="alt-image"
            className="w-[20rem] h-[10rem] lg:w-[24rem] lg:h-[15rem] sm:w-[20rem] sm:h-[10rem] object-cover absolute lg:top-16 top-6 lg:right-10 right-1 rounded-xl"
          />
          <div className="w-[80%] lg:w-[70%] sm:w-[85%] h-full">
            <img loading="lazy" src={gallery} alt="Big gallery image" className="w-full shadow-xl h-full object-cover rounded-2xl" />
          </div>
          <img
            src={gallery2}
            alt="alt-image"
            className="w-[15rem] h-[15rem] lg:w-[20rem] lg:h-[20rem] sm:w-[15rem] sm:h-[15rem] object-cover absolute lg:bottom-16 bottom-6 lg:left-10 left-1 rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
