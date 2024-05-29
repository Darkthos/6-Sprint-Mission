import Image from "next/image";
import sortIcon from "@/assets/icons/sort_ic.svg";
import downIcon from "@/assets/icons/down_ic.svg";
import useResponsive from "@/hooks/useResponsive";
import { css } from "@/styled-system/css";
import { sortByRecipe } from "@/css/recipe/sortByRecipe.styled";

function SortBy({ sortByText }: { sortByText: string }) {
  const { isMobile } = useResponsive();

  return (
    <div className={css({ cursor: "pointer" })}>
      {isMobile ? (
        <div className={sortByRecipe()}>
          <Image src={sortIcon} alt="sortIcon" />
        </div>
      ) : (
        <div className={sortByRecipe({ visual: "pc" })}>
          <p>{sortByText}</p>
          <Image src={downIcon} alt="downIcon" />
        </div>
      )}
    </div>
  );
}

export default SortBy;
