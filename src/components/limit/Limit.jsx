import { useDispatch, useSelector } from "react-redux";
import { updateLimit } from "../../features/filter/filterSlice";

const Limit = () => {
  const limit = useSelector((state) => state.filter.limit);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col py-2 gap-2">
      <label htmlFor="limit">Limit Results</label>
      <select
        id="limit"
        name="limit"
        value={limit}
        onChange={(e) => dispatch(updateLimit(e.target.value))}
        className="form-select"
      >
        {[...Array(10).keys()]
          .map((key) => (key + 1) * 5)
          .map((limit) => {
            return (
              <option key={limit} value={limit}>
                {limit}
              </option>
            );
          })}
      </select>
    </div>
  );
};

export default Limit;
