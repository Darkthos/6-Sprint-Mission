import {
  DescriptionTextStyle,
  itemTextStyle,
  sectionContainer,
  sectionInformation,
  titleTextStyle,
} from "@css/home.styled";
import { css } from "@css/styled-system/css";

interface SectionProps {
  index: number;
  imageSrc: string;
  itemText: string;
  titleText: string;
  descriptionText: string;
}

function Section({
  index,
  imageSrc,
  itemText,
  titleText,
  descriptionText,
}: SectionProps) {
  const formattedDescriptionText = descriptionText
    .split("\n")
    .map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));

  return (
    <div className={sectionContainer(index)}>
      <img
        src={imageSrc}
        alt={imageSrc}
        className={css({
          w: { base: "344px", md: "696px", xl: "588px" },
          h: { base: "259px", md: "524px", xl: "444px" },
        })}
      />
      <div className={sectionInformation(index)}>
        <p className={itemTextStyle}>{itemText}</p>
        <p className={titleTextStyle}>{titleText}</p>
        <p className={DescriptionTextStyle}>{formattedDescriptionText}</p>
      </div>
    </div>
  );
}

export default Section;
