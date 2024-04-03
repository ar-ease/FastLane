const ShimmerUi = () => {
  return (
    <>
      <div className="restaurant-list">
        {Array(10)
          .fill("")
          .map((e, index) => (
            <div className="shimmer-card " key={index}></div>
          ))}
      </div>
    </>
  );
};

export default ShimmerUi;
