import PropTypes from "prop-types";

const Image = ({ value, onChange }) => {
  return (
    <div className="flex flex-col py-2 gap-2">
      <label htmlFor="image">Image</label>
      <input
        type="url"
        name="image"
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

Image.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Image;
