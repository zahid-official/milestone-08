import { Link, NavLink, useLocation } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import "./navbar.css";
import { useContext } from "react";
import { CartContext, WishContext } from "../../Layout";

const Navbar = () => {
  const location = useLocation();
  const [cartCount] = useContext(CartContext);
  const [wishCount] = useContext(WishContext);

  const li = (
    <>
      <span>
        <NavLink
          className="btn text-base rounded-none btn-ghost hover:bg-transparent"
          to="/"
        >
          Home
        </NavLink>
      </span>
      <span>
        <NavLink
          className="btn text-base rounded-none btn-ghost hover:bg-transparent"
          to="/statistics"
        >
          Statistics
        </NavLink>
      </span>
      <span>
        <NavLink
          className="btn text-base rounded-none btn-ghost hover:bg-transparent"
          to="/dashboard"
        >
          Dashboard
        </NavLink>
      </span>

      <span>
        <NavLink
          className="btn text-base rounded-none btn-ghost hover:bg-transparent"
          to="/article"
        >
          Articles
        </NavLink>
      </span>
    </>
  );
  // location.pathname 
  return (
    <>
      <div className={`navbar ${location.pathname === '/'? 'bg-purple-600 text-white' : 'bg-white text-black'}  py-8 sm:px-20`}>
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-3 text-black text-center py-5"
            >
              {li}
            </ul>
          </div>
          <Link
            to="/"
            className="sm:text-4xl text-3xl font-bold btn btn-ghost hover:bg-transparent p-0"
          >
            Gadgetix
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 font-semibold">
            {li}
          </ul>
        </div>
        <div className="navbar-end sm:gap-4 gap-1.5">
          <Link to="/dashboard" className="btn h-[50px] w-[50px] p-0 rounded-full bg-white relative">
            <span className="sm:text-3xl text-2xl"><IoCartOutline color="black" /></span>
            <span className={`absolute  ${location.pathname === '/'? 'text-white' : 'text-black'} font-bold -top-3 right-0`}>
              {cartCount}
            </span>
          </Link>
          <Link to="/dashboard" className="btn h-[48px] w-[48px] p-0 rounded-full bg-white relative">
            <span className="sm:text-3xl text-2xl"><MdFavoriteBorder color="black" /></span>
            <span className={`absolute  ${location.pathname === '/'? 'text-white' : 'text-black'} font-bold -top-3 right-0`}>
              {wishCount}
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
