import React from "react";
import "./index.scss";
import { SidebarData } from "./SidebarData";
import SidebarLogo from "../../assets/Linktera_Ailem_Logo@2x.png";
import CardProfile from "../CardProfile";
import Exit from "../Exit";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const LeftSide = () => {
  const navMenu = useSelector((state) => state.sidebar);
  return (
    <>
      <div className={navMenu ? "sidebar active" : "sidebar"}>
        <img src={SidebarLogo} className="sidebar-logo" alt="linktera logo" />
        <CardProfile />
        <div className="sidebar-list">
          {SidebarData.map((e, i) => {
            return (
              <details key={i}>
                <summary key={i}>
                  {e.title}
                </summary>
                <nav>
                  {e.childArray.map((item, index) => (
                    <Link
                      key={index}
                      to={{ pathname: item.path }}
                      target="_blank"
                    >
                      {item.title}
                    </Link>
                  ))}
                </nav>
              </details>
            );
          })}
        </div>
        <Exit></Exit>
      </div>
    </>
  );
};

export default LeftSide;
