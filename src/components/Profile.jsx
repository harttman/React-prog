import React from "react";
import cats from "../assets/cats.jpeg";

function Profile() {
  return (
    <div className="profile">
      <img src={cats} />
      <p>Desc</p>
    </div>
  )
}

export default Profile;
