import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { trainerData } from "../../../assets/DummyData";

const Trainers = () => {
  type Trainer = {
    image: string | undefined;
    name: string;
    profession: string;
  };

  return (
    <div className="w-full section">
      <div className="w-full text-center flex justify-center flex-col gap-y-5">
        <h2 className="font-bold  md:text-6xl text-5xl">Meet Our Expert Trainers</h2>
        <p className="text-3xl font-medium normal-case">
          Get to Know the Passionate and Skilled Professionals Dedicated to Helping You Achieve Your Fitness Goals
        </p>
      </div>

      <div className="w-full mt-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {trainerData.map((train: Trainer, index: number) => (
          <div key={index} className="w-full h-full shadow-xl flex flex-col p-6 rounded-xl">
            <img loading="lazy" src={train.image} alt="train image" className="w-full h-[35rem] md:h-[25rem] object-cover rounded-xl" />

            <div className="w-full my-5">
              <h3 className="text-3xl font-semibold">{train.name}</h3>
              <p className="text-2xl font-medium normal-case">{train.profession}</p>
            </div>

            <div className="w-full flex gap-x-5">
              <Twitter className="!text-4xl font-bold" />
              <Instagram className="!text-4xl font-bold" />
              <Facebook className="!text-4xl font-bold" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trainers;
