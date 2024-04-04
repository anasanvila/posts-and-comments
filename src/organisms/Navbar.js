import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
    <div className="container-fluid">
      <span className="navbar-brand" href="javascript:void(0)">
        Logo
      </span>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mynavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="mynavbar">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link id="RouterNavLink" to="/posts">
              Posts
            </Link>
          </li>
        </ul>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="text"
            placeholder="Search"
          />
          <input
            className="form-control me-2"
            type="text"
            placeholder="Filter by User"
          />
          <button className="btn btn-success" type="button">
            Go
          </button>
        </form>
      </div>
    </div>
  </nav>
);

export default Navbar;
