import { places } from "../helper/places";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineHome } from "react-icons/ai";

const PlacesDetail = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  return (
    <div className="p-2 p-md-3 p-lg-4 p-xl-5">
      <h3 className="pb-4">{places[id - 1].name}</h3>
      <div className="p-2 bg-white rounded-2">
        <div className="d-flex flex-column-reverse flex-lg-row row align-items-center gap-4 px-2 mb-4">
          <div className="placesDetail-img col-12 col-sm-10 col-lg-5">
            <img src={places[id - 1].img[0]} alt={places[id - 1].name} />
          </div>
          <div className="col-12 col-lg-6">
            <p>{places[id - 1].desc1}</p>
          </div>
        </div>

        <div className="d-flex flex-column flex-lg-row row align-items-center gap-4 px-2 mb-4">
          <div className="col-12 col-lg-6">
            <p>{places[id - 1].desc2}</p>
          </div>
          <div className="placesDetail-img col-12 col-sm-10 col-lg-5">
            <img src={places[id - 1].img[1]} alt={places[id - 1].name} />
          </div>
        </div>

        <div className="d-flex flex-column-reverse flex-lg-row row align-items-center gap-4 px-2 mb-4">
          <div className="placesDetail-img col-12 col-sm-10 col-lg-5">
            <img src={places[id - 1].img[2]} alt={places[id - 1].name} />
          </div>
          <div className="col-12 col-lg-6">
            <p>{places[id - 1].desc3}</p>
          </div>
        </div>

        <div className="d-flex flex-column flex-lg-row row align-items-center gap-4 px-2 mb-4">
          <div className="col-12 col-lg-6">
            <p>{places[id - 1].desc4}</p>
          </div>
          <div className="placesDetail-img col-12 col-sm-10 col-lg-5">
            <img src={places[id - 1].img[3]} alt={places[id - 1].name} />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center gap-4 flex-wrap pt-4">
        <button
          onClick={() => navigate(-1)}
          className="btn btn-warning d-flex align-items-center gap-1"
        >
          <AiOutlineArrowLeft /> Go Back
        </button>
        <button
          onClick={() => navigate("/")}
          className="btn btn-success d-flex align-items-center gap-1"
        >
          <AiOutlineHome /> Go Home
        </button>
      </div>
    </div>
  );
};

export default PlacesDetail;
