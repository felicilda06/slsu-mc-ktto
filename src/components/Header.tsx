import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../components";
import styled from "styled-components";

const Header: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);

  const onToggle = () => {
    setToggle(!toggle);
    setActive(!active);
  };
  return (
    <header>
      <nav
        className={`w-screen bg-blue-50 flex duration-150 justify-between fixed z-10 shadow-md shadow-gray-500 ${
          active && `flex-col h-56`
        } md:flex-row md:h-20 lg:flex-row lg:h-20`}
      >
        <StyledBurger
          className={`cursor-pointer duration-150 absolute top-5 right-4 block md:hidden lg:hidden ${
            toggle ? `active` : ``
          }`}
          onClick={onToggle}
        >
          <div className={`bar1`}></div>
          <div className={`bar2`}></div>
          <div className={`bar3`}></div>
        </StyledBurger>
        <div className={`ml-2 md:ml-6 lg:ml-6`}>
          <Logo />
        </div>
        <ul
          className={`flex justify-end items py-6 mx-6 text-14px font-semibold relative ${
            active ? `block` : `hidden md:inline-flex lg:inline-flex`
          } gap-3 flex-col md:flex-row md:gap-6 lg:flex-row lg:gap-6`}
        >
          <Link
            to={`/login`}
            className={`border border-lightBlue px-6 flex items-center outline-none text-gray-700 duration-150 hover:bg-gray-200 hover:text-gray-800 py-2 md:py-0 lg:py-0`}
          >
            <li>Login</li>
          </Link>
          <Link
            to={`/signup`}
            className={`bg-lightBlue text-gray-50 px-6 flex items-center outline-none duration-150 hover:bg-normalBlue py-2 md:py-0 lg:py-0`}
          >
            <li>Sign Up</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

const StyledBurger = styled.div`
  .bar1,
  .bar2,
  .bar3 {
    width: 25px;
    height: 3px;
    background-color: #0f6fab;
    margin: 6px 0;
    transition: 0.4s;
  }

  &.active .bar1 {
    -webkit-transform: rotate(-45deg) translate(-9px, 6px);
    transform: rotate(-45deg) translate(-6px, 6px);
  }

  &.active .bar2 {
    opacity: 0;
  }

  &.active .bar3 {
    -webkit-transform: rotate(45deg) translate(-8px, -8px);
    transform: rotate(45deg) translate(-7px, -7px);
  }
`;
