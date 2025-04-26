import React from "react";
import { useEffect, useState } from "react";
import { getNormalized } from "../../service/api";

export default function useNormalization({ sendPressed }) {
  const [normalizedData, setNormalizedData] = useState({});

  useEffect(() => {
    (async () => {
      const result = await getNormalized();
      !result.success
        ? console.log(result.message)
        : setNormalizedData(result.data);
    })();
  }, [sendPressed]);

  return { normalizedData };
}
