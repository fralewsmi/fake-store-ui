import { useDispatch, useSelector } from "react-redux";
import { updateCategory } from "../../features/filter/filterSlice";

const Category = () => {
  const { categories, category } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col py-2 gap-2">
      <label htmlFor="category">Category</label>
      <select
        id="category"
        name="category"
        value={category || ""}
        onChange={(e) => dispatch(updateCategory(e.target.value))}
        className="form-select"
      >
        <option value="">please select</option>
        {categories?.map((category) => {
          return (
            <option key={category} value={category}>
              {category}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Category;
