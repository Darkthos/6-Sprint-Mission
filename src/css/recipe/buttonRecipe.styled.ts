import { cva } from "@/styled-system/css";

export const buttonRecipe = cva({
  base: {
    color: "white",
    bg: "blueBasic",
    width: "128px",
    height: "48px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "8px",
  },
  variants: {
    visual: {
      banner: {
        borderRadius: { base: "24px", md: "46px" },
        width: { base: "154px", md: "355px" },
        height: { base: "48px", md: "60px" },
      },
      sign: {
        bg: "disabledBasic",
        width: "full",
        height: "56px",
        borderRadius: "40px",
      },
    },
  },
});
