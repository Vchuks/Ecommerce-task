import { useContext } from "react";
import DataContext from "../../context/DataContext";
import CartItems from "../molecules/CartItems";
import Button from "../atoms/Button";

const CartPage = () => {
    const { cartArray } = useContext(DataContext);
    // console.log(CartArray)
    let getItems;
    if (cartArray.length === 0){
        getItems = <p className="text-cthree py-4 text-2xl text-center">Cart is empty!</p>
    }else {
  getItems = cartArray.map((each) => <CartItems key={each.id} cartItems={each} />)}
  return (
    <div className="lg:px-14 xl:px-24">
      {getItems}
      {cartArray.length > 0 &&
      <Button body='Checkout' className='px-6 sticky bottom-0 w-full mb-2 bg-green-500 text-white py-4' />
}
    </div>
  )
}

export default CartPage
