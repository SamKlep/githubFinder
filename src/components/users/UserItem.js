import React, { Component } from "react";

class UserItem extends Component {
  state = {
    id: "id",
    login: "mojombo",
    avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
    html_url: "https://github.com/mojombo",
  };

  render() {
    const { login, avatar_url, html_ur } = this.state;
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
