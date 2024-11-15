import { Helmet } from "react-helmet-async";
import Banner from "../components/Outlet/Banner/Banner";
import Gadgets from "../components/Outlet/Gadgets/Gadgets";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Gadgetix</title>
      </Helmet>
      <div className="pb-32">
        <Banner></Banner>
        <Gadgets></Gadgets>
      </div>
    </>
  );
};

export default Home;
