import PropTypes from "prop-types";

const Product = ({ title, price, description, image }) => {
  return (
    <div className="w-full rounded shadow-lg hover:bg-sky-100">
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
  title: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default Product;
