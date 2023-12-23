import "../styles/Navbar.scss";
import logo from "../logo.svg";

function Navbar() {
  const navItems = ["About", "Experience", "Projects"];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <a className="navbar-brand" href="#">
        <img src={logo} width="60" height="60" alt="" />
      </a>
      <button className="navbar-toggler" type="button">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          {navItems.map((item) => (
            <li className="nav-item">
              <a className="nav-link" href="#">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
