import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { IoCartOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";

import {
  AddtoCartContext,
  AddtoWishContext,
  CartContext,
  TotalContext,
  WishContext,
} from "../../../../Layout";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const CardDetails = () => {
  // useContext
  const [total, setTotal] = useContext(TotalContext);
  const [cartCount, setCartCount] = useContext(CartContext);
  const [wishCount, setWishCount] = useContext(WishContext);
  const [addToCart, setAddToCart] = useContext(AddtoCartContext);
  const [addToWish, setAddToWish] = useContext(AddtoWishContext);

  // view single card details based on params
  const { id } = useParams();
  const data = useLoaderData();
  const [card, setCard] = useState({});

  useEffect(() => {
    // view card based on params
    const found = [...data].find((item) => item.id === parseInt(id));
    setCard(found);

    // disable wishlist btn by local storage
    const isAvailable = addToWish.find(
      (item) => item.id === parseInt(found.id)
    );
    if (isAvailable) {
      setWish(true);
    }
  }, [data, id, addToWish]);

  // disable cart btn by state & func
  const handleCart = (card) => {
    setAddToCart([...addToCart, card]);
    setTotal(total + price);
    setCartCount(cartCount + 1);
    toast.success(`${card.title} has been successfully added to the Cart`);
  };

  // disable wishlist btn by state & func
  const [wish, setWish] = useState(false);
  const handleWish = (card) => {
    setAddToWish([...addToWish, card]);
    setWish(true);
    setWishCount(wishCount + 1);
    toast.success(`You’ve added ${card.title} to your Wishlist successfully.`);
  };

  // distructure card
  const {
    image,
    title,
    price,
    specification,
    description,
    rating,
    availability,
  } = card;

  return (
    <div className="pb-[150px]">
      <Helmet>
        <title>Details | Gadgetix</title>
      </Helmet>

      {/* banner */}
      <div className="bannerTitle bg-purple-600 text-white text-center pt-20 sm:pb-72 pb-28 space-y-8">
        <h2 className="text-4xl font-bold mx-3">Product Details</h2>
        <p className="mx-3">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br className="lg:block hidden" /> the
          coolest accessories, we have it all!
        </p>
      </div>

      {/* card-details */}
      <div className="sm:mx-auto mx-4 py-12 lg:max-w-[80%] sm:max-w-[80%] sm:-mt-[220px] mt-10 sm:p-6 rounded-2xl bg-white">
        <div className="hero">
          <div className="hero-content gap-10 flex-col lg:flex-row">
            <img src={image} className="sm:max-w-sm rounded-lg shadow-2xl" />
            <div className="space-y-3">
              <h1 className="text-3xl font-bold">{title}</h1>
              <p>Price: ${price}</p>
              {availability ? (
                <span className="text-[#309c08] bg-[#eaf5e6] border border-[#309c08] px-4 py-2 inline-block rounded-3xl">
                  In Stock
                </span>
              ) : (
                <span className="text-black font-semibold bg-[#ca5656] px-4 py-2 inline-block rounded-3xl">
                  Stock Out
                </span>
              )}

              <p className="">{description}</p>
              <div>
                <p className="font-bold mb-1">Specification:</p>
                {specification &&
                  specification.map((item, idx) => <li key={idx}>{item}</li>)}
              </div>

              <div>
                <p className="font-bold">Rating</p>
                <div className="flex gap-4 items-center mb-8">
                  <span>
                    <Rating style={{ maxWidth: 150 }} value={rating} readOnly />{" "}
                  </span>
                  <span className="bg-[#ececec] p-2 rounded-xl font-bold px-4">
                    {rating}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <button
                  onClick={() => handleCart(card)}
                  className="btn bg-purple-600 text-white px-10 rounded-full"
                >
                  Add to Cart <IoCartOutline size={28}></IoCartOutline>
                </button>

                <button
                  disabled={wish}
                  onClick={() => handleWish(card)}
                  className="btn h-[50px] w-[50px] p-0 rounded-full bg-transparent"
                >
                  <MdFavoriteBorder size={28}></MdFavoriteBorder>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardDetails;
