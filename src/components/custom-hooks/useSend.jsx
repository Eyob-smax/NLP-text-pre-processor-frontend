import { createContext, useContext } from "react";
export const SendContext = createContext();

export default function useSend() {
  const context = useContext(SendContext);
  if (!context) {
    throw new Error("Context used out side a provider wrapper!");
  }
  return context;
}
