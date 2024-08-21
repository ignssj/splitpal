export const formatValue = (value: number): string => {
  return `R$ ${value.toFixed(2)}`.replace(".", ",");
};
