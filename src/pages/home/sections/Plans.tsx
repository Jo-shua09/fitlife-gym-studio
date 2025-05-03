import { Check } from "@mui/icons-material";
import { plansData } from "../../../assets/DummyData";
import { Button } from "../../../components/Buttons";

const Plans = () => {
  type Plans = {
    type: string;
    amnt: number;
    timeframe: string;
    desc: string[];
    buttonText: string;
    middle: boolean;
    id: number;
  };

  return (
    <div className="w-full section">
      <div className="w-full flex flex-col gap-y-16 justify-center items-center">
        <div className="w-full justify-center flex text-center flex-col gap-y-6">
          <h2 className="font-bold md:text-6xl text-5xl">Choose the Perfect Plan for Your Fitness Journey</h2>
          <p className="text-3xl font-medium normal-case">
            Flexible Membership Options to Suit Your Goals and Lifestyle. Find the Right Fit and Start Transforming Your Life Today!
          </p>
          <div className="mt-6 flex items-center gap-x-6 justify-center">
            <Button name="monthly" wFull={false} />
            <button className="bg-transparent border-2 text-2xl font-bold border-orange-600 rounded-xl text-orange-600 uppercase py-4 px-7">yearly</button>
          </div>
        </div>

        <div className="w-full grid lg:grid-cols-3 m-auto items-center md:grid-cols-2 grid-cols-1 mt-5 gap-x-16 justify-between gap-y-10">
          {plansData.map((plan: Plans) => (
            <div
              key={plan.id}
              className={`${
                plan.middle === true ? "bg-orange-600 shadow-xl !text-white" : ""
              } border-2 rounded-xl flex flex-col gap-y-6 border-orange-600 p-10`}
            >
              <h4 className="text-center text-xl font-semibold">{plan.type}</h4>
              <h2 className={`${plan.middle === true ? "!text-white" : "text-orange-600"} text-6xl justify-center font-bold text-center flex items-end`}>
                ${plan.amnt}/<span className="text-3xl normal-case">{plan.timeframe}</span>
              </h2>
              <div className="flex flex-col gap-y-5 my-6">
                {plan.desc.map((d, index) => (
                  <div key={index} className="flex items-center gap-x-5">
                    <Check className="!text-4xl" />
                    <span className="text-2xl font-medium normal-case">{d}</span>
                  </div>
                ))}
              </div>

              <div className="w-full mt-10">
                {plan.middle === true ? (
                  <button className="uppercase w-full md:h-[4.5rem] h-[5rem] bg-white text-orange-600 font-bold text-2xl py-4 px-8 hover:scale-95 rounded-xl shadow-xl">
                    {plan.buttonText}
                  </button>
                ) : (
                  <Button name={plan.buttonText} wFull={true} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;
