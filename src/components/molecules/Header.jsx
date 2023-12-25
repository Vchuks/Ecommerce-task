import Logo from "../atoms/Image";
import exlogo from "../../assets/images/logo-colored.png";
import flag from "../../assets/images/icon.png";
import Button from "../atoms/Button";
import { useContext, useState } from "react";
import { FaUserLarge } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiChevronDown } from "react-icons/fi";
// import { FiChevronRight } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5"
import Text from "../atoms/Text";
import DataContext from "../../context/DataContext";
import { Link } from "react-router-dom";

const Header = () => {
  const [search, setSearch] = useState("");
  const {cartArray} = useContext(DataContext)
 const cartArrayPageReload = JSON.parse(localStorage.getItem('cartArr'))
  
  return (
    <>
      <div className="bg-white sticky top-0 z-10 flex lg:flex-row px-6 lg:px-14 xl:px-24 py-4 lg:py-6 box-border gap-2 justify-between items-center">
        <Logo src={exlogo} className="" alt=''/>
        <div className="hidden lg:flex flex-col lg:flex-row ">
          <input
            type="text"
            className="w-full box-border outline-none  px-4 rounded-s-lg border-2 border-cprimary lg:border-r-0"
            placeholder="Search"
            name="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <select className=" w-[145px] outline-none box-border p-3 text-cfour lg:block border-2 border-cprimary border-l">
            <option className="" value="all_category">
              All Category
            </option>
            <option value="hot_offer">Hot offers</option>
            <option value="gift_box">Gift boxes</option>
            <option value="project">Projects</option>
            <option value="menu">Menu item</option>
            <option value="help">Help</option>
          </select>
          <Button
            body="Search"
            className="box-border text-white w-[200px]  rounded-e-lg lg:block bg-gradient-to-b from-conea to-coneb"
          />
        </div>
        <div className="flex gap-4">
          <div className="text-ctwo w-fit flex flex-col gap-1  items-center">
            <FaUserLarge className="text-xl" />
          </div>
          
          <div className="text-ctwo w-max flex flex-col gap-1 items-center relative">
            <Link to='cart_page'><IoMdCart className="text-2xl" /></Link>
            <span className="absolute -top-2 font-semibold left-5 bg-cprimary px-1 text-white text-xs rounded-[100%]">{cartArrayPageReload?.length || cartArray?.length }</span>
          </div>
        </div>
      </div>
      {/* for smaller screen */}
      <div className="px-6 pb-4 w-full flex lg:hidden relative">
        <IoSearchOutline className="absolute top-[28%] text-cthree left-[35px]" />
          <input
            type="text"
            className="w-full box-border outline-none  px-8 py-3 rounded-lg border-2 border-[#DEE2E7] "
            placeholder="Search"
            name="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          
          
        </div>
      <div className="font-medium w-auto overflow-x-scroll category flex justify-between bg-white text-cfour border px-6 lg:px-14 xl:px-24 py-4 border-[#E0E0E0] border-s-0 border-e-0 ">
        <div className="flex items-center gap-6">
          <div className=" flex items-center gap-2">
            <GiHamburgerMenu className="hidden lg:block" />
            <Text className="w-max  text-cprimary bg-[#EFF2F4] rounded-md p-1" body="All Category" />
          </div>
          <Text className="w-max text-cprimary bg-[#EFF2F4] rounded-md p-1" body="Hot offers" />
          <Text className="w-max  text-cprimary bg-[#EFF2F4] rounded-md p-1" body="Gift boxes" />
          <Text className="w-max  text-cprimary bg-[#EFF2F4] rounded-md p-1" body="Projects" />
          <Text className="w-max  text-cprimary bg-[#EFF2F4] rounded-md p-1" body="Menu item" />
          <div className="flex items-center gap-2">
            <Text className="w-max  text-cprimary bg-[#EFF2F4] rounded-md p-1" body="Help" />
            <FiChevronDown className="text-ctwo" />
          </div>
        </div>
        <div className=" hidden lg:flex gap-6">
        <div className="flex items-center gap-1">
          <Text className="" body="English, USD" />
          <FiChevronDown className="text-ctwo" />
        </div>
        <div className="flex items-center gap-1">
          <Text className="" body="Ship to" />
          <Logo src={flag} alt='' className=""/>
          <FiChevronDown className="text-ctwo" />
        </div>
        </div>
      </div>
      {/* <div className="hidden bg-[#F7FAFC] lg:px-14 xl:px-24 pt-4 lg:flex gap-2">
        <div className="flex items-center gap-1 text-ctwo">
          <Text className="" body="Home" />
          <FiChevronRight className="" />
        </div>
        <div className="flex items-center gap-1 text-ctwo">
          <Text className="" body="Clothings" />
          <FiChevronRight className="" />
        </div>
        <div className="flex items-center gap-1 text-ctwo">
          <Text className="" body="Men's wear" />
          <FiChevronRight className="" />
        </div>
        <div className="flex items-center gap-1 text-ctwo">
          <Text className="" body="Summer clothing" />
          <FiChevronRight className="" />
        </div>
      </div> */}
    </>
  );
};

export default Header;
