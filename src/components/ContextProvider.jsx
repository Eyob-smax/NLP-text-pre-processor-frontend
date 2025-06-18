import { useCallback, useMemo, useState } from "react";

import { SendContext } from "./custom-hooks/useSend";
import { OutputContext } from "./custom-hooks/useOutput";

export function OutputProvider({ children }) {
  const [result, setResult] = useState({});

  const showOutput = useCallback(function showOutput(data, title) {
    setResult({ data, title, setVisible: true });
  }, []);

  const value = useMemo(
    () => ({ showOutput, result, setResult }),
    [showOutput, result]
  );

  return (
    <OutputContext.Provider value={value}>{children}</OutputContext.Provider>
  );
}

export function SendProvider({ children }) {
  const [sendPressed, setPressedButton] = useState(false);

  const value = useMemo(
    () => ({
      sendPressed,
      setPressedButton,
    }),
    [sendPressed]
  );

  return <SendContext.Provider value={value}>{children}</SendContext.Provider>;
}
