import kale from "../assets/homepage/kale.jpg";
import historic from "../assets/homepage/historic.jpg";

const History = () => {
  return (
    <div
      id="history"
      className="p-2 p-md-3 p-lg-4 p-xl-5 border-bottom border-2 border-dark"
    >
      <h2 className="text-decoration-underline fw-bold fs-4 pb-4">
        History of Sinop
      </h2>
      <div className="p-2 bg-white rounded-2">
        <p>
          Sinop is a city located on the Black Sea coast of Turkey. It has a
          rich history dating back to ancient times.
        </p>
        <p>
          The region around Sinop has been inhabited since prehistoric times.
          Archaeological evidence suggests that the area was first settled
          during the Neolithic period, around 8,000 years ago. The first known
          inhabitants of the region were the Cimmerians, a nomadic people who
          lived in the area from the 8th to the 7th century BCE. They were
          followed by the Thracians, who established a number of settlements in
          the region.
        </p>
        <p>
          In the 7th century BCE, the city of Sinop was founded by the
          Milesians, a Greek colony from Ionia. The city quickly became an
          important trade center, thanks to its strategic location on the Black
          Sea coast. It was known for its shipbuilding industry, and its sailors
          were renowned throughout the ancient world.
        </p>
        <div className="d-flex flex-column-reverse flex-lg-row row align-items-center gap-4 px-2 mb-4">
          <div className="col-12 col-lg-6">
            <p>
              In the 4th century BCE, Sinop came under the control of the Pontic
              Kingdom, a Hellenistic state founded by the Persian general
              Mithridates I. The city continued to thrive under Pontic rule, and
              it became an important center of Greek culture and learning. The
              philosopher Diogenes of Sinope, known for his cynical philosophy
              and his rejection of material possessions, was born in the city
              during this period.
            </p>
            <p>
              In 64 BCE, Sinop was conquered by the Roman general Pompey, and it
              became an important port city in the Roman Empire. The city's
              strategic location made it a key center of trade and commerce, and
              it played an important role in the Roman Empire's efforts to
              control the Black Sea region. During this period, the city also
              became an important center of Christianity, and it was one of the
              first places where the gospel was preached in the region.
            </p>
            <p>
              After the fall of the Roman Empire, Sinop came under the control
              of the Byzantine Empire. The city continued to be an important
              center of trade and commerce, and it remained a key center of
              Orthodox Christianity. During this period, the city was also known
              for its powerful navy, which played an important role in the
              Byzantine Empire's efforts to control the Black Sea region.
            </p>
          </div>
          <div className="col-12 col-sm-10 col-lg-5 home-img">
            <img src={historic} alt="Balatlar Church" />
          </div>
        </div>
        <div className="d-flex flex-column flex-lg-row row align-items-center gap-4 px-2">
          <div className="col-12 col-sm-10 col-lg-6 home-img">
            <img src={kale} alt="Boyabat Castle" />
          </div>
          <div className="col-12 col-lg-5">
            <p>
              In the Middle Ages, Sinop was under the control of various empires
              and kingdoms, including the Seljuk Turks, the Mongols, and the
              Ottoman Empire. During the Ottoman period, Sinop was an important
              port city, with a significant shipbuilding industry and a center
              for trade and commerce. The city played a crucial role in the
              Crimean War when it was used as a base by the British and French
              forces.
            </p>
            <p>
              During the early 20th century, Sinop played a significant role in
              the Turkish War of Independence. The city was a center for the
              resistance movement against the occupying Greek forces, and the
              resistance led by the local hero Seyitgazi was crucial in the
              final victory of the Turkish forces. In the years following the
              war, Sinop experienced rapid growth and development, with new
              industries and infrastructure being established.
            </p>
            <p>
              Today, Sinop is a bustling city with a rich cultural heritage and
              a vibrant economy. The city's historical landmarks, including the
              Sinop Castle, the Pervane Medrese, and the Balatlar Church,
              attract visitors from all over the world, while the city's
              thriving fishing industry and agricultural sector provide the
              backbone of its economy. Sinop is also home to several
              universities, including Sinop University, which has contributed to
              the city's growing reputation as an academic and cultural hub.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
