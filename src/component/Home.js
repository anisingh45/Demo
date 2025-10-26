import React from 'react';
import './CSS/style.css';
import userImage from './images/user.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faBell,faUser  } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { PieChart } from '@mui/x-charts/PieChart';
import { LineChart } from '@mui/x-charts/LineChart';





export default function Home() {
  const rows=[{name:"Aniket",company:"PCS",status:"Active"},{name:"vikas",company:"PCS",status:"Active"},
    {name:"Aniket",company:"PCS",status:"Active"},{name:"vikas",company:"PCS",status:"Active"},
    {name:"Aniket",company:"PCS",status:"Active"},{name:"vikas",company:"PCS",status:"Active"},
    
    
   

  ];

  
  return (
    // <div className="home-container">
    //   <div className="welcome-box">
    //     <h1>Welcome Home!</h1>
    //     <p>This is your dashboard. Feel free to explore the features.</p>
    //     <button className="home-button">Get Started</button>
    //   </div>
    // </div>


<div className='dashboard-container'>
  <div className='first-container'>
    <div className='col-8 col1' >
    <h2 >Pipeline</h2>
    <div className='input-container'>
  <FontAwesomeIcon icon={faSearch} style={{ marginRight: '8px', color: '#888' }} />
  <input
    type="text"
    placeholder="Search..."
    style={{ border: 'none', outline: 'none', flex: 1}}
  />
</div>
    </div>
    <div className='col-4 col2' >
    <div className='icon'>
    <FontAwesomeIcon icon={faCog} size="2x" color='white' />


    </div>
    <div className='icon'>
    <FontAwesomeIcon icon={faBell} size="2x" color='white' />

    </div>
    <div className='icon'>
    <img src={userImage} alt='user Image' ></img>
    {/* <FontAwesomeIcon icon={faUser} size="2x" color='white'/> */}

    </div>


    </div>


  </div>
  <div className='second-container'>
    <div className='tab'>
      <table className='table'>
        <thead>
          <tr>
          <th scope="col"> Lead Name</th>
          <th scope="col">Company</th>
          <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((item,index)=>(
            <tr key={index}>
          <td scope="col">{item.name}</td>
          <td scope="col">{item.company}</td>
          <td scope="col">{item.status}</td>
        </tr>
          ))}
        
        </tbody>
      </table>
      
    </div>
    <div className='graph'>
      <h4>Project by Stage</h4>
    <PieChart className='pi'
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'series A' },
            { id: 1, value: 15, label: 'series B' },
            { id: 2, value: 20, label: 'series C' },
          ],
        },
      ]}
      width={300}
      height={300}
    />
    </div>

  </div>
  <div className='third-container'></div>
  <LineChart
      xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }]}
      series={[
        {
          data: [2, 3, 5.5, 8.5, 1.5, 5, 1, 4, 3, 8],
          showMark: ({ index }) => index % 2 === 0,
        },
      ]}
      height={300}
    />

</div>


  )
}
