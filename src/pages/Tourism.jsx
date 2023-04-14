import { tourism } from "../helper/tourism";
import GoHome from "../components/GoHome";

const Tourism = () => {
  return (
    <div className="p-2 p-md-3 p-lg-4 p-xl-5">
      <h3 className="pb-4">Tourism in Sinop</h3>
      <div className="p-4 bg-white rounded-2 d-flex flex-wrap justify-content-center gap-4">
        {tourism.map((tour, index) => (
          <div
            key={index}
            className="tourism-cards position-relative rounded-4 overflow-hidden"
          >
            <img src={tour.img} alt={tour.kind} />
            <p className="position-absolute bottom-0 start-0 fw-bold text-white fs-4 ps-2">
              {tour.kind}
            </p>
          </div>
        ))}
      </div>
      <GoHome />
    </div>
  );
};

export default Tourism;
