import Clock from "react-live-clock";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1>NC-Express</h1>
      </Link>
      <img className="header__logo" src={logo} alt="" />
      <Clock className="header__clock" format={"HH:mm"} ticking={true} />
    </header>
  );
};

export default Header;
