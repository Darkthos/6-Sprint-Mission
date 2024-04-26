import React from "react";
import { styled } from "styled-components";
import { PC_SIZE, TABLET_SIZE } from "~/utils/themes";
import { NavBorderLine } from "~pages/Items/ItemsHeader";
import bigHeart from "~assets/icon/big-favorite.svg";

function ProductDetails({ img, favorite, tags, name, description, price }) {
  const formattedPrice = new Intl.NumberFormat().format(price);

  return (
    <ProductDetailsTag>
      <DetailsImageTag src={img} />
      <DetailsTextContainerTag>
        <DetailsNameTag>{name}</DetailsNameTag>
        <DetailsPriceTag>{formattedPrice}</DetailsPriceTag>
        <NavBorderLine />
        <DetailsIntroduceTag>상품 소개</DetailsIntroduceTag>
        <DetailsDescriptionTag>{description}</DetailsDescriptionTag>
        <DetailsIntroduceTag>상품 태그</DetailsIntroduceTag>
        <DetailsTagContainer>
          {tags && tags.map((tag) => <DetailsTagText key={crypto.randomUUID()}>#{tag}</DetailsTagText>)}
        </DetailsTagContainer>
        <DetailsFavoriteContainer>
          <img src={bigHeart} />
          <DetailsFavoriteCount>{favorite}</DetailsFavoriteCount>
        </DetailsFavoriteContainer>
      </DetailsTextContainerTag>
    </ProductDetailsTag>
  );
}

export default ProductDetails;
export const ProductDetailsTag = styled.div`
  ${PC_SIZE} {
    flex-direction: row;
    gap: 24px;
    margin: 24px auto;
  }
  ${TABLET_SIZE} {
    flex-direction: row;
    gap: 16px;
    margin: 24px auto;
  }
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin: 16px auto;
`;
export const DetailsImageTag = styled.img`
  ${PC_SIZE} {
    width: 486px;
    height: 486px;
  }
  ${TABLET_SIZE} {
  }
  width: 340px;
  height: 340px;
  border-radius: 12px;
`;
export const DetailsTextContainerTag = styled.div`
  ${PC_SIZE} {
  }
  ${TABLET_SIZE} {
  }
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const DetailsNameTag = styled.h5`
  ${PC_SIZE} {
    font-size: 24px;
    line-height: 28.64px;
  }
  ${TABLET_SIZE} {
    font-size: 20px;
    line-height: 23.87px;
  }
  color: #1f2937;
  font-size: 16px;
  font-weight: 600;
  line-height: 19.09px;
`;
export const DetailsPriceTag = styled.h3`
  ${PC_SIZE} {
    font-size: 40px;
    line-height: 47.73px;
    margin: 16px 0 16px 0;
  }
  ${TABLET_SIZE} {
    font-size: 32px;
    line-height: 38.19px;
    margin: 12px 0 16px 0;
  }
  color: #1f2937;
  font-size: 24px;
  font-weight: 600;
  line-height: 28.64px;
  margin: 8px 0 16px 0;
`;
export const DetailsIntroduceTag = styled.p`
  color: #1f2937;
  font-size: 14px;
  font-weight: 500;
  line-height: 16.71px;
  margin-top: 16px;
`;
export const DetailsDescriptionTag = styled.p`
  color: #1f2937;
  font-size: 16px;
  font-weight: 400;
  line-height: 22.4px;
  margin: 8px 0 15px 0;
`;
export const DetailsTagContainer = styled.div`
  ${PC_SIZE} {
    margin-top: 8px;
  }
  ${TABLET_SIZE} {
    margin-top: 11px;
  }
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;
export const DetailsTagText = styled.div`
  background-color: #f3f4f6;
  padding: 6px 16px;
  border-radius: 26px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
`;
export const DetailsFavoriteContainer = styled.div`
  ${PC_SIZE} {
    max-width: 87px;
    height: 40px;
    margin: 124px 0 0 0;
  }
  ${TABLET_SIZE} {
    max-width: 87px;
    height: 40px;
    margin: 24px 0 0 0;
  }
  display: flex;
  gap: 4px;
  border-radius: 35px;
  border: 1px solid #e5e7eb;
  padding: 4px 12px 4px 12px;
  max-width: 79px;
  height: 32px;
  align-items: center;
  justify-content: center;
  margin: 24px 0 0 0;
`;

export const DetailsFavoriteCount = styled.p`
  color: #6b7280;
  font-size: 16px;
  font-weight: 500;
  line-height: 19.09px;
`;
