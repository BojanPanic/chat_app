export const formatDate = (timestamp: number) =>
  new Date(timestamp).toLocaleDateString("en-EU");
