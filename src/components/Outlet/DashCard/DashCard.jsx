import PropValidation from "prop-types";
import { MdOutlineCancel } from "react-icons/md";

const DashCard = ({ cart }) => {
  
  const { image, title, price, description } = cart;

  return (
    <div className="flex  md:flex-row flex-col justify-center items-center md:text-left text-center gap-10 bg-white p-4 rounded-3xl">
      <div className="w-44">
        <img src={image} className=" object-cover rounded-xl" alt="product" />
      </div>

      <div className="flex justify-between items-center flex-1 pr-5">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-[#6b6b6f]">{description}</p>
          <p className="text-lg font-bold"> ${price}</p>
        </div>
        
        <div className="sm:block hidden"><MdOutlineCancel size={30} color="red"></MdOutlineCancel></div>
      </div>
    </div>
  );
};

DashCard.propTypes = {
  cart: PropValidation.object,
};

export default DashCard;
