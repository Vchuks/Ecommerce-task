import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Data } from "../components/atoms/Data";
import { useNavigate } from "react-router-dom";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [success, setSuccess] = useState(false);
  const [duplicateItem, setDuplicateItem] = useState(false);
  const navigate = useNavigate();
  const [item, setItem] = useState({});
  const [quantity, setQuantity] = useState(1)
  

  //the cart array
  const [cartArray, setCartArray] = useState([]);

  useEffect(() => {
    cartArray;
  }, [cartArray]);

  //each item's page
  const updateDetail = (id, eachItem) => {
    if (id) {
      setItem(eachItem);
      navigate(`/detail/${id}`);
    }
  };
  useEffect(() => {
    item;
    console.log(item);
  }, [item]);

  //add to cart
  const handleItem = (id) => {
    const duplicate = cartArray.some((each) => each.id === id);
    if (duplicate) {
      setDuplicateItem(true);
      setTimeout(() => setDuplicateItem(false), 2000);
      clearTimeout();
    } else {
      Data.map((eachId) => {
        if (eachId.id === id) {
          setSuccess(true);
          setTimeout(() => setSuccess(false), 2000);
          clearTimeout();
          setCartArray([...cartArray, eachId]);
        }
      });
    }
  };

  //deleting item from cart
  function deleteItem (id) {
      const getItem = cartArray.find(item=> item.id === id)
      console.log(getItem)
    if(getItem){
        cartArray.slice(cartArray.indexOf(getItem), 1)
    }
    console.log(cartArray)
  }

  //increasing quantity in cart
  function itemIncrease (id) {
    const getItem = cartArray.some(item=> item.id === id)
    if(getItem){
        setQuantity((prev)=>prev + 1)
    }
  }

  //decreasing quantity in cart
  function itemDecrease (id) {
    const getItem = cartArray.some(item=> item.id === id)
    if(getItem){
        if(quantity === 0){
            deleteItem(id)
            return
        }else{

            setQuantity((prev)=>prev - 1)
        }
    }
  }
  
  return (
    <DataContext.Provider
      value={{
        success,
        updateDetail,
        item,
        cartArray,
        duplicateItem,
        handleItem,
        itemIncrease,
        itemDecrease,
        deleteItem,
        quantity
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

DataProvider.propTypes = {
  children: PropTypes.any,
};

export default DataContext;
