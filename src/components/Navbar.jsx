import React, { useState } from "react";
import "../styles/navbar.css";
import { NavLink } from "react-router-dom";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ClearIcon from "@mui/icons-material/Clear";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <>
      <nav className="navbar">
        <button className="mobile-menu" onClick={toggleMenu}>
          {isMobile ? (
            <ClearIcon
              style={{
                fontSize: "2rem",
                color: "white",
                marginTop: "16px",
                zIndex: 999,
              }}
            />
          ) : (
            <MenuIcon
              style={{ fontSize: "2rem", color: "white", marginTop: "16px" }}
            />
          )}
        </button>
        <div className="logo">
          <NavLink to="/">
            <img src="../img/logo-ps.png" alt="logo" />
          </NavLink>
        </div>
        <div className={isMobile ? "menu-link-mobile" : "menu-links"}>
          <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <div className="dropdown">
              <button
                className="dropdown__button"
                onMouseEnter={toggleDropdown}
                onBlur={() => setIsOpen(false)}
              >
                Services
              </button>
              {isOpen && (
                <div
                  className="dropdown__menu"
                  onMouseLeave={() => setIsOpen(false)}
                >
                  <ul className="dropdown__list">
                    <li className="dropdown__item">Service 1</li>
                    <li className="dropdown__item">Service 2</li>
                    <li className="dropdown__item">Service 3</li>
                  </ul>
                </div>
              )}
            </div>
          </ul>
        </div>
        <div className="shop-icons">
          <a href="/account" className="account">
            <AccountCircleOutlinedIcon />
          </a>
          <a href="/#" className="search">
            <SearchIcon />
          </a>
          <a href="/cart" className="shopping-cart">
            <ShoppingCartOutlinedIcon />{" "}
            <span className="price">2 / Rs. 2,010</span>
          </a>
        </div>
      </nav>
      {isMobile && <div className="backdrop" />}
    </>
  );
};

export default Navbar;
