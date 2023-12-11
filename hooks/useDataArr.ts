"use client";
import rawgApiClient from "@/services/rawg-api-client";
import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import { debounce } from "lodash";

interface FetchedData<T> {
  count: number;
  results: T[];
  next: string;
}

const useDataArr = <T>(endpoint: string, params = {}) => {
  const [data, setData] = useState<T[] | null>(null);
  const [error, setError] = useState("");
  const [next, setNext] = useState<string | null>(null);

  const FetchAndSetData = debounce((interanlParams = {}) => {
    setError("");
    setData(null);

    rawgApiClient
      .get<FetchedData<T>>(`/${endpoint}`, {
        params: {
          ...params,
          ...interanlParams,
        },
      })
      .then((res) => {
        if (res.data.results) {
          const data = res.data.results.map((data: T) => ({
            ...data,
          }));
          setNext(res.data.next);
          setData(data);
        }
      })
      .catch((e) => {
        setError(e.message);
      });
  }, 200);

  useEffect(() => {
    const controler = new AbortController();
    setError("");
    rawgApiClient
      .get<FetchedData<T>>(`/${endpoint}`, {
        signal: controler.signal,
        params: {
          ...params,
        },
      })
      .then((res) => {
        if (res.data.results) {
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

  return { data, error, retry: FetchAndSetData, next };
};
export default useDataArr;
