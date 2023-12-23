import { useContext } from "react"
// import Button from "../atoms/Button"
import Image from "../atoms/Image"
import Text from "../atoms/Text"
import PropTypes from 'prop-types'
import DataContext from "../../context/DataContext"


const EachItem = ({image, title, price, itemid, data}) => {
  const {updateDetail} = useContext(DataContext);

  const numFor = Intl.NumberFormat("en-US");

  return (
    <div className="mx-auto my-4 bg-white shadow-lg rounded-md p-3" onClick={()=>{updateDetail(itemid, data)}}>
      <Image className='' src={image} alt='' />
      <Text className='text-cthree font-semibold text-lg' body={title} />
      <p className='text-cthree font-semibold'> &#8358; {numFor.format(isNaN(price) ? 0 : price)} </p>
    </div>
  )
}

EachItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  itemid: PropTypes.number,
  data: PropTypes.object,
}
export default EachItem
