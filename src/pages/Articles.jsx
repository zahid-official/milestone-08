import { Helmet } from "react-helmet-async";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";

const Articles = () => {
  return (
    <div>
      <Helmet>
        <title>Article | Gadgetix</title>
      </Helmet>

      <div className="py-24 text-center space-y-4 bg-purple-600 text-white">
        <h2 className="text-4xl font-semibold">News & articles</h2>
        <p>
          Discover the cutting-edge gadgets designed to elevate your experience.
          From innovative smart devices to the trendiest{" "}
          <br className="lg:block hidden" /> accessories, we have everything you
          need to stay ahead!
        </p>
      </div>

      <div className="sm:mx-20 gap-5 mx-3 py-24">
        <div className="flex lg:flex-row flex-col gap- items-center mb-8">
          <div className="flex-1">
            <img
              src={blog1}
              alt="blog"
              className="rounded-3xl w-full object-cover"
            />
          </div>

          <div className="flex-1 space-y-5 rounded-3xl px-8">
            <div>
              <span className="px-8 py-3 bg-base-300 rounded-3xl inline-block font-bold">
                Article
              </span>
              <span className=" inline-block font-bold ml-4">20 Nov 2024</span>
            </div>
            <h2 className="text-3xl font-bold">
              Unlock the Future: Explore the Latest Gadgets Revolutionizing the
              Tech World
            </h2>
            <p>
              Explore the latest gadgets designed to elevate your tech
              experience. From smart devices and wearables to innovative
              accessories, we have everything you need to stay ahead. Upgrade
              your lifestyle with cutting-edge technology and the coolest new
              gear today!
            </p>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col-reverse gap-8 items-center">
          <div className="flex-1 space-y-5 rounded-3xl px-8">
            <div>
              <span className="px-8 py-3 bg-base-300 rounded-3xl inline-block font-bold">
                Article
              </span>
              <span className=" inline-block font-bold ml-4">20 Nov 2024</span>
            </div>
            <h2 className="text-3xl font-bold">
              Revolutionizing Tech: Explore the Latest Gadgets Shaping the
              Future
            </h2>
            <p>
              Discover the cutting-edge gadgets that will elevate your
              experience to new heights. From innovative smart devices to
              stylish accessories, we’ve curated the best of the best. Explore
              the future of tech
            </p>
          </div>

          <div className="flex-1">
            <img src={blog2} alt="blog" className="rounded-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
