import { useEffect, useState } from "react";
import Product from "../../components/product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((res) => res.json())
      .then((products) => setProducts(products));
    return () => {
      setProducts([]);
    };
  }, []);

  return (
    <section className="flex flex-col items-center gap-4 py-8">
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            image={product.image}
          />
        );
      })}
    </section>
  );
};

export default Products;
