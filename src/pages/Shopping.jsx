import { shopping } from "../helper/shopping";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Shopping = () => {
  return (
    <div id="food" className="p-2 p-md-3 p-lg-4 p-xl-5">
      <div>
        <h3 className="pb-4">Discover Sinop's traditional treasures</h3>
        <p>
          Sinop is a beautiful city located on the Black Sea coast of Turkey.
          The city is famous for its rich cultural heritage, beautiful
          landscapes, and delicious cuisine. In addition to its scenic beauty,
          Sinop is also renowned for its traditional handicrafts, which are made
          by skilled artisans using techniques that have been passed down from
          generation to generation.
        </p>
        <p>
          One of the most popular handicrafts in Sinop is the handmade knife.
          These knives are made by local craftsmen using high-quality materials,
          and they are renowned for their durability and sharpness. Whether
          you're a collector or just looking for a useful tool, a handmade knife
          from Sinop is an excellent choice.
        </p>
        <p>
          Another popular handicraft in Sinop is the model ship. These
          intricately crafted vessels are a tribute to the city's rich maritime
          heritage. They come in a variety of sizes and designs, and they make
          an excellent decoration for any home or office.
        </p>
        <p>
          Çember, mahrama, and peşkir are also famous handicrafts in Sinop.
          Çember is a traditional circular wooden frame that is used for
          stretching fabric during weaving. Mahrama is a type of woven blanket
          or rug, typically made from wool or cotton, while peşkir is a type of
          hand towel that is used for drying off after a bath.
        </p>
        <p>
          If you're planning a trip to Sinop, be sure to visit the local markets
          and shops to discover these traditional handicrafts. These unique and
          authentic items make excellent souvenirs and gifts for friends and
          family back home. Not only will you be taking home a piece of Sinop's
          rich culture, but you'll also be supporting local artisans and
          preserving their traditional crafts for generations to come.
        </p>
        <p className="pb-4">
          In conclusion, Sinop is a city with a rich cultural heritage, and its
          traditional handicrafts are a testament to its vibrant history. From
          handmade knives to model ships, and from çember to peşkir, visitors to
          Sinop are advised to buy these unique and authentic items before they
          leave. Not only are they beautiful and functional, but they also serve
          as a reminder of the city's rich cultural legacy.
        </p>
      </div>
      <div className="d-flex flex-wrap gap-4 justify-content-center">
        {shopping.map((item, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-4 col-12 col-sm-10 col-md-5 col-xl-3"
          >
            <h4>{item.name}</h4>
            <Splide
              options={{
                breakpoints: {
                  5000: {
                    perPage: 1,
                  },
                },
                arrows: true,
                pagination: true,
                drag: "free",
                gap: "2rem",
              }}
            >
              {item.img.map((image, index) => (
                <SplideSlide key={index} className="general-img">
                  <img src={image} alt={item.name} />
                </SplideSlide>
              ))}
            </Splide>

            <p className="pt-3">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shopping;
