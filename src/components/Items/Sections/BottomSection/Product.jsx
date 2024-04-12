import { styled } from "styled-components";
import productImg from "~assets/items/ipad.png";

function Product({ img, size }) {
  return (
    <ProductImg>
      <Img src={productImg} />
    </ProductImg>
  );
}

export default Product;
export const ProductImg = styled.div``;

export const Img = styled.img`
  max-width: 221px;
  max-height: 221px;
  width: 100%;
  height: 100%;
  border-radius: 12.16px;
`;

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const ProductImage = ({ imageUrl, alt }) => {
//   return <img src={imageUrl} alt={alt} />;
// };

// const ProductComponent = () => {
//   const [productData, setProductData] = useState(null);

//   useEffect(() => {
//     // 제품 데이터를 가져오는 요청
//     axios
//       .get("https://panda-market-api.vercel.app/api/product")
//       .then((response) => {
//         // 제품 목록에서 첫 번째 제품의 이미지 URL 가져오기
//         const imageUrl = response.data[0].imageUrl;
//         setProductData(imageUrl);
//       })
//       .catch((error) => {
//         console.error("Error fetching product data:", error);
//       });
//   }, []);

//   return <div>{productData && <ProductImage imageUrl={productData} alt="Product" />}</div>;
// };

// export default ProductComponent;
