import React, { useState } from 'react';
import './EmployeeForm.css';
import jivit2 from '../../Assets/admin/jivit-logo 2 (1).svg'

const EmpForm = () => {
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
    designation: '',
    status: 'pending'
  });

  let url = 'http://localhost:8080/addcustomer'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
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
  // <div className="main-heading">
  // <img src={jivit2} alt="" />
  // <h2> <span>Jivit Healthcare </span>& Medical Services pvt.ltd</h2>
  // </div>
  return (
    <>
      <h1 className='ahospital'>APPLICATION FORM</h1>
      <div className="form">
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
          <input className='formbutton' type="submit" value='Submit' />
        </form>
      </div>
    </>
  );
};

export default EmpForm;

// import React, { useState } from 'react';
// import './EmployeeForm.css';
// // import jivit2 from '../../Assets/admin/jivit-logo 2 (1).svg';

// const EmpForm = () => {
//   const [formData, setFormData] = useState({
//     fullname: '',
//     middlename: '',
//     address: '',
//     phoneNumber: '',
//     dateOfJoining: '',
//     dateOfRetirement: '',
//     dateOfBirth: '',
//     aadharPanNo: '',
//     departmentName: '',
//     departmentLocation: '',
//     designation: '',
//     status: 'pending',
//     familyMembers: [] // Array to store multiple family members
//   });

//   let url = 'http://localhost:8080/addcustomer';

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleFamilyChange = (index, e) => {
//     const { name, value } = e.target;
//     const updatedFamilyMembers = [...formData.familyMembers];
//     updatedFamilyMembers[index][name] = value;
//     setFormData({ ...formData, familyMembers: updatedFamilyMembers });
//   };

//   const addFamilyMember = () => {
//     setFormData({
//       ...formData,
//       familyMembers: [
//         ...formData.familyMembers,
//         {
//           beneficiaryId: '',
//           hCardId: '',
//           memberName: '',
//           gender: '',
//           dob: '',
//           age: '',
//           relation: ''
//         }
//       ]
//     });
//   };

//   const removeFamilyMember = (index) => {
//     const updatedFamilyMembers = formData.familyMembers.filter((_, i) => i !== index);
//     setFormData({ ...formData, familyMembers: updatedFamilyMembers });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     console.log('Form Data:', formData);

//     try {
//         const response = await fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(formData),
//         });

//         if (!response.ok) {
//             throw new Error(`Error: ${response.statusText}`);
//         }

//         const result = await response.json();
//         console.log('Success:', result);

//         setFormData({
//             fullname: '',
//             middlename: '',
//             address: '',
//             phoneNumber: '',
//             dateOfJoining: '',
//             dateOfRetirement: '',
//             dateOfBirth: '',
//             aadharPanNo: '',
//             departmentName: '',
//             departmentLocation: '',
//             designation: '',
//             status: 'pending',
//             familyMembers: [] 
//         });

//     } catch (error) {
//         console.error('Error:', error);
//     }
// };

//   return (
//     <>
//       <h1 className='ahospital'>APPLICATION FORM</h1>
//       <div className="form">
//         <form onSubmit={handleSubmit} className="employee-form">
//           <div className="form-group">
//             <label>Full Name:</label>
//             <input type="text" name="fullname" value={formData.fullname} onChange={handleChange} required />
//           </div>
//           <div className="form-group">
//             <label>Middle Name:</label>
//             <input type="text" name="middlename" value={formData.middlename} onChange={handleChange} />
//           </div>
//           <div className="form-group">
//             <label>Address:</label>
//             <input type="text" name="address" value={formData.address} onChange={handleChange} required />
//           </div>
//           <div className="form-group">
//             <label>Phone Number:</label>
//             <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
//           </div>
//           <div className="form-group">
//             <label>Date of Joining:</label>
//             <input type="date" name="dateOfJoining" value={formData.dateOfJoining} onChange={handleChange} required />
//           </div>
//           <div className="form-group">
//             <label>Date of Retirement:</label>
//             <input type="date" name="dateOfRetirement" value={formData.dateOfRetirement} onChange={handleChange} />
//           </div>
//           <div className="form-group">
//             <label>Date of Birth:</label>
//             <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
//           </div>
//           <div className="form-group">
//             <label>Aadhar No.:</label>
//             <input type="text" name="aadharPanNo" value={formData.aadharPanNo} onChange={handleChange} required />
//           </div>
//           <div className="form-group">
//             <label>Department Name:</label>
//             <input type="text" name="departmentName" value={formData.departmentName} onChange={handleChange} />
//           </div>
//           <div className="form-group">
//             <label>Department Location:</label>
//             <input type="text" name="departmentLocation" value={formData.departmentLocation} onChange={handleChange} />
//           </div>
//           <div className="form-group">
//             <label>Designation:</label>
//             <input type="text" name="designation" value={formData.designation} onChange={handleChange} />
//           </div>

//           <div className="form-group">
//             <button type="button" onClick={addFamilyMember}>Add Family Member</button>
//           </div>

//           {formData.familyMembers.length > 0 && (
//             formData.familyMembers.map((member, index) => (
//               <div key={index} className="family-member-form">
//                 <h3>Family Member {index + 1}</h3>
//                 <div className="form-group">
//                   <label>Beneficiary ID:</label>
//                   <input
//                     type="text"
//                     name="beneficiaryId"
//                     value={member.beneficiaryId}
//                     onChange={(e) => handleFamilyChange(index, e)}
//                     required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>H-Card ID:</label>
//                   <input
//                     type="text"
//                     name="hCardId"
//                     value={member.hCardId}
//                     onChange={(e) => handleFamilyChange(index, e)}
//                     required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Member Name:</label>
//                   <input
//                     type="text"
//                     name="memberName"
//                     value={member.memberName}
//                     onChange={(e) => handleFamilyChange(index, e)}
//                     required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Gender:</label>
//                   <select
//                     name="gender"
//                     value={member.gender}
//                     onChange={(e) => handleFamilyChange(index, e)}
//                     required
//                   >
//                     <option value="">Select Gender</option>
//                     <option value="Male">Male</option>
//                     <option value="Female">Female</option>
//                     <option value="Other">Other</option>
//                   </select>
//                 </div>
//                 <div className="form-group">
//                   <label>Date of Birth:</label>
//                   <input
//                     type="date"
//                     name="dob"
//                     value={member.dob}
//                     onChange={(e) => handleFamilyChange(index, e)}
//                     required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Age:</label>
//                   <input
//                     type="number"
//                     name="age"
//                     value={member.age}
//                     onChange={(e) => handleFamilyChange(index, e)}
//                     required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Relation:</label>
//                   <input
//                     type="text"
//                     name="relation"
//                     value={member.relation}
//                     onChange={(e) => handleFamilyChange(index, e)}
//                     required
//                   />
//                 </div>
//                 <button type="button" onClick={() => removeFamilyMember(index)}>Remove Family Member</button>
//               </div>
//             ))
//           )}

//           <input className='formbutton' type="submit" value="Submit" />
//         </form>
//       </div>
//     </>
//   );
// };

// export default EmpForm;
