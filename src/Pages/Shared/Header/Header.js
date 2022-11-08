import React, { useContext } from "react";
import { Link } from "react-router-dom";

import logo from "../../../assets/logo2.png";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  // for logout
  const handleLogOut = () => {
    logOut().then().catch();
  };

  //menuitems
  const menuItems = (
    <>
      <li className="font-semibold text-white ">
        <Link to="/">Home</Link>
      </li>

      {user?.email ? (
        <>
          <li className="font-semibold text-white ">
            <Link to="/orders">Orders</Link>
          </li>
          <li className="font-semibold text-white ">
            <button onClick={handleLogOut} className="btn-ghost">
              Sign Out
            </button>
          </li>
        </>
      ) : (
        <li className="font-semibold text-white ">
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-slate-900">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-900 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <div className=" inline-block sm:bg-end">
          <Link to="/">
            <img className="w-24 " src={logo} alt="" />
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Header;
