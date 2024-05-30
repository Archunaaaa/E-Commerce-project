import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Icons from "../Components/Icons";
import { nav } from "../Data/Data";
import NavItem from "../Components/NavItem";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  const mobileNav = (
    <div
      className={`${
        menuOpen ? "fixed inset-0 bg-gray-800 bg-opacity-50 z-50" : "hidden"
      } sm:hidden`}
      onClick={handleToggleMenu}
    />
  );

  return (
    <div className="w-full bg-white sticky top-0 z-10 shadow-md">
      <div className="flex justify-between p-2 pl-5 pr-4 items-center flex-wrap">
        <div className="sm:hidden">
          {menuOpen ? (
            <FaTimes onClick={handleToggleMenu} />
          ) : (
            <FaBars onClick={handleToggleMenu} />
          )}
        </div>
        <div>
          <Link to="/" className="font-bold text-3xl">
            WOOD<span className="text-yellow-500">COM</span>
          </Link>
        </div>
        {mobileNav}
        <div
          className={`${
            menuOpen
              ? "transform translate-x-0"
              : "transform -translate-x-full"
          } sm:flex bg-white fixed inset-y-0 left-0 z-50 w-64 overflow-y-auto transition-transform ease-in-out duration-300`}
        >
          <FaTimes
            onClick={handleToggleMenu}
            className="absolute top-3 right-3 cursor-pointer"
          />
          <ul className="flex flex-col p-4 m-8 font-bold">
            {nav.map((list) => (
              <NavItem to={list.path} label={list.text} key={list.path} />
            ))}
          </ul>
        </div>
        <div className="hidden sm:flex">
          <ul className="flex font-semibold uppercase">
            {nav.map((item) => (
              <NavItem to={item.path} label={item.text} key={item.path} />
            ))}
          </ul>
        </div>
        <div className="top-icon">
          <Icons />
        </div>
      </div>
    </div>
  );
}
