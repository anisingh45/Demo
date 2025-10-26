import React, { useState } from 'react'
import "./CSS/aboutPage.css";

export default function About() {
 function calculateAge(){
  const dob=new Date(document.getElementById('dob').value)
  if(isNaN(dob)) return;
  const currentDate=new Date();
  let days=currentDate.getDate()-dob.getDate();
  let months=currentDate.getMonth()-dob.getMonth();
  let years=currentDate.getFullYear()-dob.getFullYear();
  if(days<0)
  {
    months--;
    days+=new Date(currentDate.getFullYear(),currentDate.getMonth(),0).getDate();
  }
  if(months<0){
    years--;
    months+=12;
  }
  document.getElementById('result').innerHTML =
  `You are <strong>${years}</strong> years, <strong>${months}</strong> months, and <strong>${days}</strong> days old`;

  // document.getElementById('result').textContent="You are "+years +" years, "+months+" months, and  "+days +" days old";

  
 }
  return (
    <main>
    <div className='box'>
      <h2> Age Calculate</h2>
      <input type='date' id='dob'  onChange={calculateAge}></input>
      <div className='result' id='result'>Select you Date Of Birth</div>
    </div>
    </main>
  )
}
