"use client";
import rawgApiClient from "@/services/rawg-api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

const useData = <T>(endpoint: string, params = {}) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState("");

  const FetchAndSetData = () => {
    setError("");

    rawgApiClient
      .get<T>(`/${endpoint}`, {
        params: {
          ...params,
        },
      })
      .then((res) => {
        if (res.data) setData(res.data);
      })
      .catch((e) => {
        setError(e.message);
      });
  };

  useEffect(() => {
    const controler = new AbortController();
    setError("");
    rawgApiClient
      .get<T>(`/${endpoint}`, {
        signal: controler.signal,
        params: {
          ...params,
        },
      })
      .then((res) => {
        if (res.data) setData(res.data);
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
