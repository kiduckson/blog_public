import * as ToastPrimitive from "@radix-ui/react-toast";
import { styled, keyframes, CSS } from "../stitches.config";
import { alertStyle } from ".";
import { Text, Button, buttonStyle } from ".";
import { Cross1Icon } from "@radix-ui/react-icons";

const VIEWPORT_PADDING = 25;

const hide = keyframes({
  "0%": { opacity: 1 },
  "100%": { opacity: 0 },
});
const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: "translateX(0)" },
});
const swipeOut = keyframes({
  from: { transform: "translateX(var(--radix-toast-swipe-end-x))" },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
});
const StyledViewport = styled(ToastPrimitive.Viewport, {
  position: "fixed",
  bottom: 0,
  right: 0,
  display: "flex",
  flexDirection: "column",
  padding: VIEWPORT_PADDING,
  gap: 10,
  width: 390,
  maxWidth: "100vw",
  margin: 0,
  listStyle: "none",
  zIndex: 10,
  outline: "none",
});

const StyledToast = styled(
  ToastPrimitive.Root,
  {
    display: "grid",
    rowGap: "$1",
    position: "relative",
    "@media (prefers-reduced-motion: no-preference)": {
      '&[data-state="open"]': {
        animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
      },
      '&[data-state="closed"]': {
        animation: `${hide} 100ms ease-in`,
      },
      '&[data-swipe="move"]': {
        transform: "translateX(var(--radix-toast-swipe-move-x))",
      },
      '&[data-swipe="cancel"]': {
        transform: "translateX(0)",
        transition: "transform 200ms ease-out",
      },
      '&[data-swipe="end"]': {
        animation: `${swipeOut} 100ms ease-out`,
      },
    },
  },
  alertStyle
);
const StyledTitle = styled(ToastPrimitive.Title, {});
const StyledDescription = styled(ToastPrimitive.Description, {});
const StyledAction = styled(ToastPrimitive.Action, {});
const StyledClose = styled(ToastPrimitive.Close, buttonStyle, {
  position: "absolute",
  top: "$1",
  right: "$1",
});

type ToastPrimitiveProps = React.ComponentProps<typeof ToastPrimitive.Root>;
type ToastProps = ToastPrimitiveProps & {
  css?: CSS;
  title?: string;
  content?: string;
  children?: React.ReactNode;
  toastVariant: "loContrast" | "gray" | "blue" | "green" | "red";
};

export const Toast = ({ css, title, content, children, toastVariant, ...props }: ToastProps) => {
  const color = toastVariant === "loContrast" ? "contrast" : toastVariant;
  const btnColor = toastVariant === "loContrast" ? "gray" : toastVariant;
  return (
    <>
      <StyledToast {...props} variant={toastVariant}>
        {title && (
          <StyledTitle>
            <Text size="4" variant={color}>
              {title}
            </Text>
          </StyledTitle>
        )}
        <StyledDescription>
          <Text size="2" variant={color}>
            {content}
          </Text>
        </StyledDescription>
        {children && (
          <StyledAction asChild altText="none">
            {children}
          </StyledAction>
        )}
        <StyledClose aria-label="Close" ghost variant={btnColor}>
          <Cross1Icon />
        </StyledClose>
      </StyledToast>
      <StyledViewport />
    </>
  );
};
