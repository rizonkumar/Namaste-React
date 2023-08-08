import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  return (
    <div className="py-4 px-6 bg-white rounded-lg shadow-md">
      {items.map((item) => (
        <div key={item?.card?.info?.id} className="mb-4">
          <div className="flex items-center mb-2">
            <img
              src={CDN_URL + item.card.info.imageId}
              alt="food_image"
              className="w-16 h-16 object-cover rounded-t-sm mr-2"
            />
            <div className="flex flex-col">
              <span className="font-semibold">{item?.card?.info?.name}</span>
              <span className="font-semibold">
                ₹
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
          </div>
          <p className="text-gray-600">{item?.card?.info?.description}</p>
          <div className="flex justify-between">
            <button
              className="px-4 py-2 mt-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg"
              onClick={() => handleAddItem(item)}
            >
              Add to Cart
            </button>
            <button
              className="px-4 py-2 mt-2 bg-red-500 hover:bg-red-600 text-white rounded-lg"
              onClick={() => handleRemoveItem(item?.card?.info?.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
