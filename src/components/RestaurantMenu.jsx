import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants.jsx";
import ShimmerUi from "./Shimmer";
import useRestaurant from "../utils/useRestaurant.jsx";
import { addItem } from "../utils/cartSlice.js";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;
  const { restaurant, allCatagory } = useRestaurant(id);
  const dispatch = useDispatch();
  const addFoodItem = (item) => {
    dispatch(addItem());
  };

  return !restaurant ? (
    <ShimmerUi />
  ) : (
    <div className="flex">
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
      <div className="p-5">
        <h1>Menu</h1>
        <ul className="">
          {allCatagory.map((item, index) => {
            return (
              <div key={index}>
                <h2 className="font-bold">{item?.card?.card?.title}</h2>

                {item?.card?.card?.itemCards.map((items) => {
                  return (
                    <div>
                      <span className="px-2">{items?.card?.info?.name}</span>
                      <button
                        className="p-2 bg-orange-200"
                        onClick={() => addFoodItem(item)}
                      >
                        Add
                      </button>
                    </div>
                  );
                })}
              </div>
            );
          })}{" "}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
