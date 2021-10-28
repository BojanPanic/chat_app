export const formatDate = (timestamp: number | string) => {
  const timestampDate = new Date(Number(timestamp));

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

export const scrollTo = (ref: React.RefObject<HTMLElement>) => {
  ref.current?.scrollIntoView({ behavior: "smooth" });
};
