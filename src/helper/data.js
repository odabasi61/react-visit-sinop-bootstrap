import { BsMap, BsFillHouseCheckFill } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
import { GiKnifeFork, GiPerson } from "react-icons/gi";
import { MdOutlineNaturePeople } from "react-icons/md";
import { HiPhoto } from "react-icons/hi2";

const data = [
  {
    id: 1,
    icon: <BsMap className="text-success" size={35} />,
    info: "Places to visit",
  },
  {
    id: 2,
    icon: <BiShoppingBag className="text-warning" size={35} />,
    info: "Shopping",
  },
  {
    id: 3,
    icon: <GiKnifeFork className="text-danger" size={35} />,
    info: "Food",
  },
  {
    id: 4,
    icon: <BsFillHouseCheckFill className="text-success" size={35} />,
    info: "Accommodation",
  },
  {
    id: 5,
    icon: <MdOutlineNaturePeople className="text-danger" size={35} />,
    info: "Activities",
  },
  {
    id: 6,
    icon: <GiPerson className="text-dark" size={35} />,
    info: "Notable People",
  },
  {
    id: 7,
    icon: <HiPhoto className="text-success" size={35} />,
    info: "Photo Gallery",
  },
];

export default data;
