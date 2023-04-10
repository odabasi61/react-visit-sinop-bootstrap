import { shopping } from "../helper/data";

const Shopping = () => {
  return (
    <div id="food" className="p-2 p-md-3 p-lg-4 p-xl-5">
      <div className="d-flex flex-wrap gap-4 justify-content-center">
        {shopping.map((item, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-4 col-12 col-sm-10 col-md-5 col-xl-3"
          >
            <h4>{item.name}</h4>
            <div className="food-img">
              {/* {item.img.map((image, index) => (
                <div>
                  <img src={image} alt="" />
                </div>
              ))} */}
              {/* <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                  ></button>
                </div>
                <div className="carousel-inner">
                  {item.img.map((image, index) => (
                    <div key={index} className="carousel-item active">
                      <img src={image} alt={item.name} />
                    </div>
                  ))}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div> */}
            </div>
            <p className="pt-3">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shopping;
