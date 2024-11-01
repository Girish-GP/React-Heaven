import { useSelector } from "react-redux";
import CartSectionComponent from "./CartSection.component";
import { Link } from "react-router-dom";
import { EMPRT_CART_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { cartTotal } from "../utils/CartSlice";
import { useState, useEffect } from "react";
const CartComponent = () => {
  const dispatch = useDispatch();

  const [couponValue, setCouponValue] = useState("");

  const cartData = useSelector((store) => store?.cart?.items?.itemsList);
  const cartTotalAmount = useSelector((store) => store?.cart?.items?.cartTotal);

  useEffect(() => {
    sum("");
  }, []);

  //function to calculate sum
  const sum = (val, event) => {
    event?.preventDefault();
    return dispatch(cartTotal(val));
  };

  return (
    <div className="flex justify-center items-center flex-col mt-8">
      <div className="font-bold text-3xl text-red-400 mb-2">YOUR CART</div>
      {cartData?.length ? (
        cartData.map((obj) => {
          return (
            <CartSectionComponent
              key={obj?.itemData?.card?.info?.name}
              obj={obj}
            />
          );
        })
      ) : (
        <div className="w-2/4 h-full shadow-sm p-8 flex flex-col items-center">
          <img className="w-2/4" src={EMPRT_CART_URL} alt="cart empty"></img>
          <p className="text-xl mt-4 font-medium">Your cart is empty</p>
          <p className="text-sm mt-2 mb-8">
            You can go to home page to view more restaurants
          </p>
          <Link
            className="text-xl font-bold bg-red-400 text-white rounded-sm p-2"
            to="/"
          >
            SEE RESTUARANTS NEAR YOU
          </Link>
        </div>
      )}
      {cartData?.length ? (
        <div className="w-full flex justify-center">
          <div className="w-2/4 flex justify-between mt-8">
            <div className="border-none mt-4 rounded-xl shadow-lg w-80 p-4 flex gap-2 bg-orange-100">
              <input
                placeholder="Enter coupon code"
                className="ps-2 w-full rounded-xl border-none outline-0 bg-gray-100"
                id="coupon-input"
                type="text"
                value={couponValue}
                onChange={(event) => {
                  event?.preventDefault();
                  setCouponValue(event.target.value);
                }}
              ></input>
              <button
                className="border-2 bg-slate-50 font-medium text-xl rounded-lg px-2 mt-2 mb-2"
                onClick={() => {
                  sum(couponValue);
                  setCouponValue("");
                }}
              >
                APPLY
              </button>
            </div>
            <div className="border-none mt-4 rounded-xl shadow-lg w-80 px-4 py-2 bg-orange-100">
              <p className="font-bold text-xl">Cart Total</p>
              <div className="mt-2 flex justify-between">
                <p>Total</p>
                <span>{cartTotalAmount}</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CartComponent;
