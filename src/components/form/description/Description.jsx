import PropTypes from "prop-types";

const Description = ({ value, onChange }) => {
  return (
    <div className="flex flex-col py-2 gap-2">
      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

Description.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Description;
