import React from "react";
import { useEffect, useState } from "react";
import { getStopped } from "../../service/api";

export default function useStopping({ sendPressed }) {
  const [stoppedData, setStoppedData] = useState({});

  useEffect(() => {
    (async () => {
      const result = await getStopped();
      !result.success
        ? console.log(result.message)
        : setStoppedData(result.data);
    })();
  }, [sendPressed]);

  return { stoppedData };
}
