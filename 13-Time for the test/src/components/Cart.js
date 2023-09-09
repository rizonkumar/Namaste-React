import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  // reading the cart from the store
  const cartItems = useSelector((store) => store.cart.items);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {cartItems.length > 0 ? (
        <div>
          <button
            className="px-4 py-2 mb-4 bg-red-500 hover:bg-red-600 text-white rounded-lg"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-4">
              <ItemList items={cartItems} />
            </div>
          </div>
        </div>
      ) : (
        <p className="text-gray-500">Your cart is empty. Add Items to the Cart</p>
      )}
    </div>
  );
};

export default Cart;
