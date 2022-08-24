import React from "react";
import { CheckIcon } from "@radix-ui/react-icons";
import { styled, css, CSS } from "../stitches.config";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Box, Flex, panelStyles } from ".";

// style css
export const baseItemCss = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontFamily: "$untitled",
  fontSize: "$1",
  fontVariantNumeric: "tabular-nums",
  lineHeight: "1",
  cursor: "default",
  userSelect: "none",
  whiteSpace: "nowrap",
  height: "$5",
  px: "$5",
});

export const itemCss = css(baseItemCss, {
  position: "relative",
  color: "$hiContrast",

  "&[data-highlighted]": {
    outline: "none",
    backgroundColor: "$slate9",
    color: "$white",
  },

  "&[data-disabled]": {
    color: "$slate9",
  },
});

export const labelCss = css(baseItemCss, {
  color: "$slate11",
});

export const menuCss = css({
  boxSizing: "border-box",
  minWidth: 120,
  py: "$1",
});

export const separatorCss = css({
  height: 1,
  my: "$1",
  backgroundColor: "$slate6",
});

/**
 * API
 */

// root and trigger
const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

// content
const StyledContent = styled(DropdownMenuPrimitive.Content, menuCss, panelStyles);

// type for the props
type DropdownMenuContentPrimitiveProps = React.ComponentProps<typeof DropdownMenuPrimitive.Content>;
type DropdownMenuContentProps = DropdownMenuContentPrimitiveProps & { css?: CSS };

// content
const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof StyledContent>,
  DropdownMenuContentProps
>((props, forwardedRef) => (
  <DropdownMenuPrimitive.Portal>
    <StyledContent {...props} ref={forwardedRef} />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = "DropdownMenuContent";

const DropdownMenuItem = styled(DropdownMenuPrimitive.Item, itemCss);
const DropdownMenuGroup = styled(DropdownMenuPrimitive.Group, {});
const DropdownMenuLabel = styled(DropdownMenuPrimitive.Label, labelCss);
const DropdownMenuSeparator = styled(DropdownMenuPrimitive.Separator, separatorCss);

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
};
