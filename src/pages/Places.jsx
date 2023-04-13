import { useNavigate } from "react-router-dom";
import { places } from "../helper/places";
import GoHome from "../components/GoHome";

const Places = () => {
  const navigate = useNavigate();

  const truncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="p-2 p-md-3 p-lg-4 p-xl-5">
      <h3 className="pb-4">Touristic Attractions in Sinop</h3>
      <div className="d-flex flex-wrap gap-4 justify-content-center">
        {places.map((place, index) => {
          const { id, name, desc1 } = place;
          return (
            <div
              type="button"
              onClick={() => navigate(`/places/${id}`)}
              key={index}
              className="p-4 bg-white rounded-4 col-12 col-sm-10 col-md-5 col-xl-3 position-relative overflow-hidden place-card"
            >
              <h4>{name}</h4>
              <div className="general-img">
                <img src={place.img[0]} alt={name} />
              </div>
              <div className="position-absolute p-4 description">
                {truncateString(desc1, 160)}
              </div>
            </div>
          );
        })}
      </div>
      <GoHome />
    </div>
  );
};

export default Places;
