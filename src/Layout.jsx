import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createContext, useState } from "react";
export const TotalContext = createContext(0);
export const CartContext = createContext(0);
export const WishContext = createContext(0);
export const AddtoCartContext = createContext([]);
export const AddtoWishContext = createContext([]);

const Layout = () => {
  const [total, setTotal] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [wishCount, setWishCount] = useState(0);
  const [addToCart, setAddToCart] = useState([]);
  const [addToWish, setAddToWish] = useState([]);

  return (
    <div>
      <WishContext.Provider value={[wishCount, setWishCount]}>
        <CartContext.Provider value={[cartCount, setCartCount]}>
          <TotalContext.Provider value={[total, setTotal]}>
            {/* header */}
            <header>
              <Navbar></Navbar>
            </header>

            {/* main */}
            <AddtoWishContext.Provider value={[addToWish, setAddToWish]}>
              <AddtoCartContext.Provider value={[addToCart, setAddToCart]}>
                <main className="bg-[#f7f7f7] min-h-[calc(100vh-498px)]">
                  <Outlet></Outlet>
                </main>
              </AddtoCartContext.Provider>
            </AddtoWishContext.Provider>

            {/* footer */}
            <Footer></Footer>

            {/* toast */}
            <ToastContainer
              position="top-center"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </TotalContext.Provider>
        </CartContext.Provider>
      </WishContext.Provider>
    </div>
  );
};

export default Layout;
