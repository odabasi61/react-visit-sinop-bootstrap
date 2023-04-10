import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center text-white text-center bg-dark">
        <div>
          <ul className="d-flex gap-4 p-4 justify-content-center">
            <Link to={"about"} className="footer-links">
              About Us
            </Link>
            <Link to={"contact"} className="footer-links">
              Contact Us
            </Link>
            <Link to={"privacy"} className="footer-links">
              Privacy Policy
            </Link>
            <Link to={"support"} className="footer-links">
              Support
            </Link>
          </ul>
        </div>
        <div className="text-white border-t lg:border-none">
          <ul className="flex gap-4 p-4 p-lg-5 justify-center">
            <Link to={"https://github.com/odabasi61"}>
              <AiOutlineGithub size={40} className="footer-icons" />
            </Link>
            <Link to={"https://www.linkedin.com/in/ali-odaba%C5%9F%C4%B1/"}>
              <AiOutlineLinkedin size={40} className="footer-icons" />
            </Link>
            <Link to={"https://www.instagram.com/aliodabas_a/"}>
              <AiOutlineInstagram size={40} className="footer-icons" />
            </Link>
          </ul>
        </div>
        <div>
          <div className="p-4 border-t lg:border-none">
            <p>
              copyrigths &copy; {new Date().getFullYear()},{" "}
              <Link
                to={"https://github.com/odabasi61"}
                className="footer-links"
              >
                Ali ODABAŞI
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
