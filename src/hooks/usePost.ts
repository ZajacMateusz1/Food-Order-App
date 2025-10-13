import { useState } from "react";
export default function usePost<T, A>(
  postFn: (dataToPost: A) => Promise<T>,
  startValue: T
) {
  const [responseData, setResponseData] = useState<T>(startValue);
  const [error, setError] = useState<string>("");
  const [isPending, setIsPending] = useState<boolean>(false);
  async function sendData(dataToPost: A) {
    setIsPending(true);
    try {
      const dataFromRespond = await postFn(dataToPost);
      setResponseData(dataFromRespond);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Can't send your order! Try again later."
      );
    }
    setIsPending(false);
  }
  return { sendData, responseData, error, isPending };
}
