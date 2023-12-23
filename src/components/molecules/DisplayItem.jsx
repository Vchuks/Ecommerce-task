
import { Data } from "../atoms/Data";
import EachItem from "./EachItem";

const DisplayItem = () => {
  
  
    // const [item,setItem] = useState([]);

    const list = Data.map((eachItem)=> <EachItem key={eachItem?.id} image={eachItem?.image} data={eachItem} title={eachItem?.name} price={eachItem?.price} itemid={eachItem?.id}/>)
   
  return (
    <div className="px-6 lg:px-14 xl:px-24 py-4 lg:py-10 grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-0 ">
      
    
      {list}
    </div>
  )
}

export default DisplayItem
