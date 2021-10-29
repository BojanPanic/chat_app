export const formatDate = (timestamp: number | string) => {
  const timestampDate = new Date(Number(timestamp));

  const formatedDate = timestampDate
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
