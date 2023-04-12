import tekne from "../assets/homepage/tekne.jpg";
import hamsi1 from "../assets/homepage/hamsi1.jpg";

const Culture = () => {
  return (
    <div
      id="culture"
      className="p-2 p-md-3 p-lg-4 p-xl-5 border-bottom border-2 border-dark"
    >
      <h2 className="text-decoration-underline fw-bold fs-4 pb-4">Culture</h2>
      <div className="p-2 bg-white rounded-2">
        <p>
          One of the main characteristics of Sinop's culture is its connection
          to the sea. The city has a long history of seafaring and fishing, and
          the sea is an important part of daily life for the local people.
          Seafood is a staple of the local cuisine, and many traditional dishes
          feature fish, shrimp, and other seafood.
        </p>
        <p>
          Sinop is also known for its historic sites and museums, which offer
          insights into the city's past. The Sinop Archaeological Museum is a
          popular attraction, with exhibits that showcase the area's history
          dating back to ancient times. The Sinop Fortress is another historic
          landmark, with walls that date back to the Roman era.
        </p>
        <div className="d-flex flex-column-reverse flex-lg-row row align-items-center gap-4 px-2 mb-4">
          <div className="col-12 col-lg-6">
            <p>
              <b>Language:</b>
            </p>
            <p>
              The primary language spoken in Sinop is Turkish, which is the
              official language of Turkey. However, there are also several
              minority languages spoken in the area, including Laz, Georgian,
              and Armenian.
            </p>
            <p>
              <b>Cuisine:</b>
            </p>
            <p>
              Sinop's cuisine is known for its use of fresh seafood, vegetables,
              and herbs. Some of the most popular dishes include hamsi (fried
              anchovies), karalahana (a local type of cabbage), and mısır ekmeği
              (a type of cornbread). Tea is also a staple beverage in Sinop, and
              it is typically served with meals and throughout the day.
            </p>
            <p>
              <b>Festivals:</b>
            </p>
            <p>
              Sinop hosts several festivals throughout the year, each with its
              own unique cultural traditions. The most popular festivals include
              the Sinop International Biennial, which showcases contemporary art
              from around the world; the Sinop Festival, which celebrates the
              city's music, dance, and cuisine; and the Sinop International Jazz
              Festival, which features jazz performances from both local and
              international musicians.
            </p>
          </div>
          <div className="col-12 col-sm-10 col-lg-5 home-img">
            <img src={hamsi1} alt="Model Ship" />
          </div>
        </div>
        <div className="d-flex flex-column flex-lg-row row align-items-center gap-4 px-2">
          <div className="col-12 col-sm-10 col-lg-6 home-img">
            <img src={tekne} alt="Seyyid Bilal Türbesi" />
          </div>
          <div className="col-12 col-lg-5">
            <p>
              <b>Sports:</b>
            </p>
            <p>
              Sports are also an important part of Sinop's culture, with
              football (soccer) being the most popular sport in the area. The
              local football team, Sinopspor, plays in the Turkish Football
              Federation's lower leagues. Other popular sports in the area
              include basketball, volleyball, and wrestling.
            </p>
            <p>
              <b>Arts and Crafts:</b>
            </p>
            <p>
              Sinop has a long history of traditional arts and crafts, including
              ceramics, woodwork, and weaving. The city is particularly known
              for its hand-woven carpets and kilims, which are made using
              traditional techniques passed down through generations. The Sinop
              Carpets and Kilims Museum is dedicated to preserving and
              showcasing this local craft tradition.
            </p>
            <p>
              In conclusion, Sinop's culture is a rich and diverse blend of
              history, tradition, and modernity. The city's seafaring heritage,
              religious traditions, and artistic and culinary offerings all
              contribute to its unique identity, making it a fascinating
              destination for visitors looking to explore Turkey's cultural
              landscape.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Culture;
