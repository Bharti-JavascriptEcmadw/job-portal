import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex justify-center space-x-4">
        <li>
          <Link to="/" className="text-white">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
