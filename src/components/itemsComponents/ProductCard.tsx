import { css } from "@/styled-system/css";
import { Product } from "@/types/products.type";
import favoriteIcon from "@/assets/icons/heart_ic.svg";
import Image from "next/image";
import React from "react";
import { hstack } from "@/styled-system/patterns/hstack.mjs";
// index를 프롭으로 받게되면서 범용성이 많이 떨어짐 전체 상품에서도 쓸만했는데..
function ProductCard({ item, index }: { item: Product; index?: number }) {
  const { images, name, price, favoriteCount } = item;
  const imageSize = index ? 343 : 211;
  return (
    <div
      className={css({
        display: {
          base: typeof index === "number" && index > 0 ? "none" : "block",
          md: typeof index === "number" && index > 1 ? "none" : "block",
          xl: "block",
        },
      })}
    >
      <Image
        src={images[0]}
        alt={`${name}" 사진"`}
        width={imageSize}
        height={imageSize}
      />
      <h1>{name}</h1>
      <p>{price}</p>
      <div className={hstack()}>
        <Image src={favoriteIcon} alt="좋아요 아이콘" width={16} height={16} />
        <p>{favoriteCount}</p>
      </div>
    </div>
  );
}

export default ProductCard;
