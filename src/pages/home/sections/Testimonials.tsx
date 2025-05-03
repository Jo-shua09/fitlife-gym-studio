import { Star } from "@mui/icons-material";
import { testimonialData } from "../../../assets/DummyData";

const Testimonials = () => {
  type Testimony = {
    star: number;
    desc: string;
    image: string | undefined;
    name: string;
    abt: string;
  };

  return (
    <div className="w-full section">
      <div className="w-full flex flex-col gap-y-16 justify-center items-center">
        <div className="w-full justify-center flex text-center flex-col gap-y-6">
          <h2 className="font-bold md:text-6xl text-5xl">Real Voices, Real Transformations</h2>
          <p className="text-3xl font-medium normal-case">
            See How FitLife Studio Has Helped Our Members Achieve Their Fitness Goals and Transform Their Lives Through Expert Training and Supportive
            Community.
          </p>
        </div>

        <div className="w-full grid lg:grid-cols-3 m-auto items-center md:grid-cols-2 grid-cols-1 mt-5 gap-x-16 justify-between gap-y-10">
          {testimonialData.map((data: Testimony, index: number) => (
            <div key={index} className="p-7 rounded-lg py-10 flex flex-col gap-y-5 border border-black">
              <div className="flex gap-1 mb-3">
                {[...Array(data.star)].map((_, i) => (
                  <Star key={i} className="text-orange-600 !text-4xl" />
                ))}
              </div>

              <p className="text-3xl font-medium normal-case">{data.desc}</p>

              <div className="flex items-center my-4 gap-4">
                {data.image && <img loading="lazy" src={data.image} alt={data.name} className="w-16 h-16 rounded-full object-cover" />}
                <div>
                  <h3 className="font-bold text-3xl">{data.name}</h3>
                  <p className="text-2xl font-medium">{data.abt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
