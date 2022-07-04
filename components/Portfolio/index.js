import Dev from "../../public/dev.png";
import Edit from "../../public/eidting.png";
import Graphic from "../../public/graphic.png";
import Image from "next/image";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className="relative flex flex-col items-center">
      <h1 className=" heading">Portfolio</h1>
      <div className="flex flex-col items-center sm:space-x-16 sm:flex-row">
        <div className="h-auto p-8 text-xl border border-white rounded-md w-72 sm:w-auto lg:w-96 lg:h-auto">
          <div className="pb-4 mb-4 border-b border-white">
            Website Development
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-4">
              <Image src={Dev} height="20px" width="20px" />
              <a href="https://www.google.com">Google.com</a>
            </div>
            <div className="flex items-center space-x-4">
              <Image src={Dev} height="20px" width="20px" />
              <a href="https://www.google.com">Google.com</a>
            </div>
            <div className="flex items-center space-x-4">
              <Image src={Dev} height="20px" width="20px" />
              <a href="https://www.google.com">Google.com</a>
            </div>
            <div className="flex items-center space-x-4 ">
              <Image src={Dev} height="20px" width="20px" />
              <a href="https://www.google.com">Google.com</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-72 sm:w-auto">
          <div className="flex flex-col justify-center h-auto p-4 px-8 my-4 text-center border border-white rounded-md lg:w-96 lg:h-40">
            <div className="pb-4 mb-2 -mt-2 border-b border-white">
              Photo & Video Editing
            </div>
            <div className="flex items-center px-4 space-x-4 ">
              <Image src={Edit} height="30px" width="30px" />
              <Link
                href="https://drive.google.com/drive/folders/1Ce1EygSX1ftG6PosjfiaNOt2tDV6GPVj"
                target="_blank"
              >
                Click Here
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-center h-auto p-4 px-8 my-4 text-center border border-white rounded-md lg:w-96 lg:h-40">
            <div className="pb-4 mb-2 -mt-2 border-b border-white">
              Graphics Designing
            </div>
            <div className="flex items-center px-4 space-x-4 ">
              <Image src={Graphic} height="30px" width="30px" />
              <Link
                href="https://drive.google.com/drive/folders/176GD9csCbH7sp2pM8-RGVCBV3gsqwxmV"
                target="_blank"
              >
                Click Here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
