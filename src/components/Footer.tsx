import { Facebook, Instagram, LinkedIn, Twitter, YouTube } from "@mui/icons-material";

const Footer = () => {
  return (
    <div className="w-full section !pb-10">
      <div className="w-full flex flex-col gap-y-10">
        <div className="w-full gap-x-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 sm:justify-between">
          <div className="flex items-center md:place-content-start place-items-center sm:place-content-start place-content-center gap-x-2 w-full">
            <img loading="lazy" src="logo-bg.png" alt="logo image" className="w-10 h-10" />
            <h4 className="text-3xl font-bold text-orange-600">FitLife studio</h4>
          </div>

          <div className="w-full flex md:justify-center sm:place-content-start place-content-center">
            <ul className="flex text-2xl font-semibold items-center justify-center gap-x-6">
              <li className="list-none hover:text-orange-600 hover:tracking-wider cursor-pointer">home</li>
              <li className="list-none hover:text-orange-600 hover:tracking-wider cursor-pointer">about</li>
              <li className="list-none hover:text-orange-600 hover:tracking-wider cursor-pointer">contact us</li>
            </ul>
          </div>

          <div className="flex items-center gap-x-2 sm:place-content-end w-full place-content-center">
            <Twitter className="!text-4xl font-bold text-orange-600" />
            <Instagram className="!text-4xl font-bold text-orange-600" />
            <Facebook className="!text-4xl font-bold text-orange-600" />
            <LinkedIn className="!text-4xl font-bold text-orange-600" />
            <YouTube className="!text-4xl font-bold text-orange-600" />
          </div>
        </div>

        <hr className="w-full border-2 border-black h-[.3rem]" />

        <ul className="w-full gap-x-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 text-center gap-10 sm:justify-between">
          <li className="list-none text-2xl normal-case font-medium">
            © 2025 <span className="text-orange-600 font-bold">Tuma</span>.dev. All rights reserved.
          </li>
          <li className="list-none text-2xl normal-case font-medium">Privacy Policy</li>
          <li className="list-none text-2xl normal-case font-medium">Terms of Service</li>
          <li className="list-none text-2xl normal-case font-medium">Cookies Settings</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
