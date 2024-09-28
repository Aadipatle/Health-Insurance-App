import React, { useState } from 'react';
import './Home.css'; // Your existing CSS
import { Link } from 'react-router-dom';

const HospitalHome = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    policyHolderName: '',
    relation: '',
    cardNo: '',
    attendingRelative: '',
    checkupDate: '',
    familyPhysician: '',
    physicianName: '',
    physicianContact: '',
    treatingDoctor: '',
    doctorName: '',
    doctorQualification: '',
    doctorContact: '',
    otherDetails: '',
    images: []
  });

  const [allForms, setAllForms] = useState([]);
  const [showMessageBox, setShowMessageBox] = useState(false); 
  const [hospitalName, setHospitalName] = useState(''); 
  const [adminMessage, setAdminMessage] = useState(''); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 10) {
      alert('You can upload a maximum of 10 images.');
    } else {
      setFormData({ ...formData, images: files });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAllForms([...allForms, formData]);
    setFormData({
      patientName: '',
      policyHolderName: '',
      relation: '',
      cardNo: '',
      attendingRelative: '',
      checkupDate: '',
      familyPhysician: '',
      physicianName: '',
      physicianContact: '',
      treatingDoctor: '',
      doctorName: '',
      doctorQualification: '',
      doctorContact: '',
      otherDetails: '',
      images: []
    });
    alert("Form submitted successfully!");
  };

  const handleTicketClick = () => {
    setShowMessageBox(true); 
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (hospitalName.trim() && adminMessage.trim()) {
      alert(`Message to admin from ${hospitalName}: ${adminMessage}`); 
      setShowMessageBox(false); 
      setHospitalName(''); 
      setAdminMessage('');
    } else {
      alert("Please fill in both fields before sending.");
    }
  };

  return (
    <>
      <header>
        <div className="hopitalName">
          <h1>ABC Hospital</h1>
        </div>
        <div className="ticket">
          <Link>Previous List</Link>
          <button onClick={handleTicketClick}>Ticket</button> {/* Ticket button */}
        </div>
      </header>
      <div className="dashboard">
        <h2>New CheckUp</h2>
        <form onSubmit={handleSubmit} className="form-container">
          <div className="form-group">
            <label>Patient Name:</label>
            <input type="text" name="patientName" value={formData.patientName} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label>Policy Holder Name:</label>
            <input type="text" name="policyHolderName" value={formData.policyHolderName} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label>Relation with Policy Holder:</label>
            <input type="text" name="relation" value={formData.relation} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label>Card No.:</label>
            <input type="text" name="cardNo" value={formData.cardNo} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label>Contact No. of Attending Relative:</label>
            <input type="text" name="attendingRelative" value={formData.attendingRelative} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label>Checkup Date:</label>
            <input type="date" name="checkupDate" value={formData.checkupDate} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label>Family Physician:</label>
            <input type="text" name="familyPhysician" value={formData.familyPhysician} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label>Physician Name:</label>
            <input type="text" name="physicianName" value={formData.physicianName} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label>Physician Contact No.:</label>
            <input type="text" name="physicianContact" value={formData.physicianContact} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label>Doctor Name:</label>
            <input type="text" name="doctorName" value={formData.doctorName} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label>Doctor Qualification:</label>
            <input type="text" name="doctorQualification" value={formData.doctorQualification} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label>Doctor Contact No.:</label>
            <input type="text" name="doctorContact" value={formData.doctorContact} onChange={handleInputChange} required />
          </div>
          <div className="form-group full-width">
            <label>Other Details:</label>
            <textarea name="otherDetails" value={formData.otherDetails} onChange={handleInputChange}></textarea>
          </div>
          <div className="form-group full-width">
            <label>Upload Images (Max 10):</label>
            <input type="file" name="images" multiple onChange={handleImageChange} accept="image/*" />
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>

        <h2>Previous CheckUp</h2>
        {allForms.length > 0 ? (
          <table className="data-table">
            <thead>
              <tr>
                <th>Patient Name</th>
                <th>Policy Holder Name</th>
                <th>Relation</th>
                <th>Card No.</th>
                <th>Attending Relative</th>
                <th>Checkup Date</th>
                <th>Physician Name</th>
                <th>Doctor Name</th>
                <th>Doctor Contact</th>
                <th>Images</th>
              </tr>
            </thead>
            <tbody>
              {allForms.map((data, index) => (
                <tr key={index}>
                  <td>{data.patientName}</td>
                  <td>{data.policyHolderName}</td>
                  <td>{data.relation}</td>
                  <td>{data.cardNo}</td>
                  <td>{data.attendingRelative}</td>
                  <td>{data.checkupDate}</td>
                  <td>{data.physicianName}</td>
                  <td>{data.doctorName}</td>
                  <td>{data.doctorContact}</td>
                  <td>
                    {data.images.map((image, idx) => (
                      <img key={idx} src={URL.createObjectURL(image)} alt="uploaded" width="50" />
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No data submitted yet.</p>
        )}
      </div>

      {showMessageBox && (
        <div className="modal">
          <div className="modal-content">
            <form onSubmit={handleSendMessage}>
              <div className="form-group">
                <label>Hospital Name:</label>
                <input
                  type="text"
                  placeholder="Enter hospital name"
                  value={hospitalName}
                  onChange={(e) => setHospitalName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Message:</label>
                <textarea
                  placeholder="Enter your message"
                  value={adminMessage}
                  onChange={(e) => setAdminMessage(e.target.value)}
                  required
                />
              </div>
              <div className="modal-actions">
                <button type="submit">Send</button>
                <button type="button" onClick={() => setShowMessageBox(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default HospitalHome;
