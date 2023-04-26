import PropTypes from "prop-types";

const Title = ({ value, onChange }) => {
  return (
    <div className="flex flex-col py-2 gap-2">
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

Title.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Title;
