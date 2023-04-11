import summer from "../assets/homepage/summer.jpg";
import winter from "../assets/homepage/winter.jpg";

const Geography = () => {
  return (
    <div
      id="geography"
      className="p-2 p-md-3 p-lg-4 p-xl-5 border-bottom border-2 border-dark"
    >
      <h2 className="text-decoration-underline fw-bold fs-4 pb-4">Geography</h2>
      <div className="p-2 bg-white rounded-2">
        <p>
          Sinop is located in the northern region of Turkey, situated on the
          coast of the Black Sea. The city is part of the Sinop Province, which
          is one of the smallest provinces in Turkey. The geography of Sinop is
          characterized by its location on the Sinop Peninsula, which is a
          narrow strip of land that extends into the sea, forming a natural
          harbor.
        </p>
        <p>
          The climate in Sinop is characterized by mild winters and cool
          summers, which is typical of the Black Sea region. The city
          experiences a moderate amount of rainfall throughout the year, with
          the heaviest rainfall occurring in the fall and winter months. The
          average temperature in Sinop ranges from 9°C in January to 22°C in
          August.
        </p>
        <div className="d-flex flex-column-reverse flex-lg-row row align-items-center gap-4 px-2 mb-4">
          <div className="col-12 col-lg-6">
            <p>
              Sinop is surrounded by several mountain ranges, including the
              Akliman Mountains, the Boyabat Mountains, and the Küre Mountains.
              The Akliman Mountains are the highest mountain range in the
              region, rising to an altitude of 1,295 meters above sea level. The
              Boyabat Mountains are located to the east of Sinop, while the Küre
              Mountains are located to the west.
            </p>
            <p>
              The mountains in the region are characterized by their steep
              slopes and rugged terrain, which make them difficult to access.
              However, the mountains are home to a variety of flora and fauna,
              including pine forests, oak forests, and a variety of wildlife.
            </p>
            <p>
              The valleys in the region are characterized by their fertile soil,
              which makes them ideal for agriculture. The valleys are also home
              to several rivers and streams, including the Kelkit River, the
              Gökırmak River, and the İnceğiz Creek.
            </p>
          </div>
          <div className="col-12 col-sm-10 col-lg-5 home-img">
            <img width="100%" src={winter} alt="Sinop in winter" />
          </div>
        </div>
        <div className="d-flex flex-column flex-lg-row row align-items-center gap-4 px-2">
          <div className="col-12 col-sm-10 col-lg-6 home-img">
            <img width="100%" src={summer} alt="Sinop in summer" />
          </div>
          <div className="col-12 col-lg-5">
            <p>
              The coastline of Sinop is characterized by its rugged terrain,
              with steep cliffs and rocky outcrops. However, there are several
              beautiful beaches in the region, including the Ayancık Beach, the
              Gerze Beach, and the İnceburun Beach. The beaches in the region
              are known for their crystal clear water and fine sand. The beaches
              are also popular destinations for water sports, including
              swimming, surfing, and windsurfing.
            </p>
            <p>
              The natural harbor of Sinop is one of the largest and safest
              harbors on the Black Sea. The harbor is sheltered from the winds
              and waves, which makes it an important center for fishing and
              shipping. The harbor is also home to a number of small islands,
              including the Sarıkum Island, the Boyabat Island, and the Sığ
              Island.
            </p>
            <p>
              In conclusion, the geography of Sinop is characterized by its
              location on the Sinop Peninsula, surrounded by mountains on three
              sides, and facing the Black Sea. The region is home to several
              mountain ranges, valleys, beaches, and islands, which make it a
              unique and beautiful landscape. The region's mild climate, fertile
              soil, and abundant water resources make it an important center for
              agriculture, fishing, and shipping. The natural harbor of Sinop is
              one of the largest and safest harbors on the Black Sea, which has
              been an important center for trade and commerce since ancient
              times.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Geography;
