import PropTypes from "prop-types";

const Price = ({ value, onChange }) => {
  return (
    <div className="flex flex-col py-2 gap-2">
      <label htmlFor="price">Price</label>
      <input
        type="number"
        name="price"
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

Price.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Price;
