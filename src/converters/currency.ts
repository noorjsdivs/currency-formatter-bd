export const convertCurrency = (amount: number, rate: number): number => {
  if (rate <= 0) {
    throw new Error('Exchange rate must be positive');
  }
  return amount * rate;
};
