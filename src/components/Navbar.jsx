import React from "react";

function Navbar() {
  if (localStorage.getItem("login") == "true") {
    return (
      <nav className="bg-white/55 backdrop-blur-lg sticky top-0 z-10">
        <ul className="flex justify-around items-center p-[20px]">
          <div>
            <li>
              <a href="/">Logo</a>
            </li>
          </div>
          <div className="flex *:ml-[20px]">
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/shop">Shop</a>
            </li>
            <li>
              <a href="/" className="bg-black text-white p-[6px] rounded-lg">
                User
              </a>
            </li>
          </div>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav className="bg-white/55 backdrop-blur-lg sticky top-0 z-10">
        <ul className="flex justify-around items-center p-[20px]">
          <div>
            <li>
              <a href="/">Logo</a>
            </li>
          </div>
          <div className="flex *:ml-[20px]">
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/shop">Shop</a>
            </li>
            <li>
              <a
                href="/login"
                className="bg-black text-white p-[6px] rounded-lg"
              >
                Login
              </a>
            </li>
          </div>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
