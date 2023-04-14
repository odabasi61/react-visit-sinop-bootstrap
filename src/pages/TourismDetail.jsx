import GoBack from "../components/GoBack";
import GoHome from "../components/GoHome";
import { tourism } from "../helper/tourism";
import { useNavigate, useParams } from "react-router-dom";

const TourismDetail = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  return (
    <div className="p-2 p-md-3 p-lg-4 p-xl-5">
      <h3 className="pb-4">{tourism[id - 1].kind} in Sinop</h3>
      <div className="p-4 bg-white rounded-2">
        <div>
          <p>{tourism[id - 1].desc1}</p>
          {tourism[id - 1].desc.map((tour, index) => (
            <div key={index}>
              <h5>{tour.title}</h5>
              <p>{tour.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 bg-white rounded-2 mt-4">
        <h4 className="text-center pb-4 fs-3 fw-bold">Photo Gallery</h4>
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {tourism[id - 1].images.map((images, index) => (
            <div key={index} className="picture-card rounded-4 overflow-hidden">
              <img src={images} alt="landscape from Sinop" />
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-center gap-4 flex-wrap pt-4">
        <GoBack />
        <GoHome />
      </div>
    </div>
  );
};

export default TourismDetail;
