import { Link } from "react-router-dom";
import banner from "../../../assets/banner.jpg";

const Banner = () => {
  return (
    <div>
      <div className="bannerTitle bg-purple-600 text-white text-center pt-20 sm:pb-72 pb-28 space-y-8">
        <h2 className="sm:text-5xl text-4xl font-bold mx-3">
          Upgrade Your Tech Accessorize with <br className="lg:block hidden" />{" "}
          Gadget Heaven Accessories
        </h2>
        <p className="mx-3">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br className="lg:block hidden" /> the
          coolest accessories, we have it all!
        </p>
        <Link
          to="/dashboard"
          className="btn rounded-full px-8 text-purple-600 font-bold"
        >
          Shop Now
        </Link>
      </div>

      <div className="border sm:mx-auto mx-3 lg:max-w-[60%] sm:max-w-[80%] sm:-mt-[220px] mt-10 p-6 rounded-2xl backdrop-blur-3xl bg-white/20">
        <img
          className="max-h-[600px] w-full object-cover rounded-2xl"
          src={banner}
          alt="banner"
        />
      </div>
    </div>
  );
};

export default Banner;
