import { BsMap, BsFillHouseCheckFill, BsInfoCircle } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
import { GiKnifeFork, GiPerson } from "react-icons/gi";
import { MdOutlineNaturePeople } from "react-icons/md";
import { HiPhoto } from "react-icons/hi2";

const data = [
  {
    id: 1,
    icon: <BsMap className="text-success" size={35} />,
    info: "Places to visit",
    url: '',
  },
  {
    id: 2,
    icon: <BiShoppingBag className="text-warning" size={35} />,
    info: "Shopping",
    url: 'shopping/',
  },
  {
    id: 3,
    icon: <GiKnifeFork className="text-danger" size={35} />,
    info: "Food",
    url: 'food/',
  },
  {
    id: 4,
    icon: <BsFillHouseCheckFill className="text-success" size={35} />,
    info: "Accommodation",
    url: 'accommodation/',
  },
  {
    id: 5,
    icon: <MdOutlineNaturePeople className="text-danger" size={35} />,
    info: "Activities",
    url: 'activities/',
  },
  {
    id: 6,
    icon: <GiPerson className="text-dark" size={35} />,
    info: "Notable People",
    url: '',
  },
  {
    id: 7,
    icon: <HiPhoto className="text-success" size={35} />,
    info: "Photo Gallery",
    url: '',
  },
  {
    id: 8,
    icon: <BsInfoCircle className="text-warning" size={35} />,
    info: "Tourism in Sinop",
    url: '',
  },
];

export default data;
