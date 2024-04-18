import React, { useRef, useState } from "react";
import { styled } from "styled-components";
import { PC_SIZE, TABLET_SIZE } from "~/utils/themes";
import PostImg from "~/assets/unknownpostimg.png";

function ProductImgAdd({ name, value, onChange }) {
  const fileInputRef = useRef(null);
  const [selectedImages, setSelectedImages] = useState([null, null]);

  const [currentTagIndex, setCurrentTagIndex] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file && currentTagIndex !== null) {
      const imageUrl = URL.createObjectURL(file);
      const updatedImages = [...selectedImages];
      updatedImages[currentTagIndex] = imageUrl;
      setSelectedImages(updatedImages);
      onChange(name, file);
    }
  };

  const handleImageClick = (index) => {
    setCurrentTagIndex(index);
    fileInputRef.current.click();
  };

  return (
    <>
      <input type="file" ref={fileInputRef} style={{ display: "none" }} onChange={handleChange} />
      {selectedImages.map((img, index) => (
        <ProductImgAddTag
          key={index}
          src={img || PostImg}
          alt="product add preview"
          onClick={() => handleImageClick(index)}
        ></ProductImgAddTag>
      ))}
    </>
  );
}
//이미지 다시받아서 해야함
export default ProductImgAdd;
export const ProductImgAddTag = styled.img`
  ${PC_SIZE} {
    width: 282px;
    height: 282px;
  }
  ${TABLET_SIZE} {
    width: 168px;
    height: 168px;
  }
  width: 168px;
  height: 168px;
  border-radius: 12px;
  border: 1px;
  cursor: pointer;
`;
