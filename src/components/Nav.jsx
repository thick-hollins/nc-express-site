import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import profileImg from "../img/profile.svg";
const Nav = () => {
  const { pathname } = useLocation();
  return (
    <nav>
      <NavLink className="nav__button" activeClassName="selected" exact to="/">
        home
      </NavLink>
      <NavLink
        className="nav__button"
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
      <NavLink className="nav__button" activeClassName="selected" to="/users">
        users
      </NavLink>
      <NavLink
        className="nav__button"
        activeClassName="selected"
        to="/articles/write"
      >
        write
      </NavLink>
      <NavLink
        className="nav__button nav__button--profile"
        activeClassName="nav__button--selected"
        to="/account"
      >
        <img src={profileImg} className="nav__profile-icon" alt="profile" />
      </NavLink>
    </nav>
  );
};

export default Nav;
