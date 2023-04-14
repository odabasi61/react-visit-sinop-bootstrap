import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const GoBack = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex justify-content-center gap-4 flex-wrap pt-4">
      <button
        onClick={() => navigate(-1)}
        className="btn btn-warning d-flex align-items-center gap-1"
      >
        <AiOutlineArrowLeft /> Go Back
      </button>
    </div>
  );
};

export default GoBack;
