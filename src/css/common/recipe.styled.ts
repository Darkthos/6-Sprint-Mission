import { cva } from "../styled-system/css";

export const buttonRecipe = cva({
  base: {
    color: "white",
    bg: "blackPrimary",
    w: "128px",
    h: "48px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "8px",
  },
  variants: {
    visual: {
      banner: {
        borderRadius: "44px",
        w: "355px",
        h: "60px",
      },
    },
  },
});
