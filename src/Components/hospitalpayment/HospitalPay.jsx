
import React, { useState } from 'react';

const HospitalPay = () => {
  const [hospitalPay, setHospitalPay] = useState({
    hospitalId: '',
    bankName: '',
    paymentMode: '',
    transactionNo: '',
    bankLocation: '',
    branch: '',
    checkNo: '',
    amount: '',
    note: '',
    details: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHospitalPay({
      ...hospitalPay,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form data
    console.log('Form Data Submitted:', hospitalPay);
  };
  // <div className="main-heading">
  // <img src={jivit2} alt="" />
  // <h2> <span>Jivit Healthcare </span>& Medical Services pvt.ltd</h2>
  // </div>
  return (
    <>
      <h1 className='ahospital'>Hospital Payments</h1>
      <div className="form">
        <form onSubmit={handleSubmit} className="employee-form">
        <div className="form-group">
        <label htmlFor="hospitalId">HOSPITAL ID</label>
        <input
          type="text"
          id="hospitalId"
          name="hospitalId"
          value={hospitalPay.hospitalId}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="bankName">BANK NAME</label>
        <input
          type="text"
          id="bankName"
          name="bankName"
          value={hospitalPay.bankName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="paymentMode">PAYMENT MODE</label>
        <input
          type="text"
          id="paymentMode"
          name="paymentMode"
          value={hospitalPay.paymentMode}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="transactionNo">TRANSACTION NO.</label>
        <input
          type="text"
          id="transactionNo"
          name="transactionNo"
          value={hospitalPay.transactionNo}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="bankLocation">BANK LOCATION</label>
        <input
          type="text"
          id="bankLocation"
          name="bankLocation"
          value={hospitalPay.bankLocation}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="branch">BRANCH</label>
        <input
          type="text"
          id="branch"
          name="branch"
          value={hospitalPay.branch}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="checkNo">CHECK NO.</label>
        <input
          type="text"
          id="checkNo"
          name="checkNo"
          value={hospitalPay.checkNo}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="amount">AMOUNT</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={hospitalPay.amount}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="note">NOTE</label>
        <textarea
          id="note"
          name="note"
          value={hospitalPay.note}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="details">DETAILS</label>
        <textarea
          id="details"
          name="details"
          value={hospitalPay.details}
          onChange={handleChange}
          required
        />
      </div>
          <input className='formbutton' type="submit" value='Submit'/>
        </form>
      </div>
    </>
  );
};

export default HospitalPay;
