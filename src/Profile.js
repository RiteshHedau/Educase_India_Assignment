import React from "react";
import "./Profile.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

const Profile = () => {
  return (
    <div className="profile-page">
        <div className="prf-center">
      <div className="accSetting">
        <h2 >Account Setting</h2>
      </div>
      <div className="profile-block">
        <div className="profile-circle">
          <div className="prof-small-circle">
          <i className="bi bi-camera"></i>
          </div>
        </div>
        <div className="profile-des">
          <h3>Marry Doe</h3>
          <p>Marry@Gmail.com</p>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
        doloremque praesentium sunt deserunt debitis numquam.
      </p>
      <hr />
    </div>
    </div>
  );
};

export default Profile;
