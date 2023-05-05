import React, { useState } from "react";
import "./ChangePassword.css";
import Lock from "../../Pics/Lock.png";
import lockedIcon from "../../Pics/lockIcon.png";
import unlockedIcon from "../../Pics/unlockIcon.png";
import Button from "../Button";
import PasswordChangedPopup from './PasswordChangedPopup'


function ChangePassword({ onClose }) {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [oldPasswordVisible, setOldPasswordVisible] = useState(false);
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const [isPasswordChanged, setIsPasswordChanged] = useState(false);

  const toggleOldPasswordVisibility = () => {
    setOldPasswordVisible((prev) => !prev);
  };

  const toggleNewPasswordVisibility = () => {
    setNewPasswordVisible((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible((prev) => !prev);
  };

  const handleChangePassword = (e) => {
    e.preventDefault();

    if(!oldPassword){
      alert("Old password cannot be empty.");
      return;
    }

    // Check if new password is empty
    if(!newPassword){
      alert("New password and confirm password cannot be empty.");
      return;
    }
    
    // Check if old password and new password are same
    if (oldPassword === newPassword) {
      alert("New password cannot be same as old password");
      return;
    }

    // Check if new password and confirm password are same
    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match");
      return;
    }
    
    // Perform API call to change password
    // ...
  
    // If the password change is successful, set isPasswordChanged state to true
    setIsPasswordChanged(true);
  };
  

  const handleCloseModal = () => {
    onClose();
  };

  return (
    <>
      <div className="modal-container">
        <div className="modal-content">
          <div className="ChangePasswordHeading">
            <img src={Lock} alt="Not Found"></img>
            <label>Change Password</label>
          </div>
          <form onSubmit={handleChangePassword}>
            <div className="PwRow1">
              <div className="form-group1">
                <div className="Labels">
                  <label htmlFor="oldPassword">Old Password</label>
                </div>
                <div className="input-group">
                  <input
                    type={oldPasswordVisible ? "text" : "password"}
                    id="oldPassword"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                  />
                  <img
                    src={oldPasswordVisible ? unlockedIcon : lockedIcon}
                    alt="Password visibility toggle"
                    className="password-toggle-icon"
                    onClick={toggleOldPasswordVisibility}
                  />
                </div>
              </div>
            </div>
            <div className="PwRow2">
              <div className="form-group2">
                <div className="Labels">
                  <label htmlFor="newPassword">New Password</label>
                </div>
                <div className="input-group">
                  <input
                    type={newPasswordVisible ? "text" : "password"}
                    id="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  <img
                    src={newPasswordVisible ? unlockedIcon : lockedIcon}
                    alt="Password visibility toggle"
                    className="password-toggle-icon"
                    onClick={toggleNewPasswordVisibility}
                  />
                </div>
              </div>
              <div className="form-group3">
                <div className="Labels">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                </div>
                <div className="input-group">
                  <input
                    type={confirmPasswordVisible ? "text" : "password"}
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <img
                    src={confirmPasswordVisible ? unlockedIcon : lockedIcon}
                    alt="Password visibility toggle"
                    className="password-toggle-icon"
                    onClick={toggleConfirmPasswordVisibility}
                  />
                </div>
              </div>
            </div>
            <div className="button-group">
              <Button
                type="submit"
                name="Save"
                bgColor="#212B46"
                onClick={handleCloseModal}
              ></Button>
            </div>
          </form>
        </div>
      </div>
      {/* Popup for password changed successfully */}
      {isPasswordChanged && <PasswordChangedPopup onClose={onClose} />}
    </>
  );
}

export default ChangePassword;
