import PropValidation from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
    const {id ,image, title, price} = product;
  return (
    <div>
      <div className="card card-compact bg-base-100 border p-4 pb-16">
        <div>
          <img
          className=""
            src={image}
            alt="Product"
          />
        </div>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-base font-medium">Price: ${price}</p>
          <div className="card-actions mt-5">
            <Link to={`/details/${id}`} className="btn text-purple-600 px-10 bg-transparent hover:bg-purple-600 hover:text-white rounded-full border-purple-600">View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  product: PropValidation.object,
};

export default Card;
