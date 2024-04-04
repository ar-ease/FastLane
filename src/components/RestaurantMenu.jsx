import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants.jsx";
import ShimmerUi from "./Shimmer";

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
  const { id } = params;

  const [restaurant, setRestaurant] = useState(null);
  const [allCatagory, setAllCatagory] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, []);
  const getRestaurantInfo = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.51800&lng=88.38320&restaurantId=" +
        id
    );
    const json = await data.json();
    const menu = await getMenu(json);
    const Items = catagoryItems(json);
    // console.log(json);
    // console.log(menu);
    setRestaurant(menu[0].card.card.info);
    setAllCatagory(Items);
    // console.log(Items);
  };

  //   console.log(allCatagory[0]?.card.card.id);
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
