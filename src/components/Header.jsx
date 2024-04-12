import Logo from "../assets/food.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title = () => (
  <a href="/">
    <img className=" rounded-full object-cover" alt="logo" src={Logo} />
  </a>
);
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();
  return (
    <div
      className="flex justify-between bg-transparent
     shadow-lg"
    >
      <Title />
      <div className="nav-items">
        <ul className="flex py-10 px-96">
          <Link to="/">
            <li className="px-2 font-bold">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-2 font-bold">About</li>
          </Link>

          <Link to="/contact">
            <li className="px-2 font-bold">Contact</li>
          </Link>
          <Link to="/faq">
            <li className="px-2 font-bold">FAQ</li>
          </Link>

          <li className="px-2 font-bold">Cart</li>
        </ul>
      </div>
      <h1 className="m-12   rounded-2xl  bg-gray-100 w-20">
        {isOnline ? "☀︎" : "🔴"}
      </h1>
      {isLoggedIn === true ? (
        <button
          className="m-10 p-2 h-10 w-20 rounded-2xl bg-orange-400 text-white hover:bg-orange-600 focus:ring focus:ring-gray-600 focus:ring-opacity-8 "
          onClick={() => setIsLoggedIn(false)}
        >
          Logout
        </button>
      ) : (
        <button
          className="m-10 p-2 h-10 w-20 rounded-2xl bg-orange-400 text-white hover:bg-orange-600 focus:ring focus:ring-gray-600 focus:ring-opacity-8 "
          onClick={() => setIsLoggedIn(true)}
        >
          Login
        </button>
      )}
    </div>
  );
};
export default Header;
