import { useNavigate } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

const GoHome = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex justify-content-center gap-4 flex-wrap pt-4">
      <button
        onClick={() => navigate("/")}
        className="btn btn-success d-flex align-items-center gap-1"
      >
        <AiOutlineHome /> Homepage
      </button>
    </div>
  );
};

export default GoHome;
