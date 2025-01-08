import { Footer, FooterBrand } from "flowbite-react";
import logo from "../logo.svg";

const PageFooter = () => {
  return (
    <Footer className="flex flex-col content-center space-y-4 px-8 bg-zinc-900">
      <FooterBrand className="m-auto h-32" src={logo} alt="LeDaniel Leung Logo" />
      <p className="text-xs md:text-sm text-center text-zinc-400">© Copyright LeDaniel Leung 2025. All Rights Reserved.</p>
    </Footer>
  );
};

export default PageFooter;
