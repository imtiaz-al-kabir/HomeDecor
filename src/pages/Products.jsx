import { useState } from "react";
import ProductCard from "../components/ProductCard";
import useProducts from "../hooks/useProducts";

const Products = () => {
  const { products } = useProducts();

  const [search, setSearch] = useState("");
  const trimProduct = search.trim().toLowerCase();
  const filteredProduct = trimProduct
    ? products.filter((product) =>
        product.name.toLowerCase().includes(trimProduct)
      )
    : products;
  //   setSearch(filteredProduct);
  return (
    <>
      <div className="flex justify-between items-center pb-4">
        <p className="font-semibold text-xl">
          All Products{" "}
          <span className="text-xs text-gray-600">
            ({filteredProduct.length}) Products Found
          </span>
        </p>
        <label className=" input  focus-within:outline-none">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search Product"
          />
        </label>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {
        
        filteredProduct.map((product) => (
          <ProductCard key={product.id} product={product} />

        ))}
      </div>
    </>
  );
};

export default Products;
