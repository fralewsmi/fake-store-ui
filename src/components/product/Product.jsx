import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Product = ({ id, title, price, description, image }) => {
  const navigate = useNavigate();
  const onNavigateToEdit = () => navigate(`/edit/${id}`);

  const onKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onNavigateToEdit();
    }
  };

  return (
    <div
      role="button"
      className="w-full rounded shadow-lg hover:bg-sky-100 cursor-pointer"
      onClick={onNavigateToEdit}
      onKeyDown={onKeyDown}
      tabIndex="0"
    >
      <div className="flex">
        <div className="flex shrink-0 items-center">
          <img className="h-32 w-full object-cover" src={image} alt={title} />
        </div>
        <div className="p-4">
          <h3 className="text-sky-600 font-bold">{title}</h3>
          <h4 className="text-xl font-bold">
            {Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(price)}
          </h4>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default Product;
