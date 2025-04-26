import { useEffect, useState } from "react";
import { getStemmed } from "../../service/api";

export default function useStemmed({ sendPressed }) {
  const [stemmedData, setStemmedData] = useState({});

  useEffect(() => {
    (async () => {
      const result = await getStemmed();
      !result.success
        ? console.log(result.message)
        : setStemmedData(result.data);
    })();
  }, [sendPressed]);

  return { stemmedData };
}
