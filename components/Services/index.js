import Dev from "../../public/dev.png";
import Edit from "../../public/eidting.png";
import Graphic from "../../public/graphic.png";
import Card from "./Card";

const Datas = [
  {
    id: 1,
    name: "Website Development",
    image: Dev,
  },
  {
    id: 2,
    name: "Photo & Video Editing",
    image: Edit,
  },
  {
    id: 3,
    name: "Graphics Designing",
    image: Graphic,
  },
];

const Services = () => {
  return (
    <div className="relative flex flex-col items-center">
      <h1 className="p-3 my-32 text-3xl border-b-2 border-white">Services</h1>
      <div className="flex flex-wrap items-center justify-center">
        {Datas.map((data) => (
          <Card key={data.id} name={data.name} image={data.image} />
        ))}
      </div>
    </div>
  );
};

export default Services;
