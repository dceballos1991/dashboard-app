import React from "react";

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const useMockedApi = <T>(getData: () => Promise<T>) => {
  const [data, setData] = React.useState<T | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        // Throw an error 5% of the time
        if (Math.random() > 0.95) {
          throw new Error("An error occurred");
        }
        setData(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [getData]);

  return { data, isLoading, isError };
};
