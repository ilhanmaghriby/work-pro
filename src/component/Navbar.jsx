import React from "react";
import logo from "../assets/img/logo.png";
import { Link, Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const Navbar = () => {
  return (
    <nav className="fixed z-10 bg-[#6096B4] navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/vacancy"}>Vacancy</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <img src={logo} alt="logo" className="w-16 text-xl normal-case" />
      </div>
      <div className="mr-2 navbar-end">
        {!Cookies.get("token") && (
          <Link to={"/login"}>
            <button className="btn btn-sm btn-ghost xl:mr-2">Login</button>
          </Link>
        )}{" "}
        {Cookies.get("token") && (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png?w=740&t=st=1686812008~exp=1686812608~hmac=6d426316358e33a353e5cbaa91701d999e8df8c10be8e2aeccdb5c7bb16e175a" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={"/dashboard"} className="justify-between">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to={"/change-pass"}>Change Password</Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    Cookies.remove("token");
                    Navigate("/");
                  }}
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
