import aboutImage from "/src/assets/images/about.jpg";

const AboutUs = () => {
  return (
    <div className="w-full section">
      <div className="w-full flex items-center gap-x-16 gap-y-10 flex-wrap md:flex-nowrap ">
        <div className="w-full flex flex-col gap-y-10">
          <div className=" flex flex-col gap-y-10">
            <h2 className="font-bold md:text-6xl text-5xl"> About FitLife Studio</h2>
            <p className="text-3xl font-normal normal-case">
              At FitLife Studio, we believe that fitness is more than just a routine; it's a way of life. Founded with the mission to inspire and empower
              individuals on their fitness journeys, we offer a comprehensive range of services tailored to meet the unique needs of each member. Our
              state-of-the-art facility, expert trainers, and vibrant community create an environment where everyone can thrive.
            </p>
          </div>

          <div className="flex flex-col gap-y-10">
            <h2 className="font-bold  md:text-6xl text-5xl">Our Mission</h2>
            <p className="text-3xl font-normal normal-case">
              Our mission is to provide top-tier fitness solutions that help our members achieve their personal health and wellness goals. We are dedicated to
              fostering a supportive and motivating atmosphere, where every individual feels valued and inspired to push their limits.
            </p>
          </div>
        </div>

        <div className="w-full flex">
          <img loading="lazy" src={aboutImage} alt="Why choose us placeholder image" className="w-full h-[50rem] object-cover rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
