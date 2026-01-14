export const formatWithCommas = (num: number | string): string => {
  let numStr = num.toString();
  
  // Handle decimals
  let decimalPart = '';
  if (numStr.includes('.')) {
    const parts = numStr.split('.');
    numStr = parts[0];
    decimalPart = '.' + parts[1];
  }

  // Handle negative numbers
  let isNegative = false;
  if (numStr.startsWith('-')) {
    isNegative = true;
    numStr = numStr.substring(1);
  }

  if (numStr.length <= 3) {
    return (isNegative ? '-' : '') + numStr + decimalPart;
  }

  let lastThree = numStr.substring(numStr.length - 3);
  let remaining = numStr.substring(0, numStr.length - 3);

  // Add commas every 2 digits for the remaining part
  remaining = remaining.replace(/\B(?=(\d{2})+(?!\d))/g, ',');

  return (isNegative ? '-' : '') + remaining + ',' + lastThree + decimalPart;
};
