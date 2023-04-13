import { accommodation } from "../helper/accomodation";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import GoHome from "../components/GoHome";

const Accommodation = () => {
  return (
    <div id="accommodation" className="p-2 p-md-3 p-lg-4 p-xl-5">
      <div>
        <h3 className="pb-4">Relax in style in Sinop</h3>
      </div>
      <div className="p-2 bg-white rounded-2">
        <p>
          Sinop is a popular tourist destination in Turkey, and there are many
          different types of accommodation available to suit all budgets and
          preferences. Some of the most popular types of accommodation in Sinop
          include hotels, motels, hostels, bungalovs, and camping areas.
        </p>
        <div className="d-flex flex-column-reverse flex-lg-row row align-items-center gap-4 px-2 mb-4">
          <div className="col-12 col-lg-6">
            <p>
              Sinop has a wide range of hotels to choose from, ranging from
              budget to luxury options. The more affordable hotels offer clean
              and comfortable rooms, while the more luxurious hotels offer
              amenities such as swimming pools, spas, and on-site restaurants.
              Many hotels in Sinop are located near the beach, providing guests
              with easy access to the water and stunning views. Some hotels also
              offer organized tours and excursions, making it easy for guests to
              explore the area. If you're looking for a more luxurious stay,
              Sinop's five-star hotels are a great option, offering high-end
              amenities and top-notch service.
            </p>
          </div>
          <div className="col-12 col-sm-10 col-lg-5 home-img">
            <img width="100%" src={accommodation[0]} alt="hotel in Sinop" />
          </div>
        </div>

        <div className="d-flex flex-column flex-lg-row row align-items-center gap-4 px-2">
          <div className="col-12 col-sm-10 col-lg-6 home-img">
            <img width="100%" src={accommodation[4]} alt="bungalov in Sinop" />
          </div>
          <div className="col-12 col-lg-5">
            <p>
              Bungalows are a great option for those looking for a more rustic
              and nature-filled experience. In Sinop, bungalows are often found
              in campgrounds or holiday parks, offering guests a chance to enjoy
              the outdoors while still having access to basic amenities.
              Bungalows are typically small, standalone cabins or cottages, and
              often come equipped with beds, bathrooms, and small kitchenettes.
              Some bungalows in Sinop are located near the beach, providing
              guests with a unique experience of waking up to the sound of the
              waves crashing on the shore. If you're looking for a
              budget-friendly option, bungalows can be a great choice, providing
              a comfortable and affordable place to stay.
            </p>
          </div>
        </div>

        <div className="d-flex flex-column-reverse flex-lg-row row align-items-center gap-4 px-2 mb-4">
          <div className="col-12 col-lg-6">
            <p>
              Camping is a popular accommodation option for those looking to get
              closer to nature. Sinop has several campsites located near the
              beach or in the countryside, providing guests with a chance to
              explore the area while enjoying the outdoors. Campsites in Sinop
              offer tent and RV pitches, as well as shared facilities such as
              showers, toilets, and communal cooking areas. Some campsites even
              offer glamping options, providing a more luxurious camping
              experience with amenities such as private bathrooms and
              comfortable beds. Camping is an affordable option, making it an
              ideal choice for budget-conscious travelers looking for a unique
              experience.
            </p>
          </div>
          <div className="col-12 col-sm-10 col-lg-5 home-img">
            <img width="100%" src={accommodation[8]} alt="camp in Sinop" />
          </div>
        </div>
      </div>

      <div className="p-2 bg-white rounded-2 mt-4 py-4">
        <Splide
          options={{
            breakpoints: {
              700: {
                perPage: 1,
              },
              1000: {
                perPage: 2,
              },
              1300: {
                perPage: 3,
              },
              1650: {
                perPage: 4,
              },
              2000: {
                perPage: 5,
              },
              2300: {
                perPage: 6,
              },
              2650: {
                perPage: 7,
              },
              2950: {
                perPage: 8,
              },
              5000: {
                perPage: 12,
              },
            },
            arrows: true,
            pagination: false,
            drag: "free",
            gap: "2rem",
          }}
        >
          {accommodation.map((item, index) => (
            <SplideSlide
              key={index}
              className="d-flex gap-4 justify-content-center"
            >
              <div className="accommodation-card">
                <img src={item} alt="touristic accommodations" />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <GoHome />
    </div>
  );
};

export default Accommodation;
