import { serviceData } from "../../../assets/DummyData";
import { Button } from "../../../components/Buttons";

const Services = () => {
  type Service = {
    image: string | undefined;
    title: string;
    description: string;
    buttonText: string;
  };

  return (
    <div className="w-full section">
      <div className="w-full text-center flex justify-center flex-col gap-y-5">
        <h2 className="font-bold  md:text-6xl text-5xl">premium fitness services</h2>
        <p className="text-3xl font-medium normal-case">Tailored Workouts, Expert Guidance, and Comprehensive Programs to Meet All Your Fitness Needs</p>
      </div>

      <div className="w-full mt-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {serviceData.map((service: Service, index: number) => (
          <div key={index} className="w-full h-full shadow-xl flex flex-col gap-y-5 p-6 rounded-xl bg-gray-200">
            <img loading="lazy" src={service.image} alt="service image" className="w-full h-full object-cover rounded-xl" />
            <div className="w-full text-center">
              <h3 className="text-3xl font-semibold pb-4">{service.title}</h3>
              <p className="text-2xl font-medium normal-case">{service.description}</p>
            </div>
            <div className="w-full flex justify-center">
              <Button name={service.buttonText} wFull={true} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
