import { useContext } from "react";
import TotalBox from "../molecules/TotalBox";
import DataContext from "../../context/DataContext";

const Checkout = () => {
     const numFor = Intl.NumberFormat("en-US");
   const {cartArray} = useContext(DataContext)
  const total = cartArray.map(each=> <TotalBox key={each.id} each = {each} />)
  const sum = ()=> total.reduce((total, item)=> total + item.props.each.qty * item.props.each.price,0)
  console.log(sum())
  return (
    <div className="px-6 lg:px-14 xl:px-24 overflow-y-scroll h-dvh">
        <p className="text-cfour font-bold py-4">Product Summary</p>
      {total}
      <p className='p-6 text-center fixed bottom-0 w-full left-0 bg-blue-300 text-cfour font-semibold lg:text-xl ' >
      <span className="text-cfour font-bold">Total: </span>&#8358; {numFor.format(isNaN(sum()) ? 0 : sum())}
      </p>
      
    </div>
  )
}

export default Checkout
