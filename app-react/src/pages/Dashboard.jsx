import { FaSortAmountDown } from "react-icons/fa";
import { useContext, useState } from "react";
import DashCard from "../components/Outlet/DashCard/DashCard";
import payment from "../assets/Group.png";

import {
  AddtoCartContext,
  AddtoWishContext,
  CartContext,
  TotalContext,
  WishContext,
} from "../Layout";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  // use context
  const [total, setTotal] = useContext(TotalContext);
  const [, setCartCount] = useContext(CartContext);
  const [, setWishCount] = useContext(WishContext);
  const [addToCart, setAddToCart] = useContext(AddtoCartContext);
  const [addToWish, setAddToWish] = useContext(AddtoWishContext);
  const navigate = useNavigate();

  //  sort
  const handleSort = () => {
    const sorted = [...addToCart].sort((a, b) => b.price - a.price);
    setAddToCart(sorted);
  };

  // display cart & wishlist based on condition
  const [itemsContainer, setItemsContainer] = useState(true);
  const handleCartItems = () => {
    setItemsContainer(true);
  };

  const handleWishlistItems = () => {
    setItemsContainer(false);
  };

  // empty total, card & wishlist
  const handleEmpty = () => {
    setTotal(0);
    setCartCount(0);
    setWishCount(0);
    setAddToCart([]);
    setAddToWish([]);
    navigate("/");
  };

  return (
    <div>
      <Helmet>
        <title>Dashboard | Gadgetix</title>
      </Helmet>

      {/* banner */}
      <div className="bannerTitle bg-purple-600 text-white text-center pt-20 pb-32 space-y-8">
        <h2 className="text-4xl font-bold mx-3">Dashboard</h2>
        <p className="mx-3">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br className="lg:block hidden" /> the
          coolest accessories, we have it all!
        </p>

        <div className="space-x-4">
          <button
            onClick={() => handleCartItems()}
            className={`btn rounded-full sm:px-16 px-10 font-bold ${!itemsContainer? 'bg-purple-600 text-white' : 'bg-white text-purple-600'}`}
          >
            Cart
          </button>
          <button
            onClick={() => handleWishlistItems()}
            className={`btn rounded-full sm:px-16 px-10 font-bold ${itemsContainer? 'bg-purple-600 text-white' : 'bg-white text-purple-600'}`}
          >
            Wishlist
          </button>
        </div>
      </div>

      {/* carts container */}
      <div className="sm:mx-20 mx-3 pt-14 pb-24">
        <div
          className={
            itemsContainer
              ? "flex gap-5 md:flex-row flex-col items-center justify-between"
              : "hidden"
          }
        >
          <h2 className="text-2xl font-semibold">Cart</h2>
          <div className="flex gap-5 items-center  md:flex-row flex-col">
            <span className="text-xl font-semibold">
              Total Cost: ${total.toFixed(2)}
            </span>
            <button
              onClick={handleSort}
              className="btn border-2 px-5 border-purple-600 text-purple-600 rounded-full text-lg font-semibold"
            >
              Sort by Price <FaSortAmountDown size={20}></FaSortAmountDown>
            </button>

            <button
              disabled={total > 0 ? false : true}
              className="btn border-2 px-5 bg-purple-600 border-purple-600 text-white rounded-full text-lg font-semibold"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Purchase
            </button>
          </div>
        </div>

        {/* modal */}
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box space-y-4 text-center py-16">
            <img src={payment} alt="payment" className="mx-auto" />
            <p className="py-4 text-3xl font-bold border-b">
              Payment Successfully
            </p>
            <p>Thanks for Purchasing.</p>
            <p>Total Cost: ${total.toFixed(2)}</p>
            <div className="">
              <form method="dialog">
                {/*close modal */}
                <button onClick={handleEmpty} className="btn w-full">
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>

        {/* display cart */}
        <div className="space-y-5 mt-10">
          {itemsContainer
            ? addToCart.map((item, idx) => (
                <DashCard key={idx} cart={item}></DashCard>
              ))
            : addToWish.map((item, idx) => (
                <DashCard key={idx} cart={item}></DashCard>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
