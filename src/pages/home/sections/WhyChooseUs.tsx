import { Check } from "@mui/icons-material";
import { Button } from "../../../components/Buttons";
import chooseImage from "/src/assets/images/Placeholder.jpg";

const WhyChooseUs = () => {
  return (
    <div className="section w-full">
      <div className="w-full flex items-center gap-x-16 gap-y-10 flex-wrap-reverse md:flex-nowrap ">
        <div className="w-full flex">
          <img loading="lazy" src={chooseImage} alt="Why choose us placeholder image" className="w-full h-[50rem] object-cover rounded-2xl" />
        </div>

        <div className="w-full flex flex-col gap-y-6">
          <h2 className="font-bold  md:text-6xl text-5xl">Why Choose FitLife Studio?</h2>
          <p className="text-3xl font-medium normal-case">Discover the Benefits That Set Us Apart and Propel Your Fitness Journey Forward.</p>

          <ul className="flex flex-col gap-y-7">
            <li className="list-none">
              <h3 className="text-3xl normal-case font-semibold pb-3">
                <Check className="bg-orange-600 p-1 mr-5 rounded-full text-white !text-4xl" />
                <span>Expert Trainers</span>
              </h3>
              <p className="text-2xl normal-case font-medium">
                Our certified trainers provide personalized guidance and expert advice to help you achieve your fitness goals.
              </p>
            </li>
            <li className="list-none">
              <h3 className="text-3xl normal-case font-semibold pb-3">
                <Check className="bg-orange-600 p-1 mr-5 rounded-full text-white !text-4xl" />
                <span>State-of-the-Art Equipment</span>
              </h3>
              <p className="text-2xl normal-case font-medium">
                Work out with the latest and most advanced fitness equipment to maximize your results and enhance your experience.
              </p>
            </li>

            <li className="list-none">
              <h3 className="text-3xl normal-case font-semibold pb-3">
                <Check className="bg-orange-600 p-1 mr-5 rounded-full text-white !text-4xl" />
                <span>Comprehensive Programs</span>
              </h3>
              <p className="text-2xl normal-case font-medium">
                Enjoy a variety of classes and programs tailored to all fitness levels, from beginner to advanced.{" "}
              </p>
            </li>
          </ul>

          <div className="mt-5">
            <Button name="free trial today" wFull={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
