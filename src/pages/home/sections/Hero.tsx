import { PlayArrow } from "@mui/icons-material";
import { Button } from "../../../components/Buttons";
import hero from "/src/assets/images/hero-image.png";

const Hero = () => {
  return (
    <div className="w-full h-full bg-gradient-to-b md:bg-gradient-to-r section-page from-black to-black/70">
      <div className="w-full flex items-center pt-20 gap-y-16 gap-x-10 flex-wrap md:flex-nowrap text-white justify-between">
        <div className="flex flex-col gap-y-7 w-full">
          <h1 className="font-bold uppercase text-7xl w-[75%] italic lg:w-[50%] md:w-[80%]">transform your life with fitlife studio</h1>
          <p className="text-3xl font-medium">
            Join FitLife Studio Today and Experience Expert Training, Personalized Programs, and a Supportive Community to Achieve Your Fitness Goals.
          </p>
          <div className="w-full flex items-center gap-x-5">
            <Button name="get started" wFull={false} />
            <div className="flex items-center gap-x-3">
              <PlayArrow className="bg-orange-600 p-2 !text-5xl rounded-full" /> <span className="text-2xl font-normal">watch demo</span>
            </div>
          </div>
        </div>

        <div className="w-full">
          <img loading="lazy" src={hero} alt="hero image" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
