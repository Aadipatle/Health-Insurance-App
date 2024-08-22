import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import authorize from '../../Assets/admin/authorize.svg'
import pending from '../../Assets/admin/pending.svg'
import Reject from '../../Assets/admin/reject.svg'
import total from '../../Assets/admin/total.svg'
function Dashboard() {
  const [data, setData] = useState([]);
  const [dpending, setDpending] = useState([]);
  const [autho, setAutho] = useState([]);
  const [reject, setReject] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        let url = 'http://localhost:8080/allcustomers';
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

  useEffect(() => {
    let status = data.filter((e) => e.status === 'pending')
    let authorize = data.filter((e) => e.status === 'Authorized')
    let reject = data.filter((e) => e.status === 'Rejected')
    setDpending(status)
    setAutho(authorize)
    setReject(reject)
  }, [data])
  return (
    <>
      <div className="dashbord">
        <h1 className='h1'>Dashboard</h1>
        <div className="admin-hospital">
          <h5>Hospitalization Request
          </h5>
          <div className="requests">
            <div className="request">
              <h4>Authorized</h4>
              <h6 className='a'>{autho.length}</h6>
              <p>"This transaction has been authorized."</p>
              <img src={authorize} alt="" />
            </div>
            <div className="request">
              <h4>Pending</h4>
              <h6 className='p'>{dpending.length}</h6>
              <p>"The decision is still pending."</p>
              <img src={pending} alt="" />
            </div>
            <div className="request">
              <h4>Reject</h4>
              <h6 className='r'>{reject.length}</h6>
              <p>"The claim was rejected."</p>
              <img src={Reject} alt="" />
            </div>
            <div className="request">
              <h4>Total</h4>
              <h6 className='t'>{data.length}</h6>
              <p>"The total number of requests.“</p>
              <img src={total} alt="" />
            </div>
          </div>
        </div>
        <div className="admin-hospital">
          <h5>Health CheckUp
          </h5>
          <div className="requests">
            <div className="request">
              <h4>Authorized</h4>
              <h6 className='a'>17</h6>
              <p>"This transaction has been authorized."</p>
              <img src={authorize} alt="" />
            </div>
            <div className="request">
              <h4>Pending</h4>
              <h6 className='p'>15</h6>
              <p>"The decision is still pending."</p>
              <img src={pending} alt="" />
            </div>
            <div className="request">
              <h4>Reject</h4>
              <h6 className='r'>1</h6>
              <p>"The claim was rejected."</p>
              <img src={Reject} alt="" />
            </div>
            <div className="request">
              <h4>Total</h4>
              <h6 className='t'>15</h6>
              <p>"The total number of requests.“</p>
              <img src={total} alt="" />
            </div>
          </div>
        </div>
        <div className="admin-hospital">
          <h5>Customers
          </h5>
          <div className="requests">
            <div className="request">
              <h4>Authorized</h4>
              <h6 className='a'>17</h6>
              <p>"This transaction has been authorized."</p>
              <img src={authorize} alt="" />
            </div>
            <div className="request">
              <h4>Pending</h4>
              <h6 className='p'>15</h6>
              <p>"The decision is still pending."</p>
              <img src={pending} alt="" />
            </div>
            <div className="request">
              <h4>Reject</h4>
              <h6 className='r'>1</h6>
              <p>"The claim was rejected."</p>
              <img src={Reject} alt="" />
            </div>
            <div className="request">
              <h4>Total</h4>
              <h6 className='t'>15</h6>
              <p>"The total number of requests.“</p>
              <img src={total} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard