import React, { useState } from 'react';
import './Family.css';  

const AddFamilyMember = () => {
  const [formData, setFormData] = useState({
    beneficiaryId: '',
    hCardId: '',
    dob: '',
    memberName: '',
    gender: '',
    age: '',
    relation: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add your form submission logic here
  };

  return (
    <>
    <h1 className='ahospital'>FAMILY MEMBER</h1>
    <div className="form">
      <form onSubmit={handleSubmit} className="employee-form">
        <div className="form-group">
          <label htmlFor="beneficiaryId">Beneficiary Id:</label>
          <input
            type="text"
            id="beneficiaryId"
            name="beneficiaryId"
            value={formData.beneficiaryId}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="hCardId">H Card Id:</label>
          <input
            type="text"
            id="hCardId"
            name="hCardId"
            value={formData.hCardId}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="dob">Date of Birth (mm/dd/yyyy):</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="memberName">Member Name:</label>
          <input
            type="text"
            id="memberName"
            name="memberName"
            value={formData.memberName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="relation">Relation:</label>
          <input
            type="text"
            id="relation"
            name="relation"
            value={formData.relation}
            onChange={handleChange}
            required
          />
        </div>

        <input  className='formbutton'  type="submit" value='Add Family Member'/>
      </form>
    </div>
    </>
  );
};

export default AddFamilyMember;
