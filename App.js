import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://previews.123rf.com/images/shmakova/shmakova2206/shmakova220600109/188025742-grill-menu-hand-drawn-inscription-slogan-food-court-logo-menu-restaurant-bar-cafe-vector-steak-on.jpg"
    />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const pizzaHut = {
  name: "Pizza Hut",
  image:
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7",
  cusines: ["Pizzas", "monacos"],
  rating: "4.2",
};
const RestaurantCard = () => {
  return (
    <div className="card">
      <img src={pizzaHut.image}></img>
      <h2>{pizzaHut.name}</h2>
      <h3>{pizzaHut.cusines.join(", ")}</h3>
      <h4>{pizzaHut.rating} Star</h4>
    </div>
  );
};
const Body = () => {
  return (
    <>
      <div className="restaurant-list">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </>
  );
};
const Footer = () => (
  <>
    <h2>Footer</h2>
  </>
);
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
