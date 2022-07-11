import Card from "./Card";
import Reviews from "../../Data/Reveiws";

const Testimonials = () => {
  return (
    <div className="relative flex flex-col items-center">
      <h1 className="heading">Testimonials</h1>

      <div className="flex flex-wrap items-center justify-center">
        {Reviews.map((data) => (
          <Card
            key={data.id}
            name={data.name}
            stars={data.stars}
            review={data.review}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
