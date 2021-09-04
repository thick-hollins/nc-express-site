import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import profileImg from "../img/profile.svg";
const Nav = () => {
  const { pathname } = useLocation();
  return (
    <nav>
      <NavLink className="nav-button" activeClassName="selected" exact to="/">
        home
      </NavLink>
      <NavLink
        className="nav-button"
        activeClassName="selected"
        to="/topics"
        isActive={() => {
          return (
            (pathname.startsWith("/topics") ||
              pathname.startsWith("/articles")) &&
            pathname !== "/articles/write"
          );
        }}
      >
        topics
      </NavLink>
      <NavLink className="nav-button" activeClassName="selected" to="/users">
        users
      </NavLink>
      <NavLink
        className="nav-button"
        activeClassName="selected"
        to="/articles/write"
      >
        write
      </NavLink>
      <NavLink
        className="nav-button nav-button-profile"
        activeClassName="selected"
        to="/account"
      >
        <img src={profileImg} className="profile-icon" alt="profile" />
      </NavLink>
    </nav>
  );
};

export default Nav;
