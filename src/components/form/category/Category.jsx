import PropTypes from "prop-types";

const Category = ({ value, onChange }) => {
  return (
    <div className="flex flex-col py-2 gap-2">
      <label htmlFor="category">Category</label>
      <input
        type="text"
        name="category"
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

Category.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Category;
