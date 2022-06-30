import Image from "next/image";

const Card = ({ name, image }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 m-8 border border-white rounded-xl w-72 h-80">
      <h1 className="pb-4 mb-8 text-2xl text-center border-b border-white">
        {name}
      </h1>
      <Image src={image} height="110px" width="110px" />
    </div>
  );
};

export default Card;
