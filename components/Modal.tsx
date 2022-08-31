import { useEffect, useCallback } from "react";
import { styled, keyframes, CSS } from "../stitches.config";
import { Text, Button, buttonStyle, alertStyle } from ".";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
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

const StyledViewport = styled("div", {
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

const StyledModal = styled(
  "div",
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
const StyledTitle = styled("div", {});
const StyledDescription = styled("div", {});
const StyledAction = styled("div", {});
const StyledClose = styled("div", buttonStyle, {
  position: "absolute",
  top: "$1",
  right: "$1",
});

export const Modal = () => {
  const { data, isOpen, type } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();
  let modalTimer: ReturnType<typeof setTimeout>;

  // 열려있으면 3초후에 닫기
  useEffect(() => {
    if (isOpen) {
      modalTimer = setTimeout(closeModal, 3000);
      window.addEventListener("keydown", closeModalOnKeyDown);
      return () => {
        cancleTimer(modalTimer);
        window.removeEventListener("keydown", closeModalOnKeyDown);
      };
    }
  }, [isOpen]);

  const closeModalOnKeyDown = useCallback(
    (event) => {
      if (event.key === "Escape") closeModal();
    },
    [isOpen]
  );

  // 타이머 캔슬
  const cancleTimer = (modalTimer) => {
    clearTimeout(modalTimer);
  };

  // 모달 닫기
  const closeModal = () => {
    cancleTimer(modalTimer);
    dispatch(updateModal({ data, isOpen: false, type }));
  };

  // 애니메이션
  const styles = useSpring({
    opacity: isOpen ? 1 : 0,
    y: isOpen ? 0 : 24,
  });

  return (
    <>
      <ModalWrapper color={colorScheme[type]} style={styles}>
        <ModalTitle>
          {data?.title.toUpperCase()}
          <Button color={colorScheme[type]} small border onClick={closeModal}>
            <FiX />
          </Button>
        </ModalTitle>
        <ModalBody>{data?.body}</ModalBody>
      </ModalWrapper>
    </>
  );
};
