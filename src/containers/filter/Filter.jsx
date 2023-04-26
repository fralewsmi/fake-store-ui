import { NavLink } from "react-router-dom";
import Category from "../../components/category/Category";
import Limit from "../../components/limit/Limit";
import Sort from "../../components/sort/Sort";

const Filter = () => {
  return (
    <aside className="basis-1/4 flex flex-col items-center gap-4  rounded shadow-lg my-8 p-4">
      <form>
        <Category />
        <Limit />
        <Sort />
        <div className="my-4">
          <NavLink
            to="/add"
            className="rounded-full shadow bg-slate-800 text-white font-semibold text-sm px-4 py-2"
          >
            Add product
          </NavLink>
        </div>
      </form>
    </aside>
  );
};

export default Filter;
