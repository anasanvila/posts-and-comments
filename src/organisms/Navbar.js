import { Link } from "react-router-dom";
import { useEffect } from "react";
import Form from "../moleculs/Form";

const Navbar = ({ text }) => {
  useEffect(() => text(" Navbar"));

  return (
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
          <Form />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
