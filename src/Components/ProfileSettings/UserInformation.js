import React, { useState } from "react";
import "./UserInformation.css";
import Button from "../Button";
import "./UserInformation.css";
import Edit from "../../Pics/Edit.png";
import ChangePassword from "./ChangePassword";

function UserInformation() {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [firstName, setFirstName] = useState("Shreyas Manoj");
  const [lastName, setLastName] = useState("Nair");
  const [userRole, setUserRole] = useState("Data scientist");
  const [mobileNumber, setMobileNumber] = useState("9175945572");
  const [email, setEmail] = useState("nairsm_1@rknec.edu");
  const [department, setDepartment] = useState("ML Ops");
  const [businessUnit, setBusinessUnit] = useState("Product Development");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  const handleUserRoleChange = (event) => {
    setUserRole(event.target.value);
  };
  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };
  const handleBusinessUnitChange = (event) => {
    setBusinessUnit(event.target.value);
  };

  return (
    <div className="UserInformation">
      <div className="MainForm">
        <div className="Row1">
          <div className="Col1">
            <label>First Name</label>
            <input
              type="text"
              defaultValue={firstName}
              onChange={handleFirstNameChange}
            />
          </div>
          <div className="Col2">
            <label>Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={handleLastNameChange}
            />
          </div>
        </div>
        <div className="Row2">
          <div className="Col1">
            <label>User Role</label>
            <input
              type="text"
              value={userRole}
              onChange={handleUserRoleChange}
            />
          </div>
          <div className="Col2">
            <label>Mobile Number</label>
            <input
              type="text"
              value={mobileNumber}
              onChange={handleMobileNumberChange}
            />
          </div>
        </div>
        <div className="Row3">
          <div className="OnlyOneCol">
            <label>Email ID</label>
            <input type="text" value={email} onChange={handleEmailChange} />
          </div>
        </div>
        <div className="Row4">
          <div className="Col1">
            <label>Department</label>
            <input
              type="text"
              value={department}
              onChange={handleDepartmentChange}
            />
          </div>
          <div className="Col2">
            <label>Business Unit</label>
            <input
              type="text"
              value={businessUnit}
              onChange={handleBusinessUnitChange}
            />
          </div>
        </div>
        <div className="ChangePassword">
          <a href="#" onClick={handleClick}>
            Change Password?
          </a>
          {showModal && <ChangePassword onClose={handleCloseModal} />}
        </div>
        <div className="SubmitButton">
          <Button name="Save"></Button>
        </div>
      </div>
      <div className="EditButton">
        <Button name="Edit">
          <img src={Edit} alt="Not Found"></img>
        </Button>
      </div>
    </div>
  );
}

export default UserInformation;
