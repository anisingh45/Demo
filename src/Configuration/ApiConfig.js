import React from "react";
import {ApiUrl} from '../Configuration/Url'
import axios from "axios";

function userLogin(data){
    return axios.post(ApiUrl+'userlogin/login',data)
}

function userSignUp(data){
    
    return axios.post(ApiUrl+'user/signup',data)
}

function doLogout(){
    localStorage.removeItem("_token");
    window.location='/';
    
}
function getToken(){
    localStorage.getItem("_token");
}
function isLoggedin(){
    let data=localStorage.getItem("_token");
    if(!data){
        
        return false;
    }else{
        return true
    }
}

export{userLogin,userSignUp,doLogout,getToken,isLoggedin};