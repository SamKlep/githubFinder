import React from "react";
import PropTypes from "prop-types";

const UserItem = ({ user: { login, avatar_url, html_ur } }) => {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        className="round-img"
        style={{ width: "60px" }}
        alt=""
      />

      <h3>{login}</h3>

      <a href={html_ur} className="btn btn-dark btn-am my-1">
        More
      </a>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
