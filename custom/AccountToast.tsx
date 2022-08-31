import React from "react";
import { Toast, Button } from "../components";
import { selectToast, toggleToast } from "../redux/toastSlice";
import { useAppSelector, useAppDispatch } from "../redux/hooks";

export const AccountToast = () => {
  const dispatch = useAppDispatch();
  const toast = useAppSelector(selectToast);

  return (
    <Toast.ToastProvider swipeDirection="right">
      <Button
        ghost
        variant={"green"}
        size={2}
        onClick={() => dispatch(toggleToast({ title: "open sesame" }))}
      >
        Toast
      </Button>
      <Toast.Toast open={toast.isOpen} onOpenChange={() => dispatch(toggleToast({}))}>
        <Toast.ToastTitle>{toast.title}</Toast.ToastTitle>
        <Toast.ToastDescription asChild>{toast.title}</Toast.ToastDescription>
        {/* <Toast.ToastAction asChild altText="Goto schedule to undo">
          <Button variant="green">Undo button</Button>
        </Toast.ToastAction> */}
      </Toast.Toast>
      <Toast.ToastViewport />
    </Toast.ToastProvider>
  );
};
