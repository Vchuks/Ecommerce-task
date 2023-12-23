import Image from "../atoms/Image";
import PropTypes from "prop-types";
import Text from "../atoms/Text";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { useContext } from "react";
import DataContext from "../../context/DataContext";

const CartItems = ({ cartItems }) => {
  const { image, name, price, id } = cartItems;
  const numFor = Intl.NumberFormat("en-US");
  const {itemDecrease, itemIncrease, deleteItem, quantity} = useContext(DataContext)

  return (
    <div className="flex flex-col gap-4 px-6 lg:px-14 xl:px-24">
      <div className="flex my-3 items-center bg-white shadow-2xl rounded-md">
        <div className="w-full">
          <Image src={image} alt="" className="" />
        </div>
        <div className="w-full p-4">
          <Text className="font-semibold" body={name} />
          <p className="font-medium">
            &#8358; {numFor.format(isNaN(price) ? 0 : price)}
          </p>
          <div className="w-full lg:w-44 flex rounded shadow-sm justify-between pt-4">
            <button
              className="bg-blue-600 text-white px-2 py-[5px] rounded"
              onClick={() => {
                itemDecrease(id);
              }}
            >
              <FaMinus className="text-sm" />
            </button>
            <span>{quantity}</span>
            <button className="bg-blue-600 text-white px-2 py-[5px] rounded" onClick={() => {
                itemIncrease(id);
              }}>
              <FaPlus className="text-sm" />
            </button>
          </div>
          <button className="w-full lg:w-44 bg-orange-600 flex rounded shadow-sm justify-center text-white mt-4" onClick={() => {
                deleteItem(id);
              }}>
            Remove from cart
          </button>
        </div>
      </div>
    </div>
  );
};
CartItems.propTypes = {
  cartItems: PropTypes.object,
};

export default CartItems;
