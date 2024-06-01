import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCartTotal, removeItem, updateQuantity } from '../Redux/CartSlice';
import './../Main.css';

const Cart = () => {
  const dispatch = useDispatch();
  const { data: cartProducts, totalAmount } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cartProducts, dispatch]);

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem({ id: itemId }));
  };

  const increaseQty = (cartProductId, currentQty) => {
    const newQty = currentQty + 1;
    dispatch(updateQuantity({ id: cartProductId, quantity: newQty }));
  };

  const decreaseQty = (cartProductId, currentQty) => {
    const newQty = Math.max(currentQty - 1, 1);
    dispatch(updateQuantity({ id: cartProductId, quantity: newQty }));
  };

  return (
    <div className="bg-white p-4">
      <div className="flex justify-between items-center pb-4 border-b-2">
        <h1 className="text-xl font-semibold">Shopping Cart</h1>
      </div>
      <div className="h-screen overflow-y-auto">
        {cartProducts.length === 0 ? (
          <p className="font-bold text-2xl text-center">Your cart is empty</p>
        ) : (
          <ul className="cart-img p-2">
            {cartProducts.map((item, index) => (
              <li key={index} className="mb-2 flex justify-between items-center">
                <div className="flex items-center">
                  <img className="img" src={item.img} alt={item.name} />
                  <div className="ml-4">
                    <p className="font-semibold">{item.name}</p>
                    <p className="ml-2 text-gray-600">${item.price}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="quantity flex items-center p-1">
                    <button
                      onClick={() => decreaseQty(item.id, item.quantity)}
                      className="btn btn-sm btn-minus rounded-circle bg-light border"
                    >
                      <i className="fa fa-minus"></i>
                    </button>
                    <span className="px-2 text-xl font-bold">
                      {item.quantity || 1}
                    </span>
                    <button
                      onClick={() => increaseQty(item.id, item.quantity)}
                      className="btn btn-sm btn-plus rounded-circle bg-light border"
                    >
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                  <span className="font-bold ml-4">${item.totalPrice}</span>
                </div>
                <div
                  className="bg-black text-white text-xl px-2 py-1 hover:bg-red-500 cursor-pointer"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  <i className="fa fa-close"></i>
                </div>
              </li>
            ))}
            <div className="bg-black text-white text-2xl uppercase p-2 mt-4">
              Total: ${totalAmount}
            </div>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Cart;
