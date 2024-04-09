import { useState, useEffect } from "react";
const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);
  const [allCatagory, setAllCatagory] = useState([]);
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
      json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
        (data) => {
          return (
            data?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
          );
        }
      );
    return filterCatagoryItems;
  };

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
  return { restaurant, allCatagory };
};
export default useRestaurant;
