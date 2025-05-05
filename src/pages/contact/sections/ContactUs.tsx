import { Chat, Mail, Phone } from "@mui/icons-material";

const ContactUs = () => {
  return (
    <div className="w-full section">
      <div className="flex items-center justify-between gap-10 w-full md:flex-nowrap flex-wrap">
        <div className="flex flex-col gap-y-5 w-full py-10">
          <Mail className="!text-5xl" />
          <h3 className="text-3xl font-bold">email</h3>
          <p className="text-2xl font-medium normal-case">For Inquiries and Support, Reach Out to Us</p>
          <h5 className="text-xl font-semibold normal-case">info@fitlifestudio.com</h5>
        </div>

        <div className="flex flex-col gap-y-5 w-full">
          <Chat className="!text-5xl" />
          <h3 className="text-3xl font-bold">live chat</h3>
          <p className="text-2xl font-medium normal-case">Chat with Us Live for Immediate Assistance and Support</p>
          <h5 className="text-xl font-semibold normal-case">(123) 456-7890</h5>
        </div>

        <div className="flex flex-col gap-y-5 w-full">
          <Phone className="!text-5xl" />
          <h3 className="text-3xl font-bold">phone</h3>
          <p className="text-2xl font-medium normal-case">Speak with Our Team Directly</p>
          <h5 className="text-xl font-semibold normal-case">(123) 456-7890</h5>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
