import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
  const handleClick = () => {
    setShowIndex((prevIndex) => (prevIndex === showItems ? null : showItems));
  };

  return (
    <div className="border border-gray-300 rounded-lg mb-4">
      <div
        className="flex justify-between items-center px-4 py-2 bg-white shadow-md cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-semibold text-center">
          {data?.title} ({data?.itemCards?.length})
        </span>
        <span className="text-2xl">⬇️</span>
      </div>
      {/* Accordion Body we will call it as item list */}
      {showItems && <ItemList items={data.itemCards} dummy={dummy}/>}
    </div>
  );
};

export default RestaurantCategory;
