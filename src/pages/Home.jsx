import History from "../components/History";
import Geography from "../components/Geography";
import Culture from "../components/Culture";
import { AiOutlineArrowUp } from "react-icons/ai";

const Home = () => {
  return (
    <div className="position-relative">
      <History />
      <Geography />
      <Culture />
      <a
        href="#"
        className="position-fixed p-1 rounded-circle bg-primary text-white footer-arrow"
      >
        <AiOutlineArrowUp size={40} />
      </a>
    </div>
  );
};

export default Home;
