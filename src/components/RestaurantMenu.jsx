import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants.jsx";
import ShimmerUi from "./Shimmer";
import useRestaurant from "../utils/useRestaurant.jsx";

const getMenu = (json) => {
  const filterMenu = json.data.cards.filter((data) => {
    return (
      data.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
      //     "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    );
  });
  return filterMenu;
};
const catagoryItems = (json) => {
  const filterCatagoryItems =
    json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((data) => {
      return (
        data?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });
  return filterCatagoryItems;
};

const RestaurantMenu = () => {
  const params = useParams();
  const { resId } = params;

  const [allCatagory, setAllCatagory] = useState([]);

  const restaurant = useRestaurant(resId);

  return !restaurant ? (
    <ShimmerUi />
  ) : (
    <div className="menu">
      <div>
        <h1>Restaurant id : {id}</h1>
        <h2>{restaurant.name}</h2>
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId}></img>
        <h2>{restaurant.area}</h2>
        <h2>{restaurant.city}</h2>
        <h2>{restaurant.avgRating}</h2>
        <h2>{restaurant.costForTwoMessage}</h2>
      </div>
      <div></div>
      <div>
        <h1>Menu</h1>
        <ul>
          {allCatagory.map((item) => {
            return (
              <div key={item?.card?.card?.title}>
                <li>{item?.card?.card?.title}</li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
