import PropTypes from 'prop-types'
const TotalBox = ({each}) => {
  const numFor = Intl.NumberFormat("en-US");

  return (
    <div key={each.id} className="grid text-cthree font-semibold border-b py-2 my-4 lg:text-lg grid-cols-2 px-3 lg:px-14 xl:px-24">
      {console.log(each)}
      <p>Product Name:</p>
      <p>{each?.name}</p>
      <p>Quantity(s):</p>
      <p>{each?.qty} pc(s)</p>
      <p>Price: </p>
      <p>&#8358; {numFor.format(each?.price)}</p>
      <p>Amount: </p>
      <p className='font-bold'>&#8358; {numFor.format(each?.price * each?.qty)} </p>
  </div>
  )
}
TotalBox.propTypes = {
    each: PropTypes.object
}
export default TotalBox
