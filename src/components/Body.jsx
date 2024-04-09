import { useState, useEffect } from "react";
import { restaurantList } from "../constants.jsx";
import RestaurantCard from "./RestaurantCard.jsx";
import ShimmerUi from "./Shimmer.jsx";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper.jsx";
import useGetRestaurant from "../utils/useGetRestaurant.jsx";
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const { allRestaurants, filteredRestaurants } = useGetRestaurant();

  if (!allRestaurants) return null;
  // if (filteredRestaurants?.length === 0) return <h1>No Resturant Found </h1>;

  return allRestaurants?.length === 0 ? (
    <ShimmerUi />
  ) : (
    <>
      <div className="search-container p-5 bg-blue-50 my-3">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="p-2 m-2 bg-purple-400 rounded-md"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setfilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantCard {...restaurant.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
