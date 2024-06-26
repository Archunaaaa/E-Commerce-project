import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './../Style.css';
import Icons from "../Components/Icons";
import { nav } from "../Data/Data";
import NavItem from "../Components/NavItem";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const mobileNav = (
    <div
      className={`${
        menuOpen ? "fixed inset-0 bg-gray-800 bg-opacity-50 z-50" : "hidden"
      } sm:hidden`}
      style={{ zIndex: "9999" }}
    ></div>
  );

  return (
    <>
      <div
        className={
          menuOpen ? "" : "w-full bg-white sticky top-0 z-10 drop-shadow-md"
        }
      >
        <div className="flex justify-between p-2 pl-5 pr-4 items-center flex-wrap">
          <div className="sm:hidden">
          </div>
          <div>
            <Link to={"/"} className="font-bold text-3xl">
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
            style={{ zIndex: "11111" }}
          >
          </div>
          <div className="hidden sm:flex">
            <ul className="flex font-semibold uppercase">
              {nav.map((items, index) => (
                <NavItem key={index} to={items.path} label={items.text} />
              ))}
            </ul>
          </div>
          <div className="top-icon">
            <Icons />
          </div>
        </div>
      </div>
    </>
  );
}