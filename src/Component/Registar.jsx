import React, { useState } from 'react';
import RegistarAnimation from "../assets/register animation.json"
import Lottie from 'lottie-react';

const Registar = () => {

const [passwordError, setPasswordError] = useState('')

const handleRegistar = e => {
  e.preventDefault();
  const form = e.target;
  const email = form.email.value;
  const password = form.password.value;

  if (password.length < 6) {
    setPasswordError(alert('must be at least 6 characters'))
    return
  }

  setPasswordError('')
  form.reset()

  console.log(email, password);
}

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex">
    <div className="text-center lg:text-left">
      <Lottie animationData={RegistarAnimation}></Lottie>
    </div>
    <form onSubmit={handleRegistar} className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Registar now!</h1>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Registar</button>
        </fieldset>
      </div>
    </form>
  </div>
</div>
        </div>
    );
};

export default Registar;