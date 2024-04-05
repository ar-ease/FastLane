import { useEffect, useState } from "react";

const Profile = () => {
  const demoUserData = {
    data: "Hii",
  };

  const [userData, setUserData] = useState({ demoUserData });

  useEffect(() => {
    prifileData();
  }, []);

  prifileData = async () => {
    const data = await fetch("https://api.github.com/users/Arry-ease");
    const json = await data.json();
    console.log(json);
    setUserData(json);
    console.log(userData);
  };

  return (
    <>
      <h1>This is profile</h1>
      <img src={userData.avatar_url} alt="Profile Image"></img>

      <h2>{userData.bio}</h2>
      <h2>Location - {userData.location}</h2>
    </>
  );
};

export default Profile;
