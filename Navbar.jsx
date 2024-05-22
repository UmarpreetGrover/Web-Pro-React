import React from "react";


const Navbar = () => {

  // Function to toggle the menu
  const toggleMenu = () => {
    // Implement your toggle menu logic here
    console.log("Menu toggled");
  };

  return (
    <div className="background">
      <div className="bg">
        <div className="l-constrained-4 group">
          <div className="logo group">
            <img className="shape-1" src="images/shape_1.png" alt="" width="53" height="52" />
            <div className="col-6">
              <img className="webpro" src="images/webpro.png" alt="WebPro" width="144" height="26" title="WebPro" />
              <p className="text">Tagline here</p>
            </div>
          </div>
          <img className="text-2" src="images/image.png" alt="   " width="145" height="19" title="   " />
          <nav className="nav">
            <ul className="nav-list group">
              <li><p className="nav-item-1"><a href="#">Home</a></p></li>
              <li><p className="nav-item-1-2"><a href="#">About us</a></p></li>
              <li><p className="nav-item-1-3"><a href="#">blog</a></p></li>
              <li><p className="nav-item-1-4"><a href="#">services</a></p></li>
              <li><p className="nav-item-1-5"><a href="#">pages</a></p></li>
              <li><p className="nav-item-1-6"><a href="#">Contact us</a></p></li>
            </ul>
          </nav>
          <button className="menu-btn" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="background-image">
        <div className="copy">
          <p className="text-3">We Are<br />Creative<br />Agency</p>
          <p className="text-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
          <div className="rectangle-6-copy-7-holder">
            <img className="text-5" src="images/click_here.png" alt="Click here" width="110" height="15" title="Click here" />
          </div>
        </div>
      </div>
      <div className="l-constrained">
  <div className="group-2">
    <div className="rectangle-1-holder">
      <div className="copy-2">
        <p className="text-6">We Are<br />Creative Agency</p>
        <p className="text-7">
          <span className="colorffffff">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et </span>
          <br />
          <span className="text-style">&nbsp;</span>
          <br />
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="rectangle-6-copy-4-holder">
          <img className="text-8" src="images/click_here.png" alt="Click here" width="110" height="15" title="Click here" />
        </div>
      </div>
    </div>
    <img className="rectangle-3" src="images/rectangle_3_2.jpg" alt="" />
  </div>
  <div className="group-3 group">
    <div className="col-2">
      <p className="text-9">What<br />Makes us<br />Awesome?</p>
      <div className="button">
        <img className="text-10" src="images/click_here.png" alt="Click here" width="110" height="15" title="Click here" />
      </div>
    </div>
    <div className="wrapper-3">
      <div className="rectangle-1-copy-4"></div>
      <div className="group-4">
        <div className="ellipse-1-copy-2-holder">
          <img className="icon" src="src/images/icon_4.png" alt="" width="50" height="55" />
        </div>
        <p className="text-11">We are<br />Best</p>
        <p className="text-12">Ut enim ad minim veniam, quis <span className="text-style">nostrud exercitation ullamco laboris nisi ut aliquiminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui</span></p>
      </div>
      <div className="group-5">
        <div className="ellipse-1-copy-holder">
          <img className="icon-2" src="src/images/icon_5.png" alt="" width="54" height="54" />
        </div>
        <p className="text-13">We are<br />Better</p>
        <p className="text-14">Ut enim ad minim veniam, quis <span className="text-style">nostrud exercitation ullamco laboris nisi ut aliquiminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui</span></p>
      </div>
      <div className="group-6">
        <div className="ellipse-1-holder">
          <img className="icon-3" src="src/images/icon_6.png" alt="" width="47" height="55" />
        </div>
        <p className="text-15">We are<br />Creative</p>
        <p className="text-16">Ut enim ad minim veniam, quis <span className="text-style">nostrud exercitation ullamco laboris nisi ut aliquiminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui</span></p>
      </div>
    </div>
  </div>
  <div className="group-7">
    <div className="rectangle-1-copy-holder">
      <div className="copy-3">
        <p className="text-17">We Are<br />Creative Agency</p>
        <div className="row-2 match-height group">
          <div className="col-13">
            <p>
              <span className="text-style-2">Lorem ipsum &nbsp;sit</span>
              <br />
              <span className="text-style">&nbsp;</span>
              <br />
              <span className="text-style-3">Ut enim ad minim veniam, quisostrud exercitation ullacboris nit </span>
              <span className="text-style">aliquiminim veniam, quis nostrud exer tation ullamco laboris nisi ut aliqui</span>
            </p>
            <p className="text-19">
              <span className="text-style-2">Lorem ipsum &nbsp;sit</span>
              <br />
              <span className="text-style">&nbsp;</span>
              <br />
              <span className="text-style-3">Ut enim ad minim veniam, quisostrud exercitation ullacboris nit </span>
              <span className="text-style">aliquiminim veniam, quis nostrud exer tation ullamco laboris nisi ut aliqui</span>
            </p>
          </div>
          <div className="col-14">
            <p>
              <span className="text-style-2">Lorem ipsum &nbsp;sit</span>
              <br />
              <span className="text-style">&nbsp;</span>
              <br />
              <span className="text-style-3">Ut enim ad minim veniam, quisostrud exercitation ullacboris nit </span>
              <span className="text-style">aliquiminim veniam, quis nostrud exer tation ullamco laboris nisi ut aliqui</span>
            </p>
            <p className="text-21">
              <span className="text-style-2">Lorem ipsum &nbsp;sit</span>
              <br />
              <span className="text-style">&nbsp;</span>
              <br />
              <span className="text-style-3">Ut enim ad minim veniam, quisostrud exercitation ullacboris nit </span>
              <span className="text-style">aliquiminim veniam, quis nostrud exer tation ullamco laboris nisi ut aliqui</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="ipad-image">
      <img className="place-your-screen" src="src/images/place_your_screen_2.jpg" alt="" width="410" height="548" />
    </div>
  </div>
</div>
<div className="group-8">
  <div className="background-2"></div>
  <div className="apple-watch">
    <img className="place-your-screen1" src="src/images/place_your_screen1.jpg" alt="" width="210" height="263" />
  </div>
  <div className="text-22">
    <p className="text-23">
      <span className="text-style-2">Lorem ipsum &nbsp;sit</span>
      <br />
      <span className="text-style">&nbsp;</span>
      <br />
      <span className="text-style-3">Ut enim ad minim veniam, quisostrud exercitation ullacboris nit </span>
      <span className="text-style">aliquiminim veniam, quis nostrud exer tation ullamco laboris nisi ut aliqui</span>
    </p>
    <p className="text-24">We Are<br />Creative</p>
  </div>
</div>
<div className="l-constrained-2">
  <div className="group-9">
    <div className="rectangle-1-copy-2-holder">
      <div className="text-25">
        <p className="text-26">We Are<br />Creative Agency</p>
        <p className="text-27">
          <span className="text-style-2">Lorem ipsum dolor sit</span>
          <br />
          <span className="text-style">&nbsp;</span>
          <br />
          <span className="text-style-3">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut </span>
          <span className="text-style">aliquiminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui</span>
        </p>
        <p className="text-28">
          <span className="text-style-2">Lorem ipsum dolor sit</span>
          <br />
          <span className="text-style">&nbsp;</span>
          <br />
          <span className="text-style-3">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut </span>
          <span className="text-style">aliquiminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui</span>
        </p>
        <p className="text-29">
          <span className="text-style-2">Lorem ipsum dolor sit</span>
          <br />
          <span className="text-style">&nbsp;</span>
          <br />
          <span className="text-style-3">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut </span>
          <span className="text-style">aliquiminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui</span>
        </p>
      </div>
    </div>
    <div className="iphone">
      <img className="place-your-screen-2" src="src/images/place_your_screen.png" alt="" width="270" height="488" />
    </div>
  </div>
  <div className="group-10 group">
    <div className="articles match-height group">
      <div className="col-3">
        <div className="group-11">
          <img className="rectangle-2" src="src/images/rectangle_2.jpg" alt="" />
          <p className="text-30">
            <span className="text-style-4">Lorem ipsum dolor sit</span>
            <br />
            <span className="text-style-5">Ut enim ad minim veniam,quis </span>nostrud exercitation ullamco laboris nisi ut aliquiminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui
          </p>
        </div>
        <div className="group-12">
          <img className="rectangle-2-copy-2" src="src/images/rectangle_2_copy_2_2.jpg" alt="" />
          <p className="text-31">
            <span className="text-style-4">Lorem ipsum dolor sit</span>
            <br />
            <span className="text-style-5">Ut enim ad minim veniam,quis </span>nostrud exercitation ullamco laboris nisi ut aliquiminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui
          </p>
        </div>
      </div>
      <div className="col-4">
        <div className="group-13">
          <img className="rectangle-2-copy" src="src/images/rectangle_2_copy.jpg" alt="" />
          <p className="text-32">
            <span className="text-style-4">Lorem ipsum dolor sit</span>
            <br />
            <span className="text-style-5">Ut enim ad minim veniam,quis </span>nostrud exercitation ullamco laboris nisi ut aliquiminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui
          </p>
        </div>
        <div className="group-14">
          <img className="rectangle-2-copy-2-2" src="src/images/rectangle_2_copy_2.jpg" alt="" />
          <p className="text-33">
            <span className="text-style-4">Lorem ipsum dolor sit</span>
            <br />
            <span className="text-style-5">Ut enim ad minim veniam,quis </span>nostrud exercitation ullamco laboris nisi ut aliquiminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui
          </p>
        </div>
      </div>
    </div>
    <div className="rectangle-1-copy-6-holder">
      <div className="side-text">
        <p className="text-34">We Are<br />Creative<br />Agency</p>
        <p className="text-35">
          <span className="text-style-6">Lorem ipsum dolor sit</span>
          <br />
          <span className="text-style">&nbsp;</span>
          <br />
          <span className="text-style-7">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </span>
          <span className="text-style">ut aliquiminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui</span>
        </p>
        <div className="rectangle-6-copy-6-holder">
          <img className="text-36" src="src/images/click_here.png" alt="Click here" width="110" height="15" title="Click here" />
        </div>
      </div>
    </div>
  </div>
</div>
<div className="group-15 group">
  <div className="background-3">
    <div className="heading-and-text">
      <p className="text-37">Thanks for Visit</p>
      <p className="text-38">Stay in touch</p>
      <p className="text-39">
        <span className="text-style-7">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </span>
        <span className="text-style">ut aliquiminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui</span>
      </p>
    </div>
  </div>
  <div className="get-in-touch group">
    <div className="contac-info">
      <p className="text-40">Lorem ipsum dolor sit amet</p>
      <div className="email group">
        <div className="ellipse-1-copy-3-holder">
          <img className="icon-4" src="src/images/icon_2.png" alt="" width="40" height="31" />
        </div>
        <div className="col-8">
          <p className="email-2">Email</p>
          <p className="text-41">free@psdfreebies.com</p>
        </div>
      </div>
      <div className="call group">
        <div className="ellipse-1-copy-4-holder">
          <img className="icon-5" src="src/images/icon_3.png" alt="" width="27" height="40" />
        </div>
        <div className="col-9">
          <p className="text-42">Call Us !</p>
          <p className="text-43">+123 456 7890<br />+123 456 7890</p>
        </div>
      </div>
      <div className="address match-height group">
        <div className="ellipse-1-copy-5-holder">
          <img className="icon-6" src="src/images/icon.png" alt="" width="39" height="40" />
        </div>
        <div className="col-7">
          <p className="address-2">Address</p>
          <p className="text-44">123, Main Road, New City, My Country 123456</p>
        </div>
      </div>
    </div>
    <div className="contact-form group">
      <p className="text-45">say hello !</p>
      <div className="row group">
        <p className="text-46">
          Name
          <br />
          <span className="text-style-8">&nbsp;</span>
          <br />
          Email
          <br />
          <span className="text-style-8">&nbsp;</span>
          <br />
          Phone
          <br />
          <span className="text-style-8">&nbsp;</span>
          <br />
          Message
        </p>
        <div className="col-12">
          <div className="rectangle-3-2"></div>
          <div className="rectangle-3-copy-2"></div>
          <div className="rectangle-3-copy-3"></div>
        </div>
      </div>
      <div className="rectangle-3-copy-4"></div>
      <div className="rectangle-6-copy-8-holder">
        <img className="text-47" src="src/images/send_message.png" alt="Send Message" width="144" height="15" title="Send Message" />
      </div>
    </div>
  </div>
</div>
<div className="group-16">
  <div className="l-constrained-3">
    <p className="text-48">Designed By PSDFreebies.com</p>
    <p className="text-49">COPYRIGHT 2017</p>
  </div>
</div>
</div>
  );
};

export default Navbar;
