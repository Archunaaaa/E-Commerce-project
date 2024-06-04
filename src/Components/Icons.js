import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart, faTimes } from "@fortawesome/free-solid-svg-icons";
import Cart from "../Common/Cart";
import { useSelector } from "react-redux";
import "../Components/FontAwesome"; // Ensure this file sets up FontAwesome library

const Icons = () => {
  const { totalItems } = useSelector((state) => state.cart);

  const [showSidebar, setShowSidebar] = useState(false);

  const showRightBar = () => {
    setShowSidebar(true);
  };

  const hideRightBar = () => {
    setShowSidebar(false);
  };

  return (
    <div className="flex items-center">
      <div className="mx-2">
        <FontAwesomeIcon
          icon={faHeart}
          className="hover:text-red-500 text-2xl cursor-pointer"
        />
      </div>
      <div className="relative mx-2">
        <FontAwesomeIcon
          icon={faShoppingCart}
          className="hover:text-red-500 text-2xl cursor-pointer"
          onClick={showRightBar}
        />
        {showSidebar && (
          <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50">
            <div className="relative h-full">
              <Cart />
              <span
                className="absolute top-2 right-2 cursor-pointer text-gray-600"
                onClick={hideRightBar}
              >   
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </div>
          </div>
        )}
        <span className="absolute -top-1 -right-2 bg-red-600 text-white rounded-full p-1 text-xs">
          {totalItems}
        </span>
      </div>
    </div>
  );
};

export default Icons;
