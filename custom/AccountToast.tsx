import React from "react";
import { Toast, Button, Text } from "../components";
import { selectToast, openToast, closeToast } from "../redux/toastSlice";
import { useAppSelector, useAppDispatch } from "../redux/hooks";

function prettyDate(date: number) {
  return new Intl.DateTimeFormat("en-US", { dateStyle: "full", timeStyle: "short" }).format(date);
}

export const AccountToast = () => {
  const dispatch = useAppDispatch();
  const toast = useAppSelector(selectToast);

  return (
    <Toast.ToastProvider swipeDirection="right">
      <Toast.Toast open={toast.isOpen} onOpenChange={() => dispatch(closeToast())}>
        <Toast.ToastTitle>
          <Text size={3} css={{ fontWeight: 600 }}>
            {toast.title}
          </Text>
        </Toast.ToastTitle>
        <Toast.ToastDescription asChild>
          <time>{prettyDate(Date.now())}</time>
        </Toast.ToastDescription>
        <Toast.ToastAction asChild altText="Goto schedule to undo">
          <Button ghost>닫기</Button>
        </Toast.ToastAction>
      </Toast.Toast>
      <Toast.ToastViewport />
    </Toast.ToastProvider>
  );
};
