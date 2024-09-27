import { Link } from "react-router-dom";
import "./navbar.scss";
import Logo from "@assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faList } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/WealthHealth/">
        <img src={Logo} alt="Logo - HRnet" />
        <h1>HRnet</h1>
      </Link>
      <ul>
        <li>
          <Link to="/WealthHealth/">
            <FontAwesomeIcon icon={faPlus} />
            <span>Add employee</span>
          </Link>
        </li>
        <li>
          <Link to="/WealthHealth/employees/">
            <FontAwesomeIcon icon={faList} />
            <span>Current employees</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
