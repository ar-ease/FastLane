import { useState, useEffect } from "react";
import { restaurantList } from "../constants.jsx";
import RestaurantCard from "./RestaurantCard.jsx";

filterData = (searchText, restaurants) => {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.info.name.includes(searchText)
  );

  return filterData;
};

const getXRestaurants = (json) => {
  const filterResturant = json.data.cards.filter((item) => {
    return (
      item?.card?.card?.gridElements?.infoWithStyle["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle"
    );
  });

  return filterResturant;
};
const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    getRestaurants();
  }, []);
  getRestaurants = async () => {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurants = await getXRestaurants(json);
    setRestaurants(
      restaurants[1].card.card.gridElements.infoWithStyle.restaurants
    );
    
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="seacrch-btn"
          onClick={() => {
            const data = filterData(searchText, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
          );
        })}
      </div>
    </>
  );
};
export default Body;
