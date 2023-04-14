import plateau from "../assets/tourism/plateau.jpg";
import camp from "../assets/tourism/camp.jpg";
import cave from "../assets/tourism/cave.jpg";
import sea from "../assets/tourism/sea.jpg";
import faith from "../assets/tourism/faith.jpg";
import cruise from "../assets/tourism/cruise.jpg";
import culture from "../assets/tourism/culture.jpg";

import plateau1 from "../assets/tourism/plateau1.png";
import plateau2 from "../assets/tourism/plateau2.png";
import plateau3 from "../assets/tourism/plateau3.png";
import plateau4 from "../assets/tourism/plateau4.png";
import plateau5 from "../assets/tourism/plateau5.png";
import plateau6 from "../assets/tourism/plateau6.png";
import plateau7 from "../assets/tourism/plateau7.png";
import plateau8 from "../assets/tourism/plateau8.png";
import plateau9 from "../assets/tourism/plateau9.png";

import sea1 from "../assets/tourism/sea1.png";
import sea2 from "../assets/tourism/sea2.png";
import sea3 from "../assets/tourism/sea3.jpg";
import sea4 from "../assets/tourism/sea4.jpg";
import sea5 from "../assets/tourism/sea5.jpg";
import sea6 from "../assets/tourism/sea6.jpg";
import sea7 from "../assets/tourism/sea7.jpg";

export const tourism = [
  {
    id: 1,
    kind: "Plateau Tourism",
    img: plateau,
    images: [
      plateau,
      plateau1,
      plateau2,
      plateau3,
      plateau4,
      plateau5,
      plateau6,
      plateau7,
      plateau8,
      plateau9,
    ],
    desc1:
      "In the province of Sinop, plateaus surrounded by forests can be seen on the upper parts of the mountains rising after a not very wide coastal part. These plateaus, which are given different names by the people of the surrounding area, are places where animal husbandry is made with their cool waters, climate and green cover in summer.",
    desc: [
      {
        title: "Gürfındık Bozarmut Plateau:",
        description:
          "The plateaus, located 35 km southwest of Gerze-Çalboğazı Town, can be reached by a stabilized road. Transportation is provided from Gerze beaches in 45 minutes by car. There are no infrastructure facilities on the plateaus at an altitude of 350 m.",
      },
      {
        title: "Kurugöl Plateau-Türkeli:",
        description:
          "It is 12 km northwest of the Türkeli District. The 800 m high plateau is a natural view and viewing terrace in the Black Sea. Water and electricity services are also provided in the plateau.",
      },
      {
        title: "Akgöl Plateau-Ayancık:",
        description:
          "Akgöl Plateau, which is 5 km inside the road that separates at the 31st km of the Ayancık-Kastamonu road in the south of Ayancık district, is at an altitude of 1200 meters. The lake, formed by the merging of two streams flowing through the dense fir forests around, covers an average of 3 decares of area. It is a place that can attract the attention of nature enthusiasts with its unspoiled vegetation and fascinating scenery. One of the most beautiful promenade places in Sinop, Akgöl can also take a boat trip.",
      },
      {
        title: "Buzluk Plateau-Durağan:",
        description:
          "Buzluk Plateau, which is 15 km to the north of Durağan district, has various tourism opportunities (plateau, mountain-nature, etc.). The most important feature of the 1150 m high Buzluk Plateau, where the infrastructure system is developed (stabilized road, drinking water, electricity, telephone), is that the formation of ice in the summer and hot water in the winter can be observed in the cave located here.",
      },
      {
        title: "Dıranaz Soğuksu Area:",
        description:
          "It is on the 47th kilometer of the Sinop-Boyabat highway. It is surrounded by fir trees. Drinking water in the forest is known as medicinal.",
      },
    ],
  },
  {
    id: 2,
    kind: "Sea Tourism",
    img: sea,
    images: [sea, sea1, sea2, sea3, sea4, sea5, sea6, sea7],
    desc1:
      "Sinop is a city located in northern Turkey that offers a unique sea tourism experience. The city is surrounded by the Black Sea and has a long coastline with beautiful beaches and crystal-clear waters. Many tourists visit Sinop to enjoy its natural beauty and explore its historic landmarks such as the Sinop Castle and the Archaeology Museum. The city is also famous for its traditional fishing industry, and visitors can experience local life by watching fishermen catch fish using traditional methods. Sinop offers a wide range of water activities such as swimming, diving, and sailing. The city has many hotels, restaurants, and cafes that offer delicious seafood and traditional Turkish cuisine. Sinop's sea tourism provides an opportunity for visitors to enjoy a peaceful and relaxing vacation while experiencing the city's rich history and culture.",
    desc: [
      {
        title: "Bahçeler:",
        description:
          "It is an area covered with forest at the entrance of the city center, facing the inner harbor. In the sand band with an average length of 500 m and a width of 4-10 m; There are a public beach, a forest camp and recreational facilities, a municipal camp and a motel, restaurant, camp and tent sites within the camp. It is possible to enter the sea from the coastal band covered with fine yellow sand. The forest area behind the band is used as a picnic and recreation area.",
      },
      {
        title: "Akliman:",
        description:
          "It is in the west of the city, 9 km from the city center. It has a sandy beach stretching like a strip of kilometers long and 15-20 m wide. The Akliman Picnic Area, located in the area, is qualified to meet all kinds of needs. It is a “ria” type of coast in the picnic area, where the forest and the sea are intertwined.",
      },
      {
        title: "Sarıkum:",
        description:
          "In the region, which is 21 km away from the city center, the sea, forest and lake are together. The region, where various fish and wild animals are also found, has been declared as a nature protection area. The place, which has a wide and long beach formed by fine-grained sands by the sea, got its name from the color of the sand.",
      },
      {
        title: "Karakum:",
        description:
          "It is 2 km from the city center. It is on the road surrounding the Sinop Peninsula. It is named after its fine jet black volcanic sand. The sand in this area, which took its name from the fine black sand, is said to be good for diseases such as rheumatism and sciatica. There are hotels, holiday villages, cafes, restaurants, bungalow type houses, caravans and tent places belonging to the public and private sectors.",
      },
      {
        title: "Mobil Korucuk Village:",
        description:
          "It is 2 km away from the city center, on the road surrounding the Sinop Peninsula. The region, which has a calm sea and clean beaches, provides a wide range of services with certified facilities, restaurants, camping and caravan sites. This is where the city tourism is most intense in Sinop.",
      },
      {
        title: "Hamsilos Bay:",
        description:
          "Hamsilos Bay, with its lush forest and the bay where the sea enters the land like a river, is a 300-400 m sea recess located at the mouth of a small stream called Deveci Stream. According to morphological evidence, Hamsilos Harbor is a “ria” type of coast found only in Norway and Sinop in the world, which was formed by the submersion of the lower part of the Deveci Stream Valley as a result of the depressions formed on the land.",
      },
    ],
  },
  {
    id: 3,
    kind: "Culture Tourism",
    img: culture,
  },
  {
    id: 4,
    kind: "Faith Tourism",
    img: faith,
  },
  {
    id: 5,
    kind: "Cave Tourism",
    img: cave,
  },
  {
    id: 6,
    kind: "Camping Tourism",
    img: camp,
  },
  {
    id: 7,
    kind: "Cruise Tourism",
    img: cruise,
  },
];
