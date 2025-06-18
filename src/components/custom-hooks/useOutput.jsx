import { createContext, useContext } from "react";
export const OutputContext = createContext();

export default function useOutput() {
  const context = useContext(OutputContext);
  if (!context) {
    throw new Error("Context used out side a provider wrapper!");
  }
  return context;
}
