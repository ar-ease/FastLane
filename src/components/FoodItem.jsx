import { IMG_CDN_URL } from "../constants.jsx";

const FoodItem = ({ name, description, imageId, price }) => {
  console.log(imageId);
  return (
    <div className="w-52 p-5 m-5 shadow bg-gray-100 hover:bg-fuchsia-100 hover:shadow-2xl">
      <img src={IMG_CDN_URL + imageId}></img>
      <h2 className="font-bold">{name}</h2>
      <h3>{description}</h3>
      <h4>Rupees : {price / 100} </h4>
    </div>
  );
};

export default FoodItem;
