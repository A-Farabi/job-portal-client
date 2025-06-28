import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import loginAnimation from "../assets/login_Animation - 1750916931289.json";
import AuthContext from '../Context/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

    const {loginUser} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    console.log('in login page', location);
    const from = location.state || "/"

    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        loginUser(email, password)
        .then((result)=>{
            console.log(result.user);
            navigate(from)
        })
        .catch((error)=>{
            console.log(error.message);
        })
    }

    return (
        <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex">
          <div className="text-center lg:text-left">
            <Lottie animationData={loginAnimation}></Lottie>
          </div>
          <form
            onSubmit={handleLogin}
            className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl"
          >
            <div className="card-body">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
};

export default Login;