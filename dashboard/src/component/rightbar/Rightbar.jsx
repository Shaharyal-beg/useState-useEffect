import React from 'react'
import './rightbar.css'

const data = [
  { date: "19 Jan", amount:  19000, type: "received",status:"completed"},
  { date: "27 Feb", amount: 19000, type: "transfer",status:"completed"},
  { date: "31 Mar", amount: 25000, type: "received",status:"completed"},
  {date: "2 May", amount: 25000, type: "received",status:"completed"},
  {date: "15 May", amount: 25000, type: "transfer",status:"completed"},
  {date: "30 May", amount: 25000, type: "received",status:"completed"},
]


const Rightbar = () => {
  return (
    <div className='rightbar'>
      <div className='balance'>
        <span style={{fontSize:'23px'}}><h2><b>Rs. 19,000</b></h2></span>
        <span style={{color:'#2b6777'}}>Current Balance</span>
  
        </div>
        <div className="table-container">
      <table>
        <tr>
          <th>Date</th>
          <th>Amount</th>
          <th>Type</th>
          <th>Status</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.date}</td>
              <td>{val.amount}</td>
              <td>{val.type}</td>
              <td className='status'>{val.status}</td>
            </tr>
          )
        })}
      </table>
    </div>
    <div className='ad'>
    </div>
    </div>    
  )
}

export default Rightbar