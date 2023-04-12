import { Link, Outlet } from "react-router-dom"

const Notable = () => {
  return (
    <div className="p-2 p-md-3 p-lg-4 p-xl-5">
        <h3 className="pb-4">Notable People of Sinop</h3>
      <div className="d-flex gap-3 py-4 justify-content-center">
        <Link to={''} className="py-2 px-3 btn btn-success">Historical</Link>
        <Link to={'contemporary'} className="py-2 px-3 btn btn-success">Contemporary</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Notable;
