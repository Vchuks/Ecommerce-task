import Button from "../atoms/Button";
import Logo from "../atoms/Image";
import PropTypes from "prop-types";
import DataContext from "../../context/DataContext";
import { useContext, useRef } from "react";
import Text from "../atoms/Text";
import { BsCheck2 } from "react-icons/bs";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const DisplayEachItem = () => {
  const { item, success, handleItem, duplicateItem } = useContext(DataContext);
  const numFor = Intl.NumberFormat("en-US");
  const successref = useRef();
//   const viewref = useRef();

  return (<>
      {success && (
        <p
          ref={successref}
          className="bg-blue-200 success sticky text-center top-0 w-full py-2 mt-4 z-20   lg:text-lg "
        >
          Successfully added!
        </p>
      )}
      {duplicateItem && (
        <p
          ref={successref}
          className="bg-red-200 success sticky text-center top-0 w-full py-2 mt-4 z-20   lg:text-lg "
        >
          Already in cart!
        </p>
      )}
    <div className="px-6 lg:px-14 xl:px-24 pt-6 pb-24 bg-[#F7FAFC]">
        <Link to='/' className="flex items-center gap-2 pb-2"><FaArrowLeftLong/>Back</Link>
      <div className="flex flex-col lg:flex-row gap-4 bg-white rounded p-4 border border-[#DEE2E7]">
        <div className="w-full bg-white">
          <Logo
            src={item.image}
            className="w-full border rounded p-3 m-auto border-[#DEE2E7]"
            alt=""
          />
        </div>
        <div className="w-full">
          <div className="flex items-center gap-1 text-[#00B517]">
            <BsCheck2 /> <Text className="" body="In stock" />
          </div>
          <Text className="text-xl font-semibold text-cfour" body={item.name} />

          <div className="flex justify-between bg-[#f8f2ea] p-4">
            <div className="w-full text-center">
              <p className="text-cthree text-lg font-semibold">
                &#8358; {numFor.format(isNaN(item.price) ? 0 : item.price)}
              </p>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-between border-b py-3">
            <Text className="text-ctwo w-full" body="Price:" />
            <Text className="text-cthree w-full" body="Negotiable" />
          </div>
          <div className="hidden lg:block border-b py-2">
            <div className="flex items-center justify-between py-1">
              <Text className="text-ctwo w-full" body="Type:" />
              <Text className="text-cthree w-full" body="Classic phones" />
            </div>
            <div className="flex items-center justify-between py-1">
              <Text className="text-ctwo w-full" body="Material:" />
              <Text className="text-cthree w-full" body="Plastic material" />
            </div>
            <div className="flex items-center justify-between py-1">
              <Text className="text-ctwo w-full" body="Design:" />
              <Text className="text-cthree w-full" body="Modern nice" />
            </div>
          </div>
          <div className="hidden lg:block border-b py-2">
            <div className="flex items-center justify-between py-1">
              <Text className="text-ctwo w-full" body="Customization:" />
              <Text
                className="text-cthree w-full"
                body="Customized logo and design custom packages"
              />
            </div>
            <div className="flex items-center justify-between py-1">
              <Text className="text-ctwo w-full" body="Protection:" />
              <Text className="text-cthree w-full" body="Refund Policy" />
            </div>
            <div className="flex items-center justify-between py-1">
              <Text className="text-ctwo w-full" body="Warranty:" />
              <Text
                className="text-cthree w-full"
                body="2 years full warranty "
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-3/5">
          <div className="border border-[#DEE2E7] rounded p-2">
            <div className="hidden lg:flex gap-2 border-b pb-3 border-[#DEE2E7]">
              <Text
                className="text-[#4ca7a799] px-4 py-1 text-[28px] font-semibold rounded bg-[#C6F3F1]"
                body="R"
              />
              <div className="text-cfour">
                <Text className="" body="Supplier " />
                <p>Guanjoi Trading LLC</p>
              </div>
            </div>
            <div className="hidden lg:block py-2">
              <div className="flex items-center justify-between gap-2 py-1">
                <Text className="text-cthree w-full" body="Germany, Berlin" />
              </div>
              <div className="flex text-cthree gap-3 items-center justify-between py-1">
                <MdOutlineVerifiedUser className="text-xl" />
                <Text className="text-cthree w-full" body="Verified Seller" />
              </div>
              <div className="flex text-cthree gap-3 items-center justify-between py-1">
                <TbWorld className="text-xl" />
                <Text
                  className="text-cthree w-full"
                  body="Worldwide shipping "
                />
              </div>
            </div>
            <Button
              className="bg-conea py-2  w-full text-white rounded"
              body="Add to cart"
              onClick={() => handleItem(item.id)}
            />
            {/* {viewCart && <Button
            ref={viewref}
              className="bg-conea py-2  w-full text-white rounded"
              body="View cart"
            //   onClick={}
            />} */}

            <Button
              className="w-full hidden lg:block bg-white border mb-2 border-[#DEE2E7] py-2 text-cprimary rounded-md"
              body="Seller's profile"
            />
          </div>
          <div className="flex justify-center gap-2 py-4 items-center text-cprimary font-medium">
            <AiOutlineHeart className="text-xl" />
            <Text className="" body="Save for later" />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="w-full mt-4 bg-white text-three rounded p-4 border border-[#DEE2E7]">
          <div className="border-b py-2 border-[#DEE2E7]">
            <a className="p-2 border-b-2 border-cprimary text-cprimary">
              Description
            </a>
            <a className="p-2">Reviews</a>
            <a className="p-2">Shipping</a>
            <a className="p-2">About seller</a>
          </div>
          
          <div className="w-full lg:w-2/4 border border-[#DEE2E7] rounded my-4">
            <div className="border-b border-[#DEE2E7] flex">
              <Text className="w-2/4 px-2 py-2 bg-[#EFF2F4] " body="Model" />
              <Text className="w-full px-2 py-2" body="#8786867" />
            </div>
            <div className="border-b border-[#DEE2E7] flex">
              <Text className="w-2/4 px-2 py-2 bg-[#EFF2F4] " body="Style" />
              <Text className="w-full px-2 py-2" body="Classic style" />
            </div>
            <div className="border-b border-[#DEE2E7] flex">
              <Text
                className="w-2/4 px-2 py-2 bg-[#EFF2F4] "
                body="Certificate"
              />
              <Text className="w-full px-2 py-2" body="ISO-898921212" />
            </div>
            <div className="border-b border-[#DEE2E7] flex">
              <Text className="w-2/4 px-2 py-2 bg-[#EFF2F4] " body="Size" />
              <Text className="w-full px-2 py-2" body="34mm x 450mm x 19mm" />
            </div>
            <div className=" flex">
              <Text className="w-2/4 px-2 py-2 bg-[#EFF2F4] " body="Memory" />
              <Text className="w-full px-2 py-2" body="36GB RAM" />
            </div>
          </div>
          <div>
            <div className="flex gap-2 py-1 items-center">
              <BsCheck2 className="text-xl" />
              <Text className="" body="Some great feature name here" />
            </div>
            <div className="flex gap-2 py-1 items-center">
              <BsCheck2 className="text-xl" />
              <Text
                className=""
                body="Lorem ipsum dolor sit amet, consectetur "
              />
            </div>
            <div className="flex gap-2 py-1 items-center">
              <BsCheck2 className="text-xl" />
              <Text
                className=""
                body="Duis aute irure dolor in reprehenderit"
              />
            </div>
            <div className="flex gap-2 py-1 items-center">
              <BsCheck2 className="text-xl" />
              <Text className="" body="Some great feature name here" />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 pt-4">
          <div className="bg-white p-4 rounded border border-[#DEE2E7]">
            <Text className="font-semibold text-cfour" body="You may like" />
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

DisplayEachItem.propTypes = {
  item: PropTypes.object,
};

export default DisplayEachItem;
