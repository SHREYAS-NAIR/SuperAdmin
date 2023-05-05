import React, { useEffect } from "react";
import TickSign from "../../Pics/TickSign.png";
import './PasswordChangedPopup.css'

function PasswordChangedPopup({ onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000); // display popup for 3 seconds
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="PasswordChangedPopupmodal-container">
      <div className="PasswordChangedPopupmodal-content">
        <div className="PasswordChangedPopup">
            <img src={TickSign} alt="Not Found"></img>
            <p>Your password</p>
            <p>changed successfully</p>
        </div>
      </div>
    </div>
  );
}

export default PasswordChangedPopup;
