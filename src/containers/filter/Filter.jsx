import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCategories } from "../../features/filter/filterSlice";
import Category from "../../components/category/Category";
import { update } from "../../features/products/productsSlice";
import Limit from "../../components/limit/Limit";
import Sort from "../../components/sort/Sort";

const Filter = () => {
  const { category, limit, sort } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((categories) => dispatch(updateCategories(categories)));
    return () => {
      dispatch(updateCategories([]));
    };
  }, []);

  const doFilter = () => {
    fetch(
      `https://fakestoreapi.com/products${
        category && `/category/${category}`
      }?limit=${limit}&sort=${sort}`
    )
      .then((res) => res.json())
      .then((products) => dispatch(update(products)));
  };

  return (
    <aside className="basis-1/4 flex flex-col items-center gap-4 rounded shadow-lg py-8">
      <form>
        <Category />
        <Limit />
        <Sort />
      </form>
      <button
        onClick={() => doFilter()}
        className="rounded-full shadow bg-sky-600 text-white font-semibold text-sm px-4 py-2 my-2 "
      >
        Filter
      </button>
    </aside>
  );
};

export default Filter;
