import { useState, useEffect } from "react";

const useGetRestaurant = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);

  const getXRestaurants = (json) => {
    const filterResturant = json.data.cards.filter((item) => {
      return (
        item?.card?.card?.gridElements?.infoWithStyle["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle"
      );
    });

    return filterResturant;
  };
  useEffect(() => {
    getRestaurants();
  }, []);
  getRestaurants = async () => {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurants = await getXRestaurants(json);
    setAllRestaurants(
      restaurants[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setfilteredRestaurants(
      restaurants[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return { allRestaurants, filteredRestaurants, setfilteredRestaurants };
};
export default useGetRestaurant;
