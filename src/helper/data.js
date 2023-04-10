import { BsMap, BsFillHouseCheckFill, BsInfoCircle } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
import { GiKnifeFork, GiPerson } from "react-icons/gi";
import { MdOutlineNaturePeople } from "react-icons/md";
import { HiPhoto } from "react-icons/hi2";

import hamsi from "../assets/food/hamsi.jpg";
import tatli from "../assets/food/hamursuztatli.png";
import kabak from "../assets/food/kabakmille.png";
import kestanepilav from "../assets/food/kestanepilavi.png";
import manti from "../assets/food/manti.png";
import maroon from "../assets/food/maroon.jpg";
import nokul from "../assets/food/nokul.png";
import sirik from "../assets/food/sirik.png";

import knife1 from "../assets/shopping/knife1.jpg";
import knife2 from "../assets/shopping/knife2.jpg";
import knife3 from "../assets/shopping/knife3.jpg";
import knife4 from "../assets/shopping/knife4.jpg";
import ship1 from "../assets/shopping/ship1.jpg";
import ship2 from "../assets/shopping/ship2.jpg";
import ship3 from "../assets/shopping/ship3.jpg";
import ship4 from "../assets/shopping/ship4.jpg";
import mahrama1 from "../assets/shopping/mahrama1.jpg";
import mahrama2 from "../assets/shopping/mahrama2.jpg";
import mahrama3 from "../assets/shopping/mahrama3.jpg";
import mahrama4 from "../assets/shopping/mahrama4.jpg";
import cember1 from "../assets/shopping/cember1.jpg";
import cember2 from "../assets/shopping/cember2.jpg";
import cember3 from "../assets/shopping/cember3.png";
import cember4 from "../assets/shopping/cember4.png";
import peskir1 from "../assets/shopping/peskir1.jpg";
import peskir2 from "../assets/shopping/peskir2.jpg";
import peskir3 from "../assets/shopping/peskir3.jpg";
import peskir4 from "../assets/shopping/peskir4.jpg";

export const shopping = [
  {
    id: 1,
    img: [knife1, knife2, knife3, knife4],
    name: "Knife",
    desc: "The production of handmade knives started by ÖZEKES and YILMAZ families in Sinop is continued by the fourth generation craftsmen of the ÖZEKES family today. This art, which started as a hobby by their first grandfather Hüseyin Usta in 1890, has progressed over time and handmade knives have become one of the handicrafts that make a great contribution to the promotion of Sinop today. High carbon Swedish tool steel is used in the making of the knives, and buffalo, deer neck and rosewood roots are used in the manufacture of the handles. The balustrade and top material are made of quality brass, and the scabbards are made of quality cowhide. Knives are produced as decorative knives, kitchen knives and hunting knives.",
  },
  {
    id: 2,
    img: [ship1, ship2, ship3, ship4],
    name: "Model Ship",
    desc: "This handicraft, which was started by two convicts in Sinop Prison in the 1950s, spread rapidly in the city center as a result of the prisoners' staying in Sinop after they were released from prison, continuing this art and teaching their apprentices how to make cotra. There are many people who are interested in this art in the city center. Kotras, which were initially offered as souvenirs to the visitors on the passenger ferries arriving at Sinop Port, became famous over time and began to be sent out of the city as souvenirs. Boats bought as gifts by domestic and foreign tourists coming to Sinop today have become the symbol of Sinop. In addition to Kotra making, which continues with traditional methods today, we see boat modeling, which is more up-to-date, requires technical knowledge and is worked on with a project, in this handicraft. Different types of trees are used in boat models (puller, tow, boat, galleon, gulet, yacht, fisherman, etc.), all details of which are produced with wood and handcraft. The most commonly used trees are walnut, hornbeam, beech, poplar, ash, maple, etc. Fishing line and nylon rope are used in boat equipment.",
  },
  {
    id: 3,
    img: [mahrama1, mahrama2, mahrama3, mahrama4],
    name: "Mahrama",
    desc: "It is a type of weaving used in the past to be used as a towel or waist belt, in a thin and long way (it does not have a standard size, it varies between 25-45x100-150 cm) using cotton yarn in different colors. It is also called long handkerchief in the region. Mahrama, which is commonly seen in Durağan and Boyabat districts and made on hand looms called order, is woven by throwing yarn more frequently than other weavings and placing local motifs on both ends of the cover.",
  },
  {
    id: 4,
    img: [cember1, cember2, cember3, cember4],
    name: "Çember",
    desc: "Circle is a type of weaving that has been woven in the region since ancient times and used as a headscarf. It is frequently seen especially in Boyabat, Durağan and Saraydüzü districts. The hoop, which is still used as a headscarf today, has started to be used as a cover on surfaces such as tables and coffee tables, as well as as a model or accessory in dresses such as shirts and blouses. It is woven in weaving looms called circle layout, usually 50-60 cm wide and 100-120 cm long according to the reed length. Its edges are striped, the middle part is patterned as a whole. While weaving on the circle, embroideries such as iron karat, matchbox, unconscious are thrown.",
  },
  {
    id: 5,
    img: [peskir1, peskir2, peskir3, peskir4],
    name: "Peşkir",
    desc: "Peshkirs, which used to function as hand and face towels in the past, are woven in the same technique as mahrama. Unlike mahrama, the more finely woven peshkirs were used as embroidery techniques, such as plain wrapping, oblique wrapping, herringbone, straight pesent, oblique pesent, gomez and yawnkaşı.",
  },
];

export const food = [
  {
    id: 1,
    img: hamsi,
    name: "Hamsi Tava",
    desc: "Hamsi tava is a popular Turkish dish made from fried anchovies (hamsi in Turkish). It is a traditional dish that originated from the Black Sea region of Turkey where anchovies are abundant. To make hamsi tava, fresh anchovies are first cleaned and then coated in a mixture of cornmeal, flour, salt, and pepper. The coated anchovies are then deep-fried in hot oil until they are crispy and golden brown. Hamsi tava is typically served with a side of lemon wedges and a green salad. It is a delicious and nutritious dish that is rich in protein and omega-3 fatty acids. In Turkey, it is often served as a street food or at casual dining establishments.",
  },
  {
    id: 2,
    img: tatli,
    name: "Hamursuz Tatlı",
    desc: "By mixing eggs, milk and flour, the dough is kneaded as sweet dough. After resting for a while, the kneaded dough is divided into small pieces. Some flour and starch are mixed together and the dough is rolled out with this mixture. Both sides of the rolled phyllo are cooked on the sheet until lightly browned and water is poured into a separate tray. Another tray is greased. The phyllo dough is dipped in a tray filled with water and taken out, and laid on the greased tray on top of each other. Only the space between each phyllo should be lubricated with oil and sprinkled with cracked walnuts. After the process is finished, it is oiled and cut in the form of a pastry and given to the oven. Meanwhile, sweet syrup is prepared. Sherbet is poured over the dessert that comes out of the oven. The only thing to note here is that one is hot and one is cold.",
  },
  {
    id: 3,
    img: kabak,
    name: "Kabak Millesi",
    desc: "Kabak Millesi, one of the most important dishes of Sinop culinary culture, is a very original dish prepared with dough. Doughs rolled out by hand are prepared by filling with pumpkin, walnuts and a sugary mortar. This flavor, which is constantly made in Sinop cuisine and is on the table on special days, is also known as Akkabak pastry. Kabak Millesi draws attention as a dessert rather than a pastry. Kabak Millesi, which is one of the most important indicators of the extremely special, unique and diverse culinary culture of Sinop, is frequently made on special occasions, meetings and meetings. This unique dish, which attracts the attention of local and foreign tourists visiting the region with its different structure, should definitely be tried.",
  },
  {
    id: 4,
    img: kestanepilav,
    name: "Kestane Pilavı",
    desc: "Kestane Pilavı is a traditional Turkish dish that translates to Chestnut Pilaf in English. It is a savory pilaf dish that is made with rice, chestnuts, onions, and a variety of spices. To make Kestane Pilavı, the chestnuts are first boiled or roasted until they are tender and then peeled. Meanwhile, rice is cooked with onions and a combination of spices such as cinnamon, cumin, and black pepper. The peeled chestnuts are added to the rice mixture and cooked for a few more minutes until all the flavors blend together.",
  },
  {
    id: 5,
    img: manti,
    name: "Mantı",
    desc: "Mantı is a traditional Turkish dish that can be best described as small dumplings filled with seasoned ground meat, typically lamb or beef, and served with a variety of sauces and toppings. Mantı is a popular dish in Turkey and can be found in many restaurants and homes across the country. It is especially very famous in Sinop. It is often served as a main course but can also be served as an appetizer or meze. Some variations of mantı include vegetarian options, such as fillings made with spinach or potatoes, and there are also regional variations of the dish that incorporate local ingredients and flavors.",
  },
  {
    id: 6,
    img: maroon,
    name: "Kestane",
    desc: "Perhaps the world's most delicious chestnut, lamb chestnut, grows in the forests of Sinop. The chestnuts collected in season are boiled in water and used as salting, roasted as a whole in the oven, crossroads, drawn and cooked in the form of kebab (kömme), or dried and stored.",
  },
  {
    id: 7,
    img: nokul,
    name: "Nokul",
    desc: "Nokul is a beloved pastry in Sinop and can be found in many bakeries, cafes, and markets across the country. It is a versatile pastry that can be enjoyed hot or cold, and is often served as part of a breakfast spread alongside other pastries, cheeses, olives, and eggs. Nokul is also a popular snack to take on the go and is often sold in street markets and food stalls.",
  },
  {
    id: 8,
    img: sirik,
    name: "Sırık Kebabı",
    desc: "The name sırık comes from the skewers used to make the dish, which are usually long metal rods that allow for the meat to be cooked evenly and without sticking to the grill. The dish is popular in many regions of Turkey, particularly in the southeastern part of the country. Sırık kebabı is often served with a side of grilled vegetables such as tomatoes, onions, and peppers, as well as a variety of sauces such as yogurt-based sauces, hot pepper paste, or tomato sauce. It is typically eaten with a side of rice or bread, and is a popular dish in many Turkish restaurants and homes.",
  },
];

const data = [
  {
    id: 1,
    icon: <BsMap className="text-success" size={35} />,
    info: "Places to visit",
    url: "",
  },
  {
    id: 2,
    icon: <BiShoppingBag className="text-warning" size={35} />,
    info: "Shopping",
    url: "shopping/",
  },
  {
    id: 3,
    icon: <GiKnifeFork className="text-danger" size={35} />,
    info: "Food",
    url: "food/",
  },
  {
    id: 4,
    icon: <BsFillHouseCheckFill className="text-success" size={35} />,
    info: "Accommodation",
    url: "accommodation/",
  },
  {
    id: 5,
    icon: <MdOutlineNaturePeople className="text-danger" size={35} />,
    info: "Activities",
    url: "activities/",
  },
  {
    id: 6,
    icon: <GiPerson className="text-dark" size={35} />,
    info: "Notable People",
    url: "",
  },
  {
    id: 7,
    icon: <HiPhoto className="text-success" size={35} />,
    info: "Photo Gallery",
    url: "",
  },
  {
    id: 8,
    icon: <BsInfoCircle className="text-warning" size={35} />,
    info: "Tourism in Sinop",
    url: "",
  },
];

export default data;
