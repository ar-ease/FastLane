import { useState } from "react";

const Section = ({
  title,
  description,
  isVisible,
  visibility,
  setIsVisibleSection,
}) => {
  console.log(isVisible);
  console.log(visibility);
  return (
    <>
      <div className="border border-black p-2 m-2">
        <h1>{title}</h1>
        {isVisible ? (
          <>
            <button onClick={visibility} className="cursor-pointer underline">
              Hide
            </button>
            <p>{description}</p>
          </>
        ) : (
          <>
            <button onClick={visibility} className="cursor-pointer underline">
              Show
            </button>
          </>
        )}
      </div>
    </>
  );
};

const Faq = () => {
  const [isVisibleSection, setIsVisibleSection] = useState("");
  return (
    <>
      <h1>Welcome</h1>
      <Section
        title={"About The App"}
        description={`Welcome to our food delivery app, where cravings meet convenience!
          Whether you're in the mood for a sizzling burger, a cheesy pizza, or
          exotic cuisine, we've got you covered. With our user-friendly
          interface, ordering your favorite dishes is just a few taps away.
          Explore a world of flavors and let us bring the culinary delights
          right to your doorstep. Download now and embark on a delicious journey
          with us!`}
        isVisible={isVisibleSection === "about"}
        visibility={() => {
          setIsVisibleSection(isVisibleSection === "about" ? "" : "about");
        }}
      ></Section>
      <Section
        title={"Who made it"}
        description={`Arghya Jana(arry-ease)`}
        isVisible={isVisibleSection === "creator"}
        visibility={() => {
          setIsVisibleSection(isVisibleSection === "creator" ? "" : "creator");
        }}
      ></Section>
      <Section
        title={"who is he"}
        description={`he's rockstar`}
        isVisible={isVisibleSection === "who"}
        visibility={() => {
          setIsVisibleSection(isVisibleSection === "who" ? "" : "who");
        }}
      ></Section>
    </>
  );
};
export default Faq;
