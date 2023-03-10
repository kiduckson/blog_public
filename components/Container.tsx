import { styled } from "../stitches.config";

export const Container = styled("div", {
  // Reset
  boxSizing: "border-box",
  flexShrink: 0,

  // Custom
  ml: "auto",
  mr: "auto",
  px: "$1",
  "@bp2": {
    px: "$3",
  },
  variants: {
    size: {
      "1": {
        maxWidth: "640px",
      },
      "2": {
        maxWidth: "715px",
      },
      "3": {
        maxWidth: "1145px",
      },
      "4": {
        maxWidth: "none",
      },
    },
    isMargin: {
      true: {
        my: "clamp($6, calc($6+$9/2), $9)",
      },
    },
  },
  defaultVariants: {
    size: "4",
  },
});
