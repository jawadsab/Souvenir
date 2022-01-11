import React,{useState} from 'react'
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import {signup} from "../../actions/auth.js";
import "./styles.css";


const initailState = {
    firstName:"",
    lastName:"",
    email:"",
    password:""
}
const Auth = () => {
    const [isSignup,setIsSignup] = useState(false); 
    const [formData,setFormdata] = useState(initailState);
    const dispatch = useDispatch();
    const navigate = useNavigate();
   

    const {firstName,lastName,email,password} = formData;
    const handleSubmit = (event) => {
        event.preventDefault();
        if(isSignup) {
            console.log("Sign up user");
            dispatch(dispatch(signup(formData,navigate)));
        } else {
            console.log("Sign in user");
        }
        setFormdata(initailState)
    }
    const handleChange = (event) => {
        setFormdata({...formData,[event.target.name]:event.target.value});
    }
    return (
        <div className="auth-container">
            <form autoComplete='off' onSubmit={handleSubmit}>
                <h2>{isSignup ? 'Sign up':"Sign in"}</h2>
                {
                    isSignup && (
                        <div className="group">
                    <div className="ip-group">
                        <input
                        onChange={handleChange}
                        value={firstName}
                        className="ip"
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder=" "/>
                        <label className="ip-label" htmlFor="firstName">First Name</label>
                    </div>
                    <div className="ip-group">
                        <input
                        onChange={handleChange}
                        value={lastName}
                        className="ip"
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder=" "/>
                        <label className="ip-label" htmlFor="lastName">Last Name</label>
                    </div>
                </div>
                    )
                }
                
                <div className="ip-group">
                    <input onChange={handleChange} value={email} className="ip" id="email" name="email" type="email" placeholder=" " />
                    <label className="ip-label" htmlFor="email">Email</label>
                </div>
                <div className="ip-group">
                    <input onChange={handleChange} value={password} className="ip" id="password" name="password" type="password" placeholder=" " />
                    <label className="ip-label" htmlFor="password">Password</label>
                </div>
                <button className="form-submit">{isSignup ?  "sign up":"sign in"}</button>
               {
                   !isSignup ?  <p onClick={() => setIsSignup(!isSignup)} className="account">Don't have an account. Sign up</p> : <p onClick={() => setIsSignup(!isSignup)} className="account">Have an account. Sign in</p>  
               }
            </form>
        </div>
    )
}

export default Auth;
