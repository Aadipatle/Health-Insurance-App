import React, { useEffect, useState } from 'react';
import './EmpList.css'
function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            try {
                let url = 'http://localhost:3001/allcustomers';
                let response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                let emp = await response.json();
                setData(emp);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        getData();
    }, []);
console.log(data)
    function view(id){
        console.log(id)
    }

    const updateStatus = async (id, status) => {
        try {
            let url = `http://localhost:3001/customer/${id}/status`;
            let response = await fetch(url, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ status })
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            let updatedCustomer = await response.json();
            setData(data.map(customer => customer._id === id ? updatedCustomer.data : customer));
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };
    return (
        <>
        <h1>Customer List</h1>
        <div className="container">
       
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Phone Number</th>
                        <th>Date of Joining</th>
                        <th>Date of Retirement</th>
                        <th>Aadhar No</th>
                        <th>Department Name</th>
                        <th>Action</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.fullname} {item.middlename}</td>
                           
                            <td>{item.phoneNumber}</td>
                            <td>{new Date(item.dateOfJoining).toLocaleDateString()}</td>
                            <td>{new Date(item.dateOfRetirement).toLocaleDateString()}</td>
                            <td>{item.aadharPanNo}</td>
                            <td>{item.departmentName}</td>
                            <td><button onClick={()=>view(item._id)}>{item.status}</button></td>
                            <td>
                            <button onClick={() => updateStatus(item._id, 'Authorized')}>Authorize</button>
                            <button onClick={() => updateStatus(item._id, 'Rejected')}>Reject</button>
                        </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    </>
);
}


export default App;
