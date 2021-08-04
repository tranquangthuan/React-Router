import React from "react";
import { Route, Link } from "react-router-dom";

const menus = [
  {
    to: "/",
    lablel: "Home",
    exact: true,
  },
  {
    to: "/about",
    lablel: "About",
    exact: false,
  },
  {
    to: "/contact",
    lablel: "Contact",
    exact: false,
  },
  {
    to: "/product",
    lablel: "Product",
    exact: false,
  },
  {
    to: "/login",
    lablel: "Login",
    exact: false,
  },
];

const MenuLink = ({ lablel, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? "active" : "";
        return (
          <li className={active}>
            <Link to={to}>{lablel}</Link>
          </li>
        );
      }}
    ></Route>
  );
};

class Menu extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <ul className="nav navbar-nav">{this.showMenu()}</ul>
      </nav>
    );
  }

  showMenu = () => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            to={menu.to}
            lablel={menu.lablel}
            activeOnlyWhenExact={menu.exact}
          ></MenuLink>
        );
      });
    }
    return result;
  };
}
export default Menu;
