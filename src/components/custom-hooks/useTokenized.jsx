import React, { useEffect, useState } from "react";
import { getTokenized } from "../../service/api";

export default function useTokenized({ sendPressed }) {
  const [tokenizedData, setTokenizedData] = useState({});

  useEffect(() => {
    (async () => {
      const result = await getTokenized();
      !result.success
        ? console.log(result.message)
        : setTokenizedData(result.data);
    })();
  }, [sendPressed]);

  return { tokenizedData };
}
