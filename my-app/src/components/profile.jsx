import React from "react";

function Profile(props){
    return(
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img src={props.img} className="circle-img" alt="avatar_img" />
      </div>
    );
}

export default Profile;