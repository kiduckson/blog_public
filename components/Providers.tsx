import React from "react";
import { ToastProvider } from "@radix-ui/react-toast";

type ToastProvider = React.ComponentProps<typeof ToastProvider>;
interface ProvidersProps extends ToastProvider {}

export const Providers: React.FC<ProvidersProps> = (props) => {
  return <ToastProvider {...props} />;
};
