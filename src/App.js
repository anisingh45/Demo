import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Login from './component/Login';
import Signup from './component/Signup';
import "./component/CSS/style.css"
import Dashboard from './component/Dashboard';
import Home from './component/Home';
import Service from './component/Service';
import About from './component/About';
import Contact from './component/Contact';
import ProtectedRoute from './component/ProtectedRoute';


function App() {




    return (
        <Router>
            <Routes>
                <Route path='/' element={<Login />}> </Route>
                <Route path='/signup' element={<Signup />} ></Route>
                
                <Route path='/dashboard/*' element={
                    <ProtectedRoute>
                    <Dashboard />
                    </ProtectedRoute>
                    }>
                    <Route index element={<Home />} />
                    <Route path='home' element={<Home />} />
                    <Route path='contact' element={<Contact/>}/>
                    <Route path='service' element={<Service/>} />
                    <Route path='about' element={<About/>}/>
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                   
                </Route>
                
            </Routes>
        </Router>


    );
}

export default App;
