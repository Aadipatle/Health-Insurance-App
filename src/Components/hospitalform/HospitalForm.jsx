import React, { useState } from 'react';
import './HospitalComponent.css';

const HospitalComponent = () => {
  const [hospitalData, setHospitalData] = useState({
    hospitalName: '',
    doctorName: '',
    speciality: '',
    mobileNo: '',
    address: '',
    pincode: '',
    district: '',
    tehsil: '',
    country: '',
    phoneNo: '',
    emailId: '',
    accountName: '',
    accountNo: '',
    bankName: '',
    ifscCode: '',
    branch: '',
    remark: ''
  });

  let url = 'http://localhost:8080/allcustomers'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHospitalData({
      ...hospitalData,
      [name]: value
    });
  };

  const handleHospital = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(hospitalData),
      });

      if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.json();
      console.log('Success:', result);
  } catch (error) {
      console.error('Error:', error);
  }
  };

  return (
    <>
      <h1 className='ahospital'>Add Hospital</h1>
      <div className="form">
        <form onSubmit={handleHospital} className="employee-form">
          <div className="form-group">
            <label htmlFor="hospitalName">HOSPITAL NAME</label>
            <input
              type="text"
              id="hospitalName"
              name="hospitalName"
              placeholder='Enter Hospital Name'
              value={hospitalData.hospitalName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="doctorName">DOCTOR NAME</label>
            <input
              type="text"
              id="doctorName"
              placeholder='Enter Doctor Name'
              name="doctorName"
              value={hospitalData.doctorName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="speciality">SPECIALITY</label>
            <input
              type="text"
              id="speciality"
              name="speciality"
              placeholder='Enter Speciality'
              value={hospitalData.speciality}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobileNo">MOBILE NO.</label>
            <input
              type="text"
              id="mobileNo"
              placeholder='Enter Mobile Number'
              name="mobileNo"
              value={hospitalData.mobileNo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">ADDRESS</label>
            <input
              type="text"
              id="address"
              placeholder='Enter Hospital Address'
              name="address"
              value={hospitalData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="pincode">PINCODE</label>
            <input
              type="text"
              id="pincode"
              placeholder='Enter Pin Code'
              name="pincode"
              value={hospitalData.pincode}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="district">DISTRICT</label>
            <input
              type="text"
              id="district"
              placeholder='Enter District'
              name="district"
              value={hospitalData.district}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="tehsil">TEHSIL</label>
            <input
              type="text"
              id="tehsil"
              placeholder='Enter Tehsil'
              name="tehsil"
              value={hospitalData.tehsil}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">COUNTRY</label>
            <input
              type="text"
              id="country"
              placeholder='Enter Country'
              name="country"
              value={hospitalData.country}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNo">PHONE NO.</label>
            <input
              type="text"
              id="phoneNo"
              placeholder='Enter Phone Number'
              name="phoneNo"
              value={hospitalData.phoneNo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="emailId">EMAIL ID</label>
            <input
              type="email"
              id="emailId"
              placeholder='Enter Email'
              name="emailId"
              value={hospitalData.emailId}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="accountName">ACCOUNT NAME</label>
            <input
              type="text"
              id="accountName"
              placeholder='Enter Account Name'
              name="accountName"
              value={hospitalData.accountName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="accountNo">ACCOUNT NO.</label>
            <input
              type="text"
              id="accountNo"
              placeholder='Enter Account Number'
              name="accountNo"
              value={hospitalData.accountNo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="bankName">BANK NAME</label>
            <input
              type="text"
              id="bankName"
              placeholder='Enter Bank Name'
              name="bankName"
              value={hospitalData.bankName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="ifscCode">IFSC CODE</label>
            <input
              type="text"
              id="ifscCode"
              placeholder='Enter IFSC Code'
              name="ifscCode"
              value={hospitalData.ifscCode}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="branch">BRANCH</label>
            <input
              type="text"
              id="branch"
              placeholder='Enter Branch Name'
              name="branch"
              value={hospitalData.branch}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="remark">REMARK</label>
            <textarea
              id="remark"
              name="remark"
              placeholder='Enter Remark'
              value={hospitalData.remark}
              onChange={handleChange}
              required
            />
          </div><br />
          <input className='formbutton' type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default HospitalComponent;




