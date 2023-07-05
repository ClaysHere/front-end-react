import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const burgerRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const fixNav = headerRef.current.offsetTop;
      if (window.pageYOffset > fixNav) {
        headerRef.current.classList.add("nav-fix");
      } else {
        headerRef.current.classList.remove("nav-fix");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBurgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleWindowClick = (e) => {
    if (
      !burgerRef.current.contains(e.target) &&
      !menuRef.current.contains(e.target)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleWindowClick);

    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);

  const handleMenuClick = (path) => {
    const currentPath = location.pathname;
    if (currentPath !== path) {
      navigate(path);
    }
  };

  return (
    <>
      <nav
        ref={headerRef}
        className={`fixed flex w-full items-center justify-between bg-black px-8 lg:px-20 md:py-2 z-[9999999999]`}>
        <span
          className="font-bold py-4 text-white md:text-xl cursor-pointer"
          onClick={() => {
            navigate("/");
            setIsMenuOpen(false);
          }}>
          FruitPedia.
        </span>
        <ul
          id="nav-menu"
          ref={menuRef}
          className={`${
            isMenuOpen ? "" : "hidden"
          } bg-black lg:bg-transparent bg-opacity-70 lg:gap-x-4 rounded-lg w-[200px] h-[200px] lg:w-1/2 lg:h-0 lg:p-4 right-1 top-16 md:top-20 justify-evenly lg:justify-end items-center flex flex-col lg:flex-row text-white font-semibold text-xl lg:gap-16 xl:gap-16 lg:mb-0 absolute lg:flex lg:static z-[99999]`}>
          <li
            className={`nav-menu ${location.pathname === "/" ? "active" : ""}`}
            onClick={() => {
              handleMenuClick("/");
              setIsMenuOpen(false);
            }}>
            HOME
          </li>

          <li
            className={`nav-menu ${
              location.pathname === "/portfolio" ? "active" : ""
            }`}
            onClick={() => {
              handleMenuClick("/portfolio");
              setIsMenuOpen(false);
            }}>
            SOON!
          </li>
          <li
            className={`nav-menu ${
              location.pathname === "/about" ? "active" : ""
            }`}
            onClick={() => {
              handleMenuClick("/about");
              setIsMenuOpen(false);
            }}>
            SOON!
          </li>
          <li
            className={`nav-menu ${
              location.pathname === "/contact" ? "active" : ""
            }`}
            onClick={() => {
              handleMenuClick("/contact");
              setIsMenuOpen(false);
            }}>
            SOON!
          </li>
        </ul>
        <div
          id="burger"
          ref={burgerRef}
          className={`${isMenuOpen ? "burger-active" : ""} lg:hidden`}
          onClick={handleBurgerClick}>
          <span className={"burger-line origin-top-left"}></span>
          <span className={"burger-line"}></span>
          <span className={"burger-line origin-bottom-left"}></span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
