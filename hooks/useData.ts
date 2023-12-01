"use client";
import rawgApiClient from "@/services/rawg-api-client";
import { CanceledError } from "axios";
import { useState, useEffect } from "react";

interface FetchedData<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[] | null>(null);
  const [error, setError] = useState("");

  const FetchAndSetData = () => {
    setError("");

    rawgApiClient
      .get<FetchedData<T>>(`/${endpoint}`)
      .then((res) => {
        if (res.data.results) {
          console.log(res.data.results);

          const data = res.data.results.map((data: T) => ({
            ...data,
          }));

          setData(data);
        }
      })
      .catch((e) => {
        setError(e.message);
      });
  };

  useEffect(() => {
    const controler = new AbortController();
    setError("");
    rawgApiClient
      .get<FetchedData<T>>(`/${endpoint}`, { signal: controler.signal })
      .then((res) => {
        if (res.data.results) {
          console.log(res.data);
          const data = res.data.results.map((data: T) => ({
            ...data,
          }));

          setData(data);
        }
      })
      .catch((e) => {
        if (e instanceof CanceledError) return;
        setError(e.message);
      });

    return () => {
      controler.abort();
    };
  }, []);

  return { data, error, retry: FetchAndSetData };
};
export default useData;
