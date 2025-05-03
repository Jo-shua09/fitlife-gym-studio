import contactImage from "/src/assets/images/contact.jpg";

const ContactForm = () => {
  return (
    <div className="w-full section">
      <div className="w-full flex items-center gap-x-16 gap-y-10 flex-wrap md:flex-nowrap ">
        <div className="w-full">
          <div className=" flex flex-col gap-y-7">
            <h2 className="font-bold md:text-6xl text-5xl"> Get in Touch with FitLife Studio</h2>
            <p className="text-3xl font-normal normal-case">
              We’re Here to Help You on Your Fitness Journey. Reach Out to Us with Any Questions or to Schedule a Visit!
            </p>
          </div>

          <form className="w-full flex flex-col gap-y-8 mt-10">
            <div className="flex flex-col gap-y-2">
              <label htmlFor="name" className="text-2xl font-semibold">
                fullname
              </label>
              <input
                type="text"
                name="name"
                className="w-full md:h-[4.5rem] h-[5rem] rounded-xl bg-transparent border border-black focus:border-orange-600 pl-3 text-2xl normal-case"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="email" className="text-2xl font-semibold">
                email
              </label>
              <input
                type="email"
                name="email"
                className="w-full md:h-[4.5rem] h-[5rem] rounded-xl bg-transparent border border-black focus:border-orange-600 pl-3 text-2xl normal-case"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="message" className="text-2xl font-semibold">
                message
              </label>
              <textarea
                name="message"
                className="w-full h-[15rem] rounded-xl bg-transparent border border-black focus:border-orange-600 pl-3 text-2xl normal-case"
              />
            </div>
            <div className="flex items-center gap-x-4">
              <input type="checkbox" name="terms" className="" />
              <span className="text-xl font-semibold normal-case">I accept the Terms</span>
            </div>
            <div className="mt-2">
              <input
                type="submit"
                value="submit"
                className="w-full text-white font-semibold hover:scale-95 cursor-pointer py-4 px-7 rounded-xl bg-orange-600  text-2xl uppercase"
              />
            </div>
          </form>
        </div>
        <div className="w-full">
          <img src={contactImage} alt="contact Image" className="w-full h-full object-cover rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
