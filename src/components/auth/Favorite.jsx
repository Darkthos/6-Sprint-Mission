import { styled } from "styled-components";
import favoriteIcon from "~assets/icon/favorite.svg";
import SmallText from "./Text/SmallText";

function Favorite({ favorite }) {
  return (
    <FavoriteTag>
      <img src={favoriteIcon} />
      <SmallText favorite={favorite} />
    </FavoriteTag>
  );
}

export default Favorite;
export const FavoriteTag = styled.div`
  display: flex;
  gap: 4px;
`;
