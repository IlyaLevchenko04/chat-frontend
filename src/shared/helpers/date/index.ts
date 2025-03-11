export const getCurrentDate = (timestamp: Date | string) => {
  const date = new Date(timestamp);

  return {
    date: date.toLocaleDateString(),
    time: date.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    }),
  };
};
