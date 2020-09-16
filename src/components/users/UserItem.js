import React, { Component } from "react";

class UserItem extends Component {
  render() {
    const { login, avatar_url, html_ur } = this.props.user;

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
  }
}

export default UserItem;
