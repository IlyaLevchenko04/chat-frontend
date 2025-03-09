export const useCurrentDate = (timestamp: Date | string) => {
  const date = new Date(timestamp);
  return {
    date: date.toLocaleDateString(),
    time: `${date.getHours().toLocaleString()}:${date.getMinutes().toString()}`,
  };
};
