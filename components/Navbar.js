import Link from "next/link";
import React, { useState } from "react";
import Navitem from "./Navitem";
import { FaSearch, FaUserAlt } from "react-icons/fa";

const MENU = [
  {
    href: "/",
    text: "Home"
  },
  {
    href: "/categories",
    text: "Categories",
    subcategories: [
      { href: "/categories/laptop", text: "Laptop" },
      { href: "/categories/phone", text: "Phone" },
      { href: "/categories/television", text: "Television" }
    ]
  },
  {
    href: "/compare",
    text: "Compare"
  }
];

const Navbar = (props) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <header>
      <nav className={props.home ? "homenav" : "nav"}>
        <div className="container grid grid-cols-3 gap-3 items-center ">
          <Link href={"/"}>
            <img
              src="../images/impact_black.webp"
              alt="logo"
              className="nav__logo"
            />
          </Link>

          

          <input
            type="text"
            className="nav__search"
            placeholder="Compare Anything"
          />
          <div
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="nav_menu-bar"
          >
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className={`${navbarOpen ? "open" : ""} nav__menu-list`}>
            
               {/* <div>
                <Link href="/" className="nav__link">
                  Home
                </Link>
              </div>
              <div>
                <Link href="/categories" className="nav__link">
                  Categories
                </Link>
                 <ul className="submen">
                  <div>
                    <Link href="/categories/laptop" className="nav__link">
                      Laptop
                    </Link>
                  </div>
                  <div>
                    <Link href="/categories/laptop" className="nav__link">
                      Televison
                    </Link>
                  </div>
                  <div>
                    <Link href="/categories/laptop" className="nav__link">
                      Phone
                    </Link>
                  </div>
                </ul> 
              </div>
              <div>
                <Link href="/compare" className="nav__link">
                  Compare
                </Link>
              </div>  */}
            

             {MENU.map((item, index) => {
              return (
                <div
                  onClick={() => {
                    setActiveIdx(index);
                    setNavbarOpen(false);
                  }}
                  key={item.text}
                >
                  <Navitem active={activeIdx === index} {...item} />
                </div>
              );
            })} 
          </div>
          <div className="icons">
            <FaSearch className="arama" />
            <FaUserAlt className="kullanici" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
