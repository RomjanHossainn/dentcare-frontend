import { Link, NavLink } from 'react-router-dom';
import toothlogo from '../../assets/toothlogo.jpg'
import { useState } from 'react';
import { LiaPhoneSolid } from "react-icons/lia";
import { BsChevronDown } from "react-icons/bs";
import './Navabar.css'

const Navbar = () => {



    const [open, setOpen] = useState(false);
  
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isBlogDropdownOpen, setBlogDropdownOpen] = useState(false);

    const menuLinks = (
      <>
        <li>
          <NavLink
            className="text-[#8e8e8e] text-[15px] relative hover:text-[#4FA9E4]  after:bg-[#4FA9E4] after:absolute after:h-[2px] after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
            to={"/"}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/service'}
            className="text-[#8e8e8e] text-[15px] relative hover:text-[#4FA9E4]  after:bg-[#4FA9E4] after:absolute after:h-[2px] after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
          >
            Services
          </NavLink>
        </li>

        <li>
          <NavLink
            className="text-[#8e8e8e] text-[15px] relative hover:text-[#4FA9E4]  after:bg-[#4FA9E4] after:absolute after:h-[2px] after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
            to={"/appoinment"}
          >
            Appointment
          </NavLink>
        </li>
        <li
          className="relative"
          onClick={() => setBlogDropdownOpen(!isBlogDropdownOpen)}
        >
          <NavLink className="text-[#8e8e8e] flex items-center justify-between gap-2 text-[15px] relative hover:text-[#4FA9E4]  after:bg-[#4FA9E4] after:absolute after:h-[2px] after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
            Blogs
            <BsChevronDown className="translate-y-1 text-lg" />
          </NavLink>
          {isBlogDropdownOpen && (
            <ul
              style={{ boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0.5)" }}
              className={`bg-[white]  lg:absolute top-[50px]  px-6 py-8 w-[200px] space-y-4 z-50 rounded-xl`}
            >
              <li>
                <NavLink
                  to={"/newblogs"}
                  className="text-[#8e8e8e] flex items-center gap-2 text-[15px] relative hover:text-[#4FA9E4]  after:bg-[#4FA9E4] after:absolute after:h-[2px] after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                >
                  New Blogs
                </NavLink>
              </li>
              <li>
                <NavLink className="text-[#8e8e8e] flex items-center gap-2 text-[15px] relative hover:text-[#4FA9E4]  after:bg-[#4FA9E4] after:absolute after:h-[2px] after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
                  Single Blogs
                </NavLink>
              </li>
            </ul>
          )}
        </li>

        <li
          onClick={() => setDropdownOpen(!isDropdownOpen)}
          className="relative "
        >
          <NavLink className="text-[#8e8e8e] flex items-center justify-between gap-2 text-[15px] relative hover:text-[#4FA9E4]  after:bg-[#4FA9E4] after:absolute after:h-[2px] after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
            pages
            <BsChevronDown className="translate-y-1 text-lg" />
          </NavLink>

          {isDropdownOpen && (
            <ul
              style={{ boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0.5)" }}
              className={`bg-[white] lg:absolute top-[50px]  px-6 py-6 w-[200px]  space-y-4 z-50 rounded-xl`}
            >
              <li>
                <NavLink className="text-[#8e8e8e] flex items-center gap-2 text-[15px] relative hover:text-[#4FA9E4]  after:bg-[#4FA9E4] after:absolute after:h-[2px] after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink className="text-[#8e8e8e] flex items-center gap-2 text-[15px] relative hover:text-[#4FA9E4]  after:bg-[#4FA9E4] after:absolute after:h-[2px] after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
                  Our Doctor
                </NavLink>
              </li>
              <li>
                <NavLink className="text-[#8e8e8e] flex items-center gap-2 text-[15px] relative hover:text-[#4FA9E4]  after:bg-[#4FA9E4] after:absolute after:h-[2px] after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink className="text-[#8e8e8e] flex items-center gap-2 text-[15px] relative hover:text-[#4FA9E4]  after:bg-[#4FA9E4] after:absolute after:h-[2px] after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
                  404 Errorr
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        <li>
          <NavLink to={'/contact'} className="text-[#8e8e8e] text-[15px] relative hover:text-[#4FA9E4]  after:bg-[#4FA9E4] after:absolute after:h-[2px] after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
            contact
          </NavLink>
        </li>
      </>
    );

    


    return (
      <section className="max-w-screen-xl mx-auto px-4 z-50">
        <div className="" x-data="{open:false}">
          <nav className="flex items-center justify-between py-4">
            <div className="flex items-center gap-2">
              <img
                src={toothlogo}
                className=" cursor-pointer w-10"
                alt=""
              ></img>
              <h5 className="text-3xl font-semibold -mt-1">Dentcare</h5>
            </div>
            <div className="lg:hidden">
              <button
                className="flex items-center px-3 py-2 text-[#4fb9f6] border  rounded hover:text-blue-300  lg:hidden"
                onClick={() => setOpen(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-list"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </button>
            </div>
            <ul className="hidden text-gray-300/80 font-medium text-sm  lg:w-auto lg:space-x-9  lg:flex animate__animated animate__fadeInDown">
              {menuLinks}
            </ul>
            <div className=" hidden xl:block xl:flex items-center gap-10">
              <div className="flex items-center gap-6">
                <div className="p-[7px] relative  bg-[#4fa8e434] cursor-pointer rounded-full">
                  <span className="animate-ping -translate-y-1 -translate-x-1 absolute inline-flex  h-8 w-8 rounded-full  bg-sky-400 opacity-40"></span>
                  <LiaPhoneSolid className="bg-[#4FA9E4] text-white w-[30px] h-[30px] p-1 rounded-full" />
                </div>
                <p className="text-[#8e8e8e]">(+880)1745395942</p>
              </div>
              <Link to={"/appoinment"}>
                <button className="bg-[#4FA9E4] px-7 hover:bg-transparent hover:outline hover:text-[#8e8e8e] hover:outline-[#4FA9E4] outline-1 transition-all ease-in-out duration-300 py-3 text-white rounded-full">
                  Make Appointment
                </button>
              </Link>
            </div>
          </nav>
          {/* Mobile Sidebar */}
          <div
            className={` fixed inset-0 w-full opacity-25  lg:hidden ${
              open
                ? "translate-x-0 ease-in-opacity-100"
                : "-translate-x-full ease-out opacity-0"
            }`}
          ></div>
          <div
            className={` absolute  inset-0 z-10 h-[100vh]  p-3 text-gray-700 duration-500 transform shadow-md  w-80 lg:hidden lg:transform-none bg-[#FFFFFF] lg:relative ${
              open
                ? "translate-x-0 ease-in-opacity-100"
                : "-translate-x-full ease-out opacity-0"
            }`}
          >
            <div className="flex justify-between px-5 py-2">
              <a
                className="text-2xl flex items-center gap-2 font-bold dark:text-gray-400"
                href="#"
              >
                <img src={toothlogo} className="w-10" alt="" />
                Dentcare
              </a>
              <button
                className="rounded-md hover:text-[#4DABE6] lg:hidden dark:text-gray-400"
                onClick={() => setOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-x-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
            <ul className="px-5 text-left text-sm text-gray-400 space-y-3 mt-7">
              {menuLinks}
            </ul>
            <div className="flex items-center mt-5 lg:hidden">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="inline-block w-full px-4 py-3 mr-2 text-xs font-medium leading-none text-center text-gray-100 bg-[#4497ca] rounded-full hover:text-white    hover:bg-[#4DABE6] transition-all "
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Navbar;