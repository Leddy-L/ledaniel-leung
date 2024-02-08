import "../styles/navbar.scss";
import logo from "../logo.svg";

function CustomNavbar() {
  const navItems = ["About", "Experience", "Projects"];

  return (
    <nav>
      <div>
        <a className="nav-brand" href="#">
          <img src={logo} alt="" />
        </a>
      </div>
      <div id="basic-nav-nav">
        <div className="ms-auto justify-content-center">
          {navItems.map((item) => (
            <a href="#">{item}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default CustomNavbar;
