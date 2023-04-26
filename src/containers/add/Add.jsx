import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useAddProductMutation } from "../../services/products/products";
import {
  updateCategory,
  updateDescription,
  updateImage,
  updatePrice,
  updateTitle,
  reset,
} from "../../features/add/addSlice";
import Description from "../../components/form/description/Description";
import Category from "../../components/form/category/Category";
import Image from "../../components/form/image/Image";
import Price from "../../components/form/price/Price";
import Title from "../../components/form/title/Title";

const Add = () => {
  const [addProduct, result] = useAddProductMutation();
  const dispatch = useDispatch();
  const newProduct = useSelector((state) => state.add);

  useEffect(() => {
    dispatch(reset());
    return () => {
      dispatch(reset());
    };
  }, []);

  const onAddProduct = () => {
    addProduct(newProduct);
  };

  return (
    <div className="w-3/4 rounded shadow-lg p-4 mx-auto mt-4">
      <h2 className="text-2xl text-center font-bold py-4">Add a New Product</h2>
      <NavLink
        to="/"
        className="rounded-full shadow bg-slate-800 text-white font-semibold text-sm px-4 py-2"
      >
        Back
      </NavLink>
      <div className="flex flex-col mt-4">
        <Title
          value={newProduct?.title}
          onChange={(value) => dispatch(updateTitle(value))}
        />
        <Category
          value={newProduct?.category}
          onChange={(value) => dispatch(updateCategory(value))}
        />
        <Price
          value={newProduct?.price}
          onChange={(value) => dispatch(updatePrice(value))}
        />
        <Image
          value={newProduct?.image}
          onChange={(value) => dispatch(updateImage(value))}
        />
        <Description
          value={newProduct?.description}
          onChange={(value) => dispatch(updateDescription(value))}
        />
        <button
          onClick={onAddProduct}
          className="rounded-full shadow bg-sky-600 text-white font-semibold text-sm px-4 py-2 my-2 "
        >
          Add product
        </button>
      </div>
    </div>
  );
};

export default Add;
