import { styled } from "../stitches.config";
import Image from "next/image";

export const Avatar = styled(Image, {
  boxSizing: "border-box",
  display: "flex",
  width: "$2",
  height: "$2",
  borderRadius: "50%",
});
