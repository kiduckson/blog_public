import { styled } from "../stitches.config";

export const Section = styled("section", {
  // Reset
  boxSizing: "border-box",
  flexShrink: 0,
  "&::before": {
    boxSizing: "border-box",
    content: '""',
  },
  "&::after": {
    boxSizing: "border-box",
    content: '""',
  },
  variants: {
    size: {
      "1": {
        pt: "$3",
      },
      "2": {
        pt: "$5",
      },
      "3": {
        pt: "$9",
      },
    },
  },
  defaultVariants: {
    size: "3",
  },
});
