import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../../store/actions";
import "./index.scss";

const Header = () => {
  const dispatch = useDispatch();
  const navMenu = useSelector((state) => state.sidebar);

  return (
    <nav className={navMenu ? "navbar active" : "navbar"}>
      <span>Merhaba Deniz, Hos Geldin !</span>
      <div className="navbar-search">
        <input className="navbar-search__input" type="text" />
        <div className="navbar-search__btn">&#x1F50E;&#xFE0F;</div>
      </div>
      <button
        className="navbar__btn"
        onClick={() => dispatch(toggleSidebar(!navMenu))}
      >
        <span></span>
      </button>
    </nav>
  );
};

export default Header;
