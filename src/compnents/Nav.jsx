import React, { useContext } from "react";
import "./Navbar.css";
import search from "../assets/search_icon.png";
import cart from "../assets/basket_icon.png";
import logo from "../assets/scs.png";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

const Nav = () => {
  const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <>
      <div
        className="top-bar"
        style={{ height: "50px", backgroundColor: "#ADD8E6" }}
      >
        <Marquee className="marquee">
          Important update regarding your account balance. You can use your
          account balance to make purchases, simplifying your checkout process
          and making shopping with us even more convenient. If you prefer to
          withdraw your balance, please initiate the withdrawal process within
          the next 20 days. Failure to do so within this timeframe will result
          in an automatic deduction of the balance from your account as part of
          our policy.
        </Marquee>
      </div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid sticky">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-center gap-3 align-items-center">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand" to="/">
            <img src={logo} className="logo" alt="" />
          </Link>
          </div>
          <div className="input-search">
            <input
              type="search"
              className="search "
              id=""
              placeholder="Search here"
            />
            <img className="serarch" src={search} alt="" />
          </div>

          <div className="d-flex align-itmes-center justify-content-center gap-5">
          <div className="navbar-search-icon">
            <Link to="/cart"><img src={cart} alt="" /></Link>
            <div className={getTotalCartAmount()===0? "": "dot"}></div>
        </div>
           
           <Link to="/login"><button type="button" className="btn btn-outline-danger rounded-5">
              Sign up
            </button></Link> 
          </div>
        </div>
          <div
            className="offcanvas offcanvas-start"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Offcanvas
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body z-100">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 z-100">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    SHOP
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/skin-care">
                    SKIN CARE
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/make-up"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    MAKE UP
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/make-up">
                        FACE
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="">
                        EYES
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="">
                        LIPS
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        NAILS
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        MAKE-UP-TOOLS
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/hair">
                    HAIR
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/fragnance">
                    FRAGNANCE
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/bath-body">
                    BATH & BODY
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/accessories">
                    ACCESSORIES
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/kids-baby">
                    KIDS & BABY
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
