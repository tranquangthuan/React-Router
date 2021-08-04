import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Product from "./components/Product";
import ProductDetail from "./components/ProductDetail";
import Login from "./components/Login";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />,
  },
  {
    path: "/about",
    exact: false,
    main: () => <About />,
  },
  {
    path: "/contact",
    exact: true,
    main: () => <Contact />,
  },
  {
    path: "/product",
    exact: true,
    main: ({ match, location }) => (
      <Product match={match} location={location} />
    ),
  },
  {
    path: "/product/:name",
    exact: false,
    main: ({ match }) => <ProductDetail match={match} />,
  },
  {
    path: "/login",
    exact: false,
    main: ({ location }) => <Login location={location} />,
  },
  {
    path: "",
    exact: true,
    main: () => <NotFound />,
  },
];

export default routes;
