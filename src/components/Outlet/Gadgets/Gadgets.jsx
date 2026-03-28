import { NavLink, Outlet } from "react-router-dom";
import "./gadgets.css";

const Gadgets = () => {
  return (
    <>
      <div className="sm:mx-20 mx-4 my-28 space-y-12">
        <h2 className="text-4xl font-bold text-center">
          Explore Cutting-Edge Gadgets
        </h2>

        <div className="flex md:flex-row flex-col gap-10">
          {/* sidebar */}
          <div>
            <div className="sidebar border flex flex-col gap-5 bg-white rounded-2xl py-8">
              <NavLink
                className="btn px-12 mx-5 rounded-full"
                to="/"
              >
                All Product
              </NavLink>
              <NavLink
                className="btn px-12 mx-5 rounded-full"
                to="/gadgets/laptop"
              >
                Laptops
              </NavLink>
              <NavLink
                className="btn px-12 mx-5 rounded-full"
                to="/gadgets/phone"
              >
                Phones
              </NavLink>
              <NavLink
                className="btn px-12 mx-5 rounded-full"
                to="/gadgets/watch"
              >
                Watches
              </NavLink>
              <NavLink
                className="btn px-12 mx-5 rounded-full"
                to="/gadgets/earbuds"
              >
                Earbuds
              </NavLink>
            </div>
          </div>

          {/* cards-container */}
          <div className="flex-1">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gadgets;
