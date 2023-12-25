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
  // const [quantity, setQuantity] = useState(1)

  //the cart array
  const [cartArray, setCartArray] = useState([]);
  const updateData = JSON.parse(localStorage.getItem("ar"));
  const [newData, setNewData] = useState({ updateData });

  useEffect(() => {
    cartArray;
  localStorage.setItem('cartArr', JSON.stringify(cartArray))
    
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
      setTimeout(() => setDuplicateItem(false), 500);
      clearTimeout();
    } else {
      Data.map((eachId) => {
        if (eachId.id === id) {
          setSuccess(true);
          setTimeout(() => setSuccess(false), 500);
          clearTimeout();
          setCartArray([...cartArray, { ...eachId, qty: 1 }]);
        }
      });
    }
  };

  //deleting item from cart
  function deleteItem(cart) {
    const getItem = cartArray.find((item) => item.id === cart.id);
    console.log(getItem);
    if (getItem) {
      setCartArray(cartArray.filter((itemDel) => itemDel.id !== cart.id));
    }
  }

  //increasing quantity in cart
  function itemIncrease(id, cart) {
    setNewData({ ...cart, qty: cart.qty++ });
    for (let each of cartArray) {
      if (each.id === id) {
        each = newData;
      }
    }
  }

  //decreasing quantity in cart
  function itemDecrease(id, cart) {
    if (cart.qty > 1) {
      setNewData({ ...cart, qty: cart.qty-- });

      for (let each of cartArray) {
        if (each.id === id) {
          each = newData;
        }
      }
    } else {
      setCartArray(cartArray.filter((itemDel) => itemDel.id !== cart.id));
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
