import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <>
      <div className="border border-black p-2 m-2">
        <h1>{title}</h1>
        {isVisible ? (
          <button
            onClick={() => setIsVisible(false)}
            className="cursor-pointer underline"
          >
            Hide
          </button>
        ) : (
          <button
            onClick={() => setIsVisible(true)}
            className="cursor-pointer underline"
          >
            Show
          </button>
        )}
        {isVisible && <p>{description}</p>}
      </div>
    </>
  );
};

const Faq = () => {
  const [sectionConfig, setSectionConfig] = useState({
    showAbout: false,
    showCreator: false, 
    showWho: false,
  });
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
        isVisible={sectionConfig.showAbout}
        setIsVisible={() => {
          setSectionConfig({
            showAbout: !sectionConfig.showAbout,
            showCreator: false,
            showWho: false,
          });
        }}
      ></Section>
      <Section
        title={"Who made it"}
        description={`Arghya Jana(arry-ease)`}
        isVisible={sectionConfig.showCreator}
        setIsVisible={() => {
          setSectionConfig({
            showAbout: false,
            showCreator: true,
            showWho: false,
          });
        }}
      ></Section>
      <Section
        title={"who is he"}
        description={`he's rockstar`}
        isVisible={sectionConfig.showWho}
        setIsVisible={() => {
          setSectionConfig({
            showAbout: false,
            showCreator: false,
            showWho: true,
          });
        }}
      ></Section>
    </>
  );
};
export default Faq;
