import React from "react";
import "./index.scss";

function User({ children, firstName, lastName, email, avatar }) {
  return (
    <div className="user">
      <img
        className="user__image"
        src={avatar}
        alt={firstName + "-" + lastName}
      />
      <div className="user-info">
        <h4 className="user-info__name">
          {firstName} {lastName}
        </h4>
        <p className="user-info__email">{email}</p>
        {children}
      </div>
    </div>
  );
}

export default User;
