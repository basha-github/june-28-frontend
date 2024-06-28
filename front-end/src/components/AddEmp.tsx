//import React from 'react'

export default function AddEmp() {
  return (
    <div>

      <h2>Add New Employee</h2>

      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            name="userName"
            type="text"
            className="form-control"
            placeholder="enter user name"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Organization Name</label>
          <input
            name="orgname"
            type="text"
            className="form-control"
            placeholder="enter org name"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Salary</label>
          <input
            name="salary"
            type="number"
            className="form-control"
            placeholder="enter salary"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">PhoneNumber</label>
          <input
            name="phone"
            type="text"
            className="form-control"
            placeholder="enter user phone number"
          />
        </div>
        <div className="col-auto">
          <button className="btn btn-primary mb-3">
            Submitt
          </button>
        </div>
    </form>


    </div>
  )
}
