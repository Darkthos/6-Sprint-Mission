import { GetProductsResponse } from "@/types/products.type";
import ProductCard from "./ProductCard";

function BestProductList({
  products: { list },
}: {
  products: GetProductsResponse;
}) {
  return (
    <div>
      {list.map((item, index) => (
        <ProductCard item={item} key={item.id} index={index} />
      ))}
    </div>
  );
}
export default BestProductList;