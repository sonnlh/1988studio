import React from "react";
import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" ">
      <div className="bg-white shadow-md navigation fixed top-0 left-0 w-full z-30 duration-300">
        <div className="container">
          <nav className="navbar py-2 navbar-expand-lg flex justify-between items-center relative duration-300">
            <a className="navbar-brand" href="index.html">
              <img src="" alt="Logo" />
            </a>
            <button
              className="navbar-toggler focus:outline-none block lg:hidden"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="toggler-icon"></span>
              <span className="toggler-icon"></span>
              <span className="toggler-icon"></span>
            </button>

            <div
              className=" navbar-collapse lg:block duration-300 shadow absolute top-100 left-0 mt-full bg-white z-20 px-5 py-3 w-full lg:static lg:bg-transparent lg:shadow-none"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto justify-center items-center lg:flex ">
                <li className="nav-item">
                  <Link className="page-scroll active" to="/">
                    Trang chủ
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="page-scroll" href="#services">
                    Dịch vụ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="page-scroll" href="#feature">
                    Giới thiệu
                  </a>
                </li>
                <li className="nav-item">
                  <a className="page-scroll" href="#team">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Header;