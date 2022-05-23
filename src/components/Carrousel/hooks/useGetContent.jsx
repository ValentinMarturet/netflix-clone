import { useEffect, useState } from "react";
import { apiBuilder } from "../../../apiConfig";

const useGetContent = (entity, lang = "es", page = 1) => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const res = await apiBuilder.tryGet(entity, lang, page);
      setData(res);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return [data, loading];
};

export default useGetContent;
