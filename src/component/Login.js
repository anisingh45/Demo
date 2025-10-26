import React, { useState } from 'react';
import './CSS/style.css';
import myImage from './images/pcsmcpl.jpg';
import { userLogin } from '../Configuration/ApiConfig';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate=useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const loginData = async (e) => {
    e.preventDefault();
    const loginDetails = { username, password };
    console.log("Login Details : " + loginDetails);

    try {
      const response = await userLogin(loginDetails);
      console.log(response.data);
      if (response.data.error == 0) {
        localStorage.setItem("_token",response.data.tokenData);
        alert(response.data.message);
        navigate("/dashboard");
        window.location.reload();
      }
      else {
        alert(response.data.message);
      }

    } catch (error) {
      console.error("Something Went Wrong :", error);
    }

  }

  return (

    <section className="background-radial-gradient overflow-hidden" style={{ height: '100vh' }}>
      <div className="container py-0 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">

                    <div className="text-center">
                      <img src={myImage} alt="logo"
                        style={{ width: '120px' }} />
                      <h4 className="mt-1 mb-5 pb-1">We are The PCSMCPL Team</h4>
                    </div>

                    <form onSubmit={loginData}>
                      <p>Please login to your account</p>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <label className="form-label" for="form2Example11">Username</label>
                        <input type="email" id="form2Example11" className="form-control"
                          placeholder="email address" value={username} onChange={(e) => setUsername(e.target.value)} />

                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <label className="form-label" for="form2Example22">Password</label>
                        <input type="password" id="form2Example22" className="form-control" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                      </div>

                      <div className="text-center pt-1 mb-5 pb-1">
                        <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">Login</button> <br />
                        <a className="text-muted" href="#!">Forgot password?</a>
                      </div>


                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Don't have an account?</p>
                        <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-danger"><a href="/signup" className="nav-link" >Sign-Up</a></button>
                      </div>


                    </form>

                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">We are more than just a company</h4>
                    <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



  )
}
