import getProducts, { GetProductsParams } from "@/apis/product/getProducts";
import AllProductList from "@/components/itemsComponents/AllProductList";
import BestProductList from "@/components/itemsComponents/BestProducts";
import ControlBar from "@/components/itemsComponents/ControlBar";
import Header from "@/components/shared/Header/Header";
import { GetProductsResponse } from "@/types/products.type";
import { useQuery } from "@tanstack/react-query";

export async function getServerSideProps(context: any) {
  const userAgent = context.req.headers["user-agent"];
  const isMobile = /mobile/i.test(userAgent);
  const bestProductsOption: GetProductsParams = {
    page: 1,
    pageSize: 3,
    orderBy: "favorite",
  };
  console.log(isMobile);
  const allProductsOption: GetProductsParams = {
    page: 1,
    pageSize: isMobile ? 5 : 10,
    orderBy: "recent",
  };

  const bestProducts = await getProducts(bestProductsOption);
  const allProducts = await getProducts(allProductsOption);

  return { props: { bestProducts, allProducts } };
}

function Items({
  bestProducts,
  allProducts,
}: {
  bestProducts: GetProductsResponse;
  allProducts: GetProductsResponse;
}) {
  const { data: bestProductsData } = useQuery({
    queryKey: ["bestProductsData"],
    queryFn: () => getProducts({ orderBy: "favorite", pageSize: 3, page: 1 }),
    initialData: bestProducts,
  });

  const { data: allProductsData } = useQuery({
    queryKey: ["allProductsData"],
    queryFn: () => getProducts({ orderBy: "recent", pageSize: 10, page: 1 }),
    initialData: allProducts,
  });

  return (
    <div>
      <Header />
      <h1>베스트 상품</h1>
      <BestProductList products={bestProductsData} />
      <div>
        <h1>판매중인 상품</h1>
        <ControlBar />
        <AllProductList products={allProductsData} />
      </div>
    </div>
  );
}

export default Items;
