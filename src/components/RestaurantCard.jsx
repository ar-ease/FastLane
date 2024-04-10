import { IMG_CDN_URL } from "../constants.jsx";
const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  return (
    <div className="w-52 p-5 m-5 shadow bg-gray-100 hover:bg-fuchsia-100 hover:shadow-2xl">
      <img src={IMG_CDN_URL + cloudinaryImageId}></img>
      <h2 className="font-bold">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} Star</h4>
    </div>
  );
};

export default RestaurantCard;
