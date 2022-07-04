import Card from "./Card";

const Datas = [
  {
    id: 1,
    name: "Full Name",
    stars: 5,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, sequi!",
  },
  {
    id: 2,
    name: "Full Name",
    stars: 5,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, sequi!",
  },
  {
    id: 3,
    name: "Full Name",
    stars: 5,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, sequi!",
  },
];

const Testimonials = () => {
  return (
    <div className="relative flex flex-col items-center">
      <h1 className="heading">Testimonials</h1>

      <div className="flex flex-wrap items-center justify-center">
        {Datas.map((data) => (
          <Card
            key={data.id}
            name={data.name}
            stars={data.stars}
            text={data.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
