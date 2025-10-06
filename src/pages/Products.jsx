import { Link } from "react-router";
import ProductCard from "../components/ProductCard";
import useProducts from "../hooks/useProducts";

const Products = () => {
  const { products } = useProducts();
  return (
    <>
      <div className="flex justify-between items-center pb-4">
        <p className="font-semibold text-xl">Featured Products</p>
        <Link to="./products" className="btn-xs btn text-xs">
          See All Products
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Products;
