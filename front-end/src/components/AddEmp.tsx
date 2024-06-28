//import React from 'react'

import axios from "axios";
import { FormEvent, useState } from "react";

export default function AddEmp() {
  const [userName, setUserName] = useState("");
  const [orgName, setOrgName] = useState("");
  const [salary, setSalary] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    console.log("submit clicked....");
    console.log(userName);
    console.log(orgName);
    console.log(salary);
    console.log(phone);

    const empjson ={userName,orgName,salary,phone};

    axios.post("http://localhost:9090/mtz/emp/add",empjson).then((res)=>{
        console.log(res)
    }
    );
    
  };
  const getUserName = (e: any) => {
    setUserName(e.target.value);
    //console.log("hello");
  };

  const handleOrg = (e: any) => {
    setOrgName(e.target.value);
  };
  const handleSalary = (e: any) => {
    setSalary(e.target.value);
  };
  const handlePhone = (e: any) => {
    setPhone(e.target.value);
  };
  return (
    <div>
      <h2>Add New Employee</h2>

      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            name="userName"
            type="text"
            value={userName}
            onChange={getUserName}
            className="form-control"
            placeholder="enter user name"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Organization Name</label>
          <input
            name="orgname"
            value={orgName}
            type="text"
            onChange={handleOrg}
            className="form-control"
            placeholder="enter org name"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Salary</label>
          <input
            name="salary"
            value={salary}
            type="number"
            onChange={handleSalary}
            className="form-control"
            placeholder="enter salary"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">PhoneNumber</label>
          <input
            name="phone"
            value={phone}
            type="text"
            onChange={handlePhone}
            className="form-control"
            placeholder="enter user phone number"
          />
        </div>
        <div className="col-auto">
          <button onClick={handleSubmit} className="btn btn-primary mb-3">
            Submitt
          </button>
        </div>
      </form>
    </div>
  );
}
