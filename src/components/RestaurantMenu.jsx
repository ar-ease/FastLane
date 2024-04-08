import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants.jsx";
import ShimmerUi from "./Shimmer";
import useRestaurant from "../utils/useRestaurant.jsx";

const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;
  const { restaurant, allCatagory } = useRestaurant(id);

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
