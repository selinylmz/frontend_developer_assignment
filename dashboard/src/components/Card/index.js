import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
const Card = ({ children, title, more }) => {
  return (
    <div className="card">
      <h2 className="card__title">{title}</h2>
      {children}
      {more && (
        <Link className="card__more" to={more}>
          Daha Fazla
        </Link>
      )}
    </div>
  );
};

export default Card;
