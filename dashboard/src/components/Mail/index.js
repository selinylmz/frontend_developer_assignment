import React from "react";
import { Link } from "react-router-dom";
import sendICon from "../../assets/send-24px.png";

const ButtonMailto = ({ email }) => {
  return (
    <Link
      to={{ pathname: `mailto:${email}` }}
      target="_blank"
      className="user__button"
    >
      {email}
      <img src={sendICon} alt="" />
    </Link>
  );
};

export default ButtonMailto;
