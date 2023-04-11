import { Link } from "react-router-dom";
import sinop from "../assets/homepage/sinop.jpg";
import data from "../helper/data";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AiOutlineArrowUp } from "react-icons/ai";

const Header = () => {
  return (
    <div>
      <div className="header-img position-relative">
        <img width="100%" src={sinop} alt="Sinop landscape" />
        <a
          href="#"
          className="position-fixed p-1 rounded-circle bg-primary text-white footer-arrow"
        >
          <AiOutlineArrowUp size={40} />
        </a>
      </div>
      <div className="py-1 px-2 px-sm-3 px-md-4 px-lg-5 border-top border-bottom border-2 border-dark header-line">
        <Splide
          options={{
            breakpoints: {
              500: {
                perPage: 1,
              },
              700: {
                perPage: 2,
              },
              820: {
                perPage: 3,
              },
              1000: {
                perPage: 4,
              },
              1300: {
                perPage: 5,
              },
              1600: {
                perPage: 6,
              },
              3200: {
                perPage: 7,
              },
            },
            arrows: true,
            pagination: false,
            drag: "free",
            gap: "2rem",
          }}
        >
          {data.map((item, index) => (
            <SplideSlide
              key={index}
              className="d-flex justify-content-center py-4"
            >
              <Link
                to={item.url}
                className="header-card py-3 text-decoration-none"
              >
                <div className="d-flex justify-content-center py-2">
                  {item.icon}
                </div>
                <div className="d-flex justify-content-center">
                  <span className="fw-bold text-black">{item.info}</span>
                </div>
              </Link>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Header;
