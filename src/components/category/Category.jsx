import { useDispatch, useSelector } from "react-redux";
import { updateCategory } from "../../features/filter/filterSlice";
import { useGetCategoriesQuery } from "../../services/products/products";

const Category = () => {
  const { category } = useSelector((state) => state.filter);
  const { data, error, isLoading } = useGetCategoriesQuery();
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
        {data?.map((category) => {
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
