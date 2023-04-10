import { food } from "../helper/data";

const Food = () => {
  return (
    <div id="food" className="p-2 p-md-3 p-lg-4 p-xl-5">
      <div className="d-flex flex-wrap gap-4 justify-content-center">
        {food.map((item, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-4 col-12 col-sm-10 col-md-5 col-xl-3"
          >
            <h4>{item.name}</h4>
            <div className="food-img">
              <img width="100%" src={item.img} alt={item.name} />
            </div>
            <p className="pt-3">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
