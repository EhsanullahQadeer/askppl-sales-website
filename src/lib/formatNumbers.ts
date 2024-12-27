export const formatNumber = (number: number) =>
  new Intl.NumberFormat().format(number);
