import { describe, it, expect } from 'vitest';
import { formatWithCommas } from '../src/formatters/commaFormatter';
import { formatCurrency } from '../src/formatters/currencyFormatter';

describe('Comma Formatter', () => {
  it('formats Bangladeshi numbers correctly', () => {
    expect(formatWithCommas(12345678)).toBe('1,23,45,678');
    expect(formatWithCommas(100000)).toBe('1,00,000');
    expect(formatWithCommas(1234)).toBe('1,234');
    expect(formatWithCommas(100)).toBe('100');
  });

  it('handles decimals', () => {
    expect(formatWithCommas(1234.56)).toBe('1,234.56');
    expect(formatWithCommas(123456.789)).toBe('1,23,456.789');
  });

  it('handles negative numbers', () => {
    expect(formatWithCommas(-12345678)).toBe('-1,23,45,678');
  });

  it('handles string input', () => {
    expect(formatWithCommas('12345678')).toBe('1,23,45,678');
  });
});

describe('Currency Formatter', () => {
  it('formats defaults correctly', () => {
    expect(formatCurrency(100)).toBe('৳ 100.00');
    expect(formatCurrency(1234)).toBe('৳ 1,234.00');
  });

  it('supports customization', () => {
    expect(formatCurrency(100, { symbol: 'Tk', position: 'right' })).toBe('100.00 Tk');
    expect(formatCurrency(100, { spaced: false })).toBe('৳100.00');
    expect(formatCurrency(100.5, { decimals: 0 })).toBe('৳ 101'); // rounding
  });
});
