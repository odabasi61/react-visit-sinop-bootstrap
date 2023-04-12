import historical from '../helper/notable';

const NotableHistorical = () => {
  return (
    <div>
      <div className="bg-white rounded-2">
        <div className="d-flex flex-wrap gap-4 p-4 justify-content-center notable-container">
          {historical.map((historic, index) => (
            <div
              key={index}
              className="notable-card rounded-2 text-center position-relative"
            >
              <div className="front-card p-4 position-absolute rounded-2 top-0 start-0 w-100 overflow-hidden bg-white">
                <h6 className="pb-3 fw-bold">{historic.name.toUpperCase()}</h6>
                <div>
                  <img src={historic.img} alt={historic.name} />
                </div>
                <p className="pt-2">{historic.date}</p>
                <p>{historic.job}</p>
              </div>
              <div className="back-card p-5 bg-dark text-white rounded-2 position-absolute w-100 top-0 start-0 overflow-hidden">
                {historic.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NotableHistorical
