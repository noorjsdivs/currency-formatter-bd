declare const formatWithCommas: (num: number | string) => string;

interface CurrencyOptions {
    symbol?: string;
    position?: 'left' | 'right';
    spaced?: boolean;
    decimals?: number;
}
declare const formatCurrency: (amount: number | string, options?: CurrencyOptions) => string;

declare const toWords: (num: number | string) => string;

declare const toWordsBangla: (num: number | string) => string;

declare const convertCurrency: (amount: number, rate: number) => number;

export { type CurrencyOptions, convertCurrency, formatCurrency, formatWithCommas, toWords, toWordsBangla };
