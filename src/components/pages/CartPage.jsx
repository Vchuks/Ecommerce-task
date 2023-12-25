import { useContext } from "react";
import DataContext from "../../context/DataContext";
import CartItems from "../molecules/CartItems";
import Button from "../atoms/Button";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const CartPage = () => {
    const { cartArray } = useContext(DataContext);

    let getItems;
    if (cartArray.length === 0){
        getItems = <p className="text-cthree py-4 text-2xl text-center">Cart is empty!</p>
    }else {
  getItems = cartArray.map((each) => <CartItems key={each.id} cartItems={each} />)}
  return (
    <div className="lg:px-14 xl:px-24 overflow-y-scroll h-dvh">
        <Link to='/' className="flex items-center gap-2 pb-2 px-6"><FaArrowLeftLong/>Back</Link>

      {getItems} 
      {cartArray.length > 0 &&
      <Link to='/checkout'><Button body='Checkout' className='px-6 fixed bottom-0 w-full left-0 bg-blue-300 lg:text-xl text-cfour font-semibold py-4' /></Link>
}
    </div>
  )
}

export default CartPage
