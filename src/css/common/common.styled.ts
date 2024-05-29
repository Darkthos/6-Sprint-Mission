import { vstack } from "@/styled-system/patterns";

export const dropBoxContainer = vstack({
  bg: "white",
  gap: 0,
  borderRadius: "12px",
  border: "1px solid #E5E7EB",
  width: { base: "120px", xl: "130px" },
});

export const dropBoxTextStyle = vstack({
  height: "42px",
  justifyContent: "center",
  width: "full",
});
