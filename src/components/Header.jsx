import Logo from "../assets/food.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title = () => (
  <a href="/">
    <img className="h-28 p-2" alt="logo" src={Logo} />
  </a>
);
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();
  return (
    <div className="flex justify-between bg-emerald-100 shadow-lg">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <Link to="/">
            <li className="px-2">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-2">About</li>
          </Link>

          <Link to="/contact">
            <li className="px-2">Contact</li>
          </Link>
          <Link to="/instamart">
            <li className="px-2">INSTAMART</li>
          </Link>

          <li className="px-2">Cart</li>
        </ul>
      </div>
      <h1>{isOnline ? "☀︎" : "🔴"}</h1>
      {isLoggedIn === true ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};
export default Header;
