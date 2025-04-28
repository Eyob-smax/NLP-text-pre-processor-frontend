import React, { useEffect, useState } from "react";
import { getFinalIndex } from "../../service/api";

export default function useGetFinalIndex({ sendPressed }) {
  const [constructIndex, setConstructindex] = useState({});

  useEffect(() => {
    (async () => {
      const data = await getFinalIndex();
      if (!data.success) {
        console.log(data.message);
        return alert("can't get index string");
      }
      setConstructindex(data);
    })();
  }, [sendPressed]);

  return { constructIndex };
}
