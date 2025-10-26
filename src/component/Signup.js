import React from 'react';
import { useState } from 'react';
import {userSignUp} from '../Configuration/ApiConfig';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [gender, setgender] = useState('');
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [mobile, setmobile] = useState(0);
  const [age, setage] = useState(0);
  let navigate=useNavigate();
  
  

  
  const Signupdata= async (e)=>{
    e.preventDefault();
    const userData={name,email,password,mobile,age,gender};
    console.log(`User data: Name=${userData.name}, Email=${userData.email}, Password=${userData.password}, Gender=${userData.gender}, Age=${userData.age}`);
    const response = await userSignUp(userData);
    console.log('Response from API:', response);

      if (response.data.error==0) {
        alert('Signup Successfull: ' + (response.data.message ));
        setname('');
        setemail('');
        setpassword('');
        setgender('');
        setmobile('');
        setage('');
        navigate("/");
      } else {
        alert('Signup failed: ' + (response.data.message || 'Unknown error'));
      }


    //BY using axios
    // try{
    //   const response = await axios.post('http://localhost:3030/user/signup', userData);
    // console.log(response.data);
    // alert('Signup successful!');

    // }catch(error){
    //   console.error('Errro is', error);
    //   alert('Something Went Wrong with Data');
    // }

    //by using fetch
    // try {
    //   const response = await fetch('http://localhost:3030/user/signup', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(userData),
    //   });

    //   const data = await response.json(); // Get response from API
    //   console.log('Response from API:', data);

    //   if (data.error==0) {
    //     alert('Signup Successfull: ' + (data.message ));
    //     setname('');
    //     setemail('');
    //     setpassword('');
    //     setgender('');
    //     setmobile('');
    //     setage('');
    //   } else {
    //     alert('Signup failed: ' + (data.message || 'Unknown error'));
    //   }
    // } catch (error) {
    //   console.error('Error sending data:', error);
    //   alert('Something went wrong. Please try again.');
    // }

  }
  return (

    <section className="background-radial-gradient overflow-hidden" style={{ height: '100vh' }}>


      <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
        <div className="row gx-lg-5 align-items-center mb-5">
          <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
            <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: 'hsl(218, 81%, 95%)' }}
            >
              The best offer <br />
              <span style={{ color: 'hsl(218, 81%, 75%)' }}
              >for your business</span>
            </h1>
            <p className="mb-4 opacity-70" style={{ color: 'hsl(218, 81%, 85%)' }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Temporibus, expedita iusto veniam atque, magni tempora mollitia
              dolorum consequatur nulla, neque debitis eos reprehenderit quasi
              ab ipsum nisi dolorem modi. Quos?
            </p>
          </div>

          <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
            <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
            <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

            <div className="card bg-glass">
              <div className="card-body px-4 py-5 px-md-5">
                <form onSubmit={Signupdata}>

                  <div data-mdb-input-init className="form-outline mb-1">
                    <label className="form-label" for="form3Example1">Name</label>
                    <input type="text" id="form3Example1" className="form-control" placeholder='Name' value={name} onChange={(e)=>setname(e.target.value)}/>

                  </div>

                  <div data-mdb-input-init className="form-outline mb-1">
                    <label className="form-label" for="form3Example2" >Email address</label>
                    <input type="email" id="form3Example2" className="form-control" placeholder='Email address' value={email} onChange={(e)=>setemail(e.target.value)}/>

                  </div>

                  <div data-mdb-input-init className="form-outline mb-1">
                    <label className="form-label" for="form3Example3" >Password</label>
                    <input type="password" id="form3Example3" className="form-control" placeholder='Password' value={password} onChange={(e)=>setpassword(e.target.value)}/>

                  </div>
                  <div data-mdb-input-init className="form-outline mb-1">
                    <label className="form-label" for="form3Example4" >Gender</label>
                    <select
                      className="form-control"
                      id="form3Example4"
                      value={gender}
                      onChange={(e)=>setgender(e.target.value)}
                    >
                      <option value="">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <div data-mdb-input-init class="form-outline">
                        <label class="form-label" for="form3Example5" >Mobile</label>
                        <input type="number" id="form3Example5" class="form-control" placeholder='Mobile' value={mobile} onChange={(e)=>setmobile(e.target.value)}/>

                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div data-mdb-input-init class="form-outline">
                        <label class="form-label" for="form3Example6">Age</label>
                        <input type="number" id="form3Example6" class="form-control" placeholder='Age' value={age} onChange={(e)=>setage(e.target.value)}/>

                      </div>
                    </div>
                  </div>
                 

                  <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">
                    Sign up
                  </button>


                  <div className="text-center">
                    <p>or sign up with:</p>
                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                      <i class="fa-brands fa-facebook"></i>
                    </button>

                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-google"></i>
                    </button>

                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-twitter"></i>
                    </button>

                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-github"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
