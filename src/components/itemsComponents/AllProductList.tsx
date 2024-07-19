import { GetProductsResponse } from "@/types/products.type";
import ProductCard from "./ProductCard";

function AllProductList({
  products: { list },
}: {
  products: GetProductsResponse;
}) {
  return (
    <div>
      {list.map((item, index) => (
        <ProductCard item={item} key={item.id} />
      ))}
    </div>
  );
}

export default AllProductList;
