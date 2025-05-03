const Location = () => {
  return (
    <div className="w-full section">
      <div className="w-full text-center flex justify-center flex-col gap-y-5">
        <h2 className="font-bold  md:text-6xl text-5xl">Visit FitLife Studio</h2>
        <p className="text-3xl font-medium normal-case">Conveniently Located to Serve Your Fitness Needs. Find Us and Start Your Journey Today! </p>

        <div className="w-full flex items-center gap-x-16 gap-y-10 flex-wrap-reverse md:flex-nowrap mt-20">
          <div className="border-l-2 flex text-left flex-col border-black pl-10 w-full mt-10 md:mt-0">
            <h3 className="text-3xl font-semibold mb-5">address</h3>
            <address className="flex text-left flex-col text-2xl font-medium normal-case">
              Fitlife Studio <br />
              123 Fitness Avenue <br /> Healthy City, Wellness State, 45678
            </address>
          </div>

          <div className="w-full h-full overflow-x-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.05057513894!2d-74.3091634187714!3d40.69719335572737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sng!4v1746177119654!5m2!1sen!2sng"
              width="600"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
