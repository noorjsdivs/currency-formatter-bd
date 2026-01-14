import { formatWithCommas } from './commaFormatter';

export interface CurrencyOptions {
  symbol?: string; // Default '৳'
  position?: 'left' | 'right'; // Default 'left'
  spaced?: boolean; // Default true (e.g. "৳ 100")
  decimals?: number; // Default 2
}

export const formatCurrency = (amount: number | string, options?: CurrencyOptions): string => {
  const { symbol = '৳', position = 'left', spaced = true, decimals = 2 } = options || {};
  
  let num = typeof amount === 'string' ? parseFloat(amount) : amount;
  if (isNaN(num)) return 'Invalid Amount';

  // Format number with decimals
  const fixedNum = num.toFixed(decimals);
  
  // Apply comma formatting
  // formatWithCommas logic handles decimals too
  const formattedNum = formatWithCommas(fixedNum);

  const space = spaced ? ' ' : '';

  if (position === 'left') {
    return `${symbol}${space}${formattedNum}`;
  } else {
    return `${formattedNum}${space}${symbol}`;
  }
};

