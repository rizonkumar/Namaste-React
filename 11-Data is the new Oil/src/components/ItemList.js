import { CDN_URL } from "../utils/constants";

const ItemList = ({ items,dummy }) => {
  console.log(items)
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
                ₹{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
          </div>
          <p className="text-gray-600">{item?.card?.info?.description}</p>
          <button className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg">
            Add +
          </button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;



