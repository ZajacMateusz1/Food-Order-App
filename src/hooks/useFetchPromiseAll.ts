import { useEffect, useState } from "react";
export default function useFetchPromiseAll<T, A>(
  fetchFn: (items: A) => Promise<T>,
  itemsToFetch: A,
  startValue: T
) {
  const [data, setData] = useState<T>(startValue);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const fetchedData = await fetchFn(itemsToFetch);
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
    const timeout = setTimeout(() => fetchData(), 300);
    return () => {
      clearTimeout(timeout);
    };
  }, [fetchFn, itemsToFetch]);
  return { data, error, isLoading };
}
