import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import {
  useGetProductQuery,
  useUpdateProductMutation,
} from "../../services/products/products";
import {
  updateCategory,
  updateDescription,
  updateImage,
  updatePrice,
  updateTitle,
  updateProduct,
  reset,
} from "../../features/edit/editSlice";
import Description from "../../components/form/description/Description";
import Category from "../../components/form/category/Category";
import Image from "../../components/form/image/Image";
import Price from "../../components/form/price/Price";
import Title from "../../components/form/title/Title";

const Edit = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetProductQuery(id);
  const [updateProductMutation, result] = useUpdateProductMutation();
  const dispatch = useDispatch();
  const edit = useSelector((state) => state.edit);

  useEffect(() => {
    if (data) {
      dispatch(updateProduct(data));
    }
    return () => {
      dispatch(reset());
    };
  }, [data]);

  const onUpdate = () => {
    updateProductMutation({
      id: data.id,
      ...edit,
    });
  };

  return (
    <div className="w-3/4 rounded shadow-lg p-4 mx-auto mt-4">
      <h2 className="text-2xl text-center font-bold py-4">
        Editing: {data?.title}
      </h2>
      <NavLink
        to="/"
        className="rounded-full shadow bg-slate-800 text-white font-semibold text-sm px-4 py-2"
      >
        Back
      </NavLink>
      <div className="flex flex-col mt-4">
        <Title
          value={edit?.category}
          onChange={(value) => dispatch(updateTitle(value))}
        />
        <Category
          value={edit?.category}
          onChange={(value) => dispatch(updateCategory(value))}
        />
        <Price
          value={edit?.price}
          onChange={(value) => dispatch(updatePrice(value))}
        />
        <Image
          value={edit?.image}
          onChange={(value) => dispatch(updateImage(value))}
        />
        <Description
          value={edit?.description}
          onChange={(value) => dispatch(updateDescription(value))}
        />
        <button
          onClick={onUpdate}
          className="rounded-full shadow bg-sky-600 text-white font-semibold text-sm px-4 py-2 my-2 "
        >
          Update
        </button>
        <p className="text-amber-500">{result.isLoading && "Loading..."}</p>
        <p className="text-lime-500">{result.isSuccess && "Success"}</p>
        <p className="text-rose-500">{result.isError && "Error"}</p>
      </div>
    </div>
  );
};

export default Edit;
