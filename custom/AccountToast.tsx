import React from "react";
import { Toast } from "../components";
import type { ToastStateType } from "../redux/toastSlice";

interface ToastProps {
  toast: ToastStateType;
}
type Variant = "loContrast" | "gray" | "blue" | "green" | "red";
export const AccountToast = ({ toast }: ToastProps) => {
  let variant: Variant =
    toast.type === "SUCCESS"
      ? "green"
      : toast.type === "ERROR"
      ? "red"
      : toast.type === "WARNING"
      ? "loContrast"
      : "gray";

  return (
    <Toast
      title={toast.title}
      content="TEST"
      defaultOpen={false}
      open={toast.isOpen}
      toastVariant={variant}
    ></Toast>
  );
};
