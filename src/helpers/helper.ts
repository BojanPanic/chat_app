export const formatDate = (timestamp: number) => {
  const timestampDate = new Date(timestamp);

  const offset = timestampDate.getTimezoneOffset() * 60 * 1000;

  const localDate = new Date(timestampDate.getTime() - offset);

  const formatedDate = localDate
    .toLocaleString("en-GB", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    })
    .replace(",", "");

  return formatedDate;
};
