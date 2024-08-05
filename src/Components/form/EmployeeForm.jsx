import React, { useState } from 'react';
import './EmployeeForm.css';
import jivit2 from '../../Assets/admin/jivit-logo 2 (1).svg'

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    middlename: '',
    address: '',
    phoneNumber: '',
    dateOfJoining: '',
    dateOfRetirement: '',
    dateOfBirth: '',
    aadharPanNo: '',
    departmentName: '',
    departmentLocation: '',
    designation: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form data
    console.log('Form Data Submitted:', formData);
  };

  return (
    <>
    <div className="main-heading">
    <img src={jivit2} alt="" />
    <h2> <span>Jivit Healthcare </span>& Medical Services pvt.ltd</h2>
    </div>
      <div className="form">
      <h1>APPLICATION FORM</h1>
        <form onSubmit={handleSubmit} className="employee-form">
          <div className="form-group">
            <label>Full Name:</label>
            <input type="text" name="fullname" value={formData.fullname} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Middle Name:</label>
            <input type="text" name="middlename" value={formData.middlename} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Address:</label>
            <input type="text" name="address" value={formData.address} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Phone Number:</label>
            <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Date of Joining:</label>
            <input type="date" name="dateOfJoining" value={formData.dateOfJoining} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Date of Retirement:</label>
            <input type="date" name="dateOfRetirement" value={formData.dateOfRetirement} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Date of Birth:</label>
            <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Aadhar No.:</label>
            <input type="text" name="aadharPanNo" value={formData.aadharPanNo} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Department Name:</label>
            <input type="text" name="departmentName" value={formData.departmentName} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Department Location:</label>
            <input type="text" name="departmentLocation" value={formData.departmentLocation} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Designation:</label>
            <input type="text" name="designation" value={formData.designation} onChange={handleChange} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default EmployeeForm;
