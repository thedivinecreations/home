import Image from "next/image";
import Main from "../public/Main.png";

const MainScreen = () => {
  return (
    <div className="flex sm:grid lg:grid-cols-2 lg:items-center">
      <div className="col-span-1">
        <h1 className="text-5xl">
          Affordable Website Design To Help Your Business Grow
        </h1>
        <h2 className="mx-1 my-8 text-2xl">
          Make Your Business Shine On The Web
        </h2>
        <button class="button">
          <a href="#contact">Get A Quote</a>
        </button>
      </div>
      <div className="hidden z-1 lg:flex">
        <Image src={Main} height="494px" width="694px" />
      </div>
    </div>
  );
};

export default MainScreen;
