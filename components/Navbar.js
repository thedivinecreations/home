import Image from "next/image";
import LoGo from "../public/LoGo.png";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-10 text-xl font-normal text-white bg-black pottaOne ">
      <div className="flex flex-col flex-wrap items-center justify-center p-4 mx-auto md:flex-row">
        <a href="#" className="mx-8">
          <Image src={LoGo} height={60} width={90} />
        </a>
        <nav className="flex items-center justify-center my-4 text-base md:ml-auto ">
          <a className="link" href="#services">
            Services
          </a>
          <a className="link" href="#portfolio">
            Portfolio
          </a>
          <a className="link" href="#about">
            About
          </a>
          <a className="link" href="#testimonials">
            Testimonial
          </a>
        </nav>
        <a className="hidden mx-4 button sm:inline-block " href="#contact">
          Get A Quote
        </a>
      </div>
    </header>
  );
};

export default Navbar;
