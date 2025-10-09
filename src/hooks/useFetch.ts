import { useEffect, useState } from "react";
export default function useFetch<T>(fetchFn: () => Promise<T>, startValue: T) {
  const [data, setData] = useState<T>(startValue);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const fetchedData = await fetchFn();
        setData(fetchedData);
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : "Can't fetch data! Try again later."
        );
      }
      setIsLoading(false);
    }
    fetchData();
  }, [fetchFn]);
  return { data, error, isLoading };
}
