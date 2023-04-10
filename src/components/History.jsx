import kale from "../assets/homepage/kale.jpg";
import balatlar from "../assets/homepage/balatlar.jpg";

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
            <img width="100%" src={balatlar} alt="Balatlar Church" />
          </div>
        </div>
        <div className="d-flex flex-column flex-lg-row row align-items-center gap-4 px-2">
          <div className="col-12 col-sm-10 col-lg-6 home-img">
            <img width="100%" src={kale} alt="Boyabat Castle" />
          </div>
          <div className="col-12 col-lg-5">
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
        </div>
      </div>
    </div>
  );
};

export default History;
