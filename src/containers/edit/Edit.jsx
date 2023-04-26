import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
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
import { useEffect } from "react";

const Edit = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetProductQuery(id);
  const [updateProductMutation, result] = useUpdateProductMutation();
  const navigate = useNavigate();
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
      <h2 className="text-2xl text-center font-bold py-4">{data?.title}</h2>
      <button
        onClick={() => navigate(-1)}
        className="rounded-full shadow bg-slate-800 text-white font-semibold text-sm px-4 py-2 my-2 "
      >
        Back
      </button>
      <div className="flex flex-col">
        <div className="flex flex-col py-2 gap-2">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={edit?.title || ""}
            onChange={(e) => dispatch(updateTitle(e.target.value))}
          />
        </div>
        <div className="flex flex-col py-2 gap-2">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            name="category"
            value={edit?.category || ""}
            onChange={(e) => dispatch(updateCategory(e.target.value))}
          />
        </div>
        <div className="flex flex-col py-2 gap-2">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            value={edit?.price || ""}
            onChange={(e) => dispatch(updatePrice(e.target.value))}
          />
        </div>
        <div className="flex flex-col py-2 gap-2">
          <label htmlFor="image">Image</label>
          <input
            type="url"
            name="image"
            value={edit?.image || ""}
            onChange={(e) => dispatch(updateImage(e.target.value))}
          />
        </div>
        <div className="flex flex-col py-2 gap-2">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            value={edit?.description || ""}
            onChange={(e) => dispatch(updateDescription(e.target.value))}
          />
        </div>
        <button
          onClick={onUpdate}
          className="rounded-full shadow bg-sky-600 text-white font-semibold text-sm px-4 py-2 my-2 "
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default Edit;
