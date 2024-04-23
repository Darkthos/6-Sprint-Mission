import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import { PC_SIZE, TABLET_SIZE } from "~/utils/themes";
import PostImg from "~/assets/unknownpostimg.png";
import BigPostImg from "~/assets/unknownbigpostimg.png";
import ActiveXbox from "~/assets/activexbox.svg";
import { useMediaQuery } from "react-responsive";

function ProductImgAdd() {
  const isPc = useMediaQuery({ query: "(min-width: 1201px)" });
  const [images, setImages] = useState([]);
  const fileInputRef = useRef(null);

  const choicePostImg = isPc ? BigPostImg : PostImg;

  useEffect(() => {
    setImages([{ src: choicePostImg, isDefault: true }]);
  }, [setImages, choicePostImg]);

  const handleAddImage = (e) => {
    if (images.length > 1) {
      return;
    }
    const file = e.target.files[0];
    if (file) {
      let src = URL.createObjectURL(file);
      setImages([...images, { src, isDefault: false }]);
      e.target.value = null;
      src = URL.revokeObjectURL(file);
    }
  };
  //이미지 한개추가하고 삭제후 추가하면 안됨. 원인은 삭제시,src ㅂ배열에서 이미지 제거못함 이벤트 타깃의 인덱스를 어케 아냐?
  const handleDeleteImage = (e) => {
    // setImages(images.filter((_, index) => index !== e.target.index));
    const removeImg = images.slice(0, 1);
    setImages(removeImg);
    e.stopPropagation();
    // e.target.parentElement.remove();
  };

  return (
    <>
      <input type="file" ref={fileInputRef} style={{ display: "none" }} onChange={handleAddImage} />
      {images.map((image, index) => (
        <div style={{ position: "relative" }} key={index} onClick={() => fileInputRef.current.click()}>
          <ProductImgAddTag src={image.src} />
          {!image.isDefault && <ActiveXboxImg src={ActiveXbox} onClick={handleDeleteImage} />}
        </div>
      ))}
    </>
  );
}

export default ProductImgAdd;
export const ProductImgAddTag = styled.img`
  ${PC_SIZE} {
    width: 282px;
    height: 282px;
  }

  ${TABLET_SIZE} {
    width: 162px;
    height: 162px;
  }
  width: 162px;
  height: 162px;
  border-radius: 12px;
  border: 1px;
  cursor: pointer;
  position: relative;

  background-size: cover;
`;
export const ActiveXboxImg = styled.img`
  position: absolute;
  z-index: 3;
  top: 12px;
  right: 12px;
  cursor: pointer;
`;
