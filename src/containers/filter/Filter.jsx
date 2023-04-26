import Category from "../../components/category/Category";
import Limit from "../../components/limit/Limit";
import Sort from "../../components/sort/Sort";

const Filter = () => {
  return (
    <aside className="basis-1/4 flex flex-col items-center gap-4 rounded shadow-lg py-8">
      <form>
        <Category />
        <Limit />
        <Sort />
      </form>
    </aside>
  );
};

export default Filter;
