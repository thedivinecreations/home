import Star from "./Star";

const Card = ({ name, stars, review }) => {
  return (
    <div className="flex flex-col items-center justify-center w-64 h-64 p-8 m-8 border border-white rounded-md">
      <div className="my-4 text-2xl">{name}</div>
      <div className="flex">
        {Array(stars)
          .fill()
          .map((i) => (
            <Star key={i} />
          ))}
      </div>
      <div className="text-center">{review}</div>
    </div>
  );
};

export default Card;
