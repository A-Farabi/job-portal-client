import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../Context/AuthContext";

const Navbar = () => {

const {user, signOutUser} = useContext(AuthContext)

  const links = (
    <>
      <Link to='/'>
        <a>Home</a>
      </Link>
      <Link to="/myApplications">
        <a>My Applications</a>
      </Link>
      <li>
        <a>Item 3</a>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">Job Portal</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-5">

          {
            user ? <button className="btn" onClick={signOutUser}>Logout</button> :
          <>
            <Link to="/registar" className="btn">Resigtar</Link>
          <Link to="/login" className="btn">Login</Link>
          </>
          }


        </div>
      </div>
    </div>
  );
};

export default Navbar;
