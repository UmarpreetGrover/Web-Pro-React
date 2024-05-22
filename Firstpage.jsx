/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Firstpage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

 
  function toggleMenu() {
    var navUl = document.querySelector('.nav ul');
    navUl.classList.toggle('show');
  }

  return (
    <div className="bg">
      <div className="l-constrained-4 group">
        <div className="logo group">
          <img
            className="shape-1"
            src="src/Components/images/shape_1.png"
            alt=""
            width="53"
            height="52"
          />
          <div className="col-6">
            <img
              className="webpro"
              src="src/Components/images/webpro.png"
              alt="WebPro"
              width="144"
              height="26"
              title="WebPro"
            />
            <p className="text">Tagline here</p>
          </div>
        </div>
        <img
          className="text-2"
          src="src/Components/images/image.png"
          alt="   "
          width="145"
          height="19"
          title="   "
        />
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list group">
            <li>
              <p className="nav-item-1"><a href="#">Home</a></p>
            </li>
            <li>
              <p className="nav-item-1-2"><a href="#">About us</a></p>
            </li>
            <li>
              <p className="nav-item-1-3"><a href="#">Blog</a></p>
            </li>
            <li>
              <p className="nav-item-1-4"><a href="#">Services</a></p>
            </li>
            <li>
              <p className="nav-item-1-5"><a href="#">Pages</a></p>
            </li>
            <li>
              <p className="nav-item-1-6"><a href="#">Contact us</a></p>
            </li>
          </ul>
        </nav>
        <button className="menu-btn" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Firstpage;
