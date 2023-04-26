import { useSelector } from "react-redux";
import { useGetProductsQuery } from "../../services/products/products";
import Product from "../../components/product/Product";

const Products = () => {
  const { category, limit, sort } = useSelector((state) => state.filter);
  const { data, error, isLoading } = useGetProductsQuery({
    category,
    limit,
    sort,
  });

  return (
    <section className="basis-3/4 flex flex-col items-center gap-4 py-8">
      {data?.map((product) => {
        return (
          <Product
            key={product.id}
            id={product.id}
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
