import { IMG_CDN_URL } from "../constants.jsx";
import { useContext } from "react";
import userContext from "../utils/userContext.jsx";
const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  const { user } = useContext(userContext);
  return (
    <div className="w-52 p-5 m-5 shadow bg-gray-100 hover:bg-fuchsia-100 hover:shadow-2xl">
      <img src={IMG_CDN_URL + cloudinaryImageId}></img>
      <h2 className="font-bold">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} Star</h4>
      <h4>
        {user.name} - {user.email}
      </h4>
    </div>
  );
};

export default RestaurantCard;
