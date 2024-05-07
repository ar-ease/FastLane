import Logo from "../assets/food.png";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";
const Title = () => (
  <a href="/">
    <img
      class="ml-9 mr-10 py-5
     w-48 h-48"
      alt="logo"
      src={Logo}
    />
  </a>
);
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();
  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div
      class="flex justify-between bg-transparent
     shadow-lg"
    >
      <Title />
      <div class="nav-items">
        <ul class="flex py-10 px-96">
          <Link to="/">
            <li class="px-2 font-bold">Home</li>
          </Link>
          <Link to="/about">
            <li class="px-2 font-bold">About</li>
          </Link>

          <Link to="/contact">
            <li class="px-2 font-bold">Contact</li>
          </Link>
          <Link to="/faq">
            <li class="px-2 font-bold">FAQ</li>
          </Link>

          <Link to="/cart">
            {" "}
            <li class="px-2 font-bold">Cart - {cartItems.length}</li>
          </Link>
        </ul>
      </div>
      <div class="p-5 m-5">{isOnline ? "☀︎" : "🔴"}</div>
      <span class="p-10">{user.name}</span>
      {isLoggedIn === true ? (
        <button
          class="m-10 p-2 h-10 w-20 rounded-2xl bg-orange-400 text-white hover:bg-orange-600 focus:ring focus:ring-gray-600 focus:ring-opacity-8 "
          onClick={() => setIsLoggedIn(false)}
        >
          Logout
        </button>
      ) : (
        <button
          class="m-10 p-2 h-10 w-20 rounded-2xl bg-orange-400 text-white hover:bg-orange-600 focus:ring focus:ring-gray-600 focus:ring-opacity-8 "
          onClick={() => setIsLoggedIn(true)}
        >
          Login
        </button>
      )}
    </div>
  );
};
export default Header;
