import { useEffect } from "react";
import Product from "../../components/product/Product";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../features/products/productsSlice";

const Products = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((res) => res.json())
      .then((products) => dispatch(update(products)));
    return () => {
      dispatch(update([]));
    };
  }, []);

  return (
    <section className="flex flex-col items-center gap-4 py-8">
      {products
        ? products.map((product) => {
            return (
              <Product
                key={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                image={product.image}
              />
            );
          })
        : ""}
    </section>
  );
};

export default Products;
