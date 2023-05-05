import React, { useState } from "react";
import "./UserDescription.css";
import ProfilePicture from "../../Pics/ProfilePicture.jpeg";
import Edit from "../../Pics/Edit.png";

function UserDescription() {
  const [image, setImage] = useState(ProfilePicture);
  const [UserName, setUserName] = useState("Shreyas Manoj Nair")
  const [Role, setRole] = useState("Super Admin")
  
  const handleChangeImage = () => {
    setImage(ProfilePicture);
  };
  return (
    <div className="UserDescription">
      <div className="ProfilePicture">
        <div className="ProfilePictureImg">
          <img src={image} alt="Not found"></img>
        </div>
        <button onClick={handleChangeImage} className="EditImg">
          <img src={Edit} alt="Not found"></img>
        </button>
      </div>
      <div>
        <label className="UserNameHeading">{UserName}</label>
        <label className="UserRoleHeading">{Role}</label>
      </div>
    </div>
  );
}

export default UserDescription;
