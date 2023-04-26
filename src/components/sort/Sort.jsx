import { useDispatch, useSelector } from "react-redux";
import {
  sortAscending,
  sortDescending,
} from "../../features/filter/filterSlice";

const Sort = () => {
  const sort = useSelector((state) => state.filter.sort);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col py-2 gap-2">
      <label htmlFor="asc">
        <input
          type="radio"
          id="asc"
          name="asc"
          value="asc"
          checked={sort === "asc"}
          onChange={() => dispatch(sortAscending())}
          className="form-radio mr-1"
        />
        Ascending
      </label>
      <label htmlFor="desc">
        <input
          type="radio"
          id="desc"
          name="desc"
          value="desc"
          checked={sort === "desc"}
          onChange={() => dispatch(sortDescending())}
          className="form-radio mr-1"
        />
        Descending
      </label>
    </div>
  );
};

export default Sort;
