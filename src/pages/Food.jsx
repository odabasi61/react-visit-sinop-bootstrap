import { food } from "../helper/food";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Food = () => {
  return (
    <div id="food" className="p-2 p-md-3 p-lg-4 p-xl-5">
      <div>
        <h3 className="pb-4">
          Have you ever tasted Sinop's delicious kitchen?
        </h3>
        <p>
          Sinop is not only famous for its traditional handicrafts but also for
          its rich cuisine. The city's location on the Black Sea coast means
          that its cuisine is heavily influenced by the sea, with an abundance
          of fresh seafood available.
        </p>
        <p>
          One of the most popular dishes in Sinop is hamsi, which is a type of
          anchovy that is caught in the Black Sea. Hamsi is typically served
          grilled or fried and is a staple food in the local cuisine. Other
          seafood dishes that you should try in Sinop include grilled sea bass,
          fried mussels, and stuffed squid.
        </p>
        <p>
          Meat dishes are also popular in Sinop, with lamb and beef being the
          most common types of meat used. One of the most famous meat dishes in
          Sinop is called ciğer tava, which is made from thin slices of lamb
          liver that are battered and fried. Other meat dishes to try include
          kebabs, meatballs, and stews.
        </p>
        <p>
          Vegetarians will also find plenty of delicious options in Sinop.
          Vegetable dishes like stuffed peppers and eggplant, bean stews, and
          salads are widely available, and are often served as side dishes
          alongside the main course.
        </p>
        <p>
          No visit to Sinop would be complete without trying the local desserts.
          Baklava, a sweet pastry made with layers of phyllo dough, honey, and
          nuts, is a must-try. Other sweet treats to try include künefe, a sweet
          cheese pastry, and lokma, a type of doughnut that is fried and then
          soaked in syrup.
        </p>
        <p className="pb-4">
          Overall, Sinop's cuisine is a reflection of its rich cultural heritage
          and unique location. With a variety of seafood, meat, and vegetarian
          dishes, as well as an array of sweet treats, there is something for
          everyone to enjoy. So be sure to indulge in the local cuisine during
          your visit to Sinop!
        </p>
      </div>
      <div className="d-flex flex-wrap gap-4 justify-content-center">
        {food.map((item, index) => (
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

export default Food;
