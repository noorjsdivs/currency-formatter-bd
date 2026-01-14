import { describe, it, expect } from 'vitest';
import { toWords } from '../src/converters/numberToWords';
import { toWordsBangla } from '../src/converters/numberToWordsBangla';
import { convertCurrency } from '../src/converters/currency';

describe('Number to Words (English)', () => {
  it('converts basic numbers', () => {
    expect(toWords(1)).toBe('One');
    expect(toWords(15)).toBe('Fifteen');
    expect(toWords(55)).toBe('Fifty Five');
  });

  it('converts large numbers', () => {
    expect(toWords(123)).toBe('One Hundred Twenty Three');
    expect(toWords(1234)).toBe('One Thousand Two Hundred Thirty Four');
    // 100,000 -> One Hundred Thousand
    expect(toWords(100000)).toBe('One Hundred Thousand'); 
    expect(toWords(1234567)).toBe('One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven');
  });

  it('handles very large numbers (string input)', () => {
    // 1,000,000,000,000
    expect(toWords('1000000000000')).toBe('One Trillion');
    // 10 Decillion
    // 10 followed by 33 zeros 
    const huge = '10' + '000000000000000000000000000000000'; // 10 Decillion
    expect(toWords(huge)).toBe('Ten Decillion');
    
    // User provided example: 1098989389384384398434834893
    // Length: 28 digits.
    // 1 Octillion ...
    const userExample = '1098989389384384398434834893';
    expect(toWords(userExample)).toContain('Octillion');
  });

  it('handles zero', () => {
    expect(toWords(0)).toBe('Zero');
  });
});

describe('Number to Words (Bangla)', () => {
  it('converts basic numbers', () => {
    expect(toWordsBangla(1)).toBe('এক');
    expect(toWordsBangla(10)).toBe('দশ');
    expect(toWordsBangla(27)).toBe('সাতাশ');
  });

  it('converts large numbers (Lakh/Koti)', () => {
    expect(toWordsBangla(100)).toBe('এক শত');
    expect(toWordsBangla(123)).toBe('এক শত তেইশ');
    expect(toWordsBangla(1000)).toBe('এক হাজার');
    expect(toWordsBangla(123456)).toBe('এক লক্ষ তেইশ হাজার চার শত ছাপ্পান্ন'); // 1,23,456
    expect(toWordsBangla(10000000)).toBe('এক কোটি');
  });
  
  it('handles very large numbers (Recursive Koti)', () => {
    // 1 Koti = 1,00,00,000 (8 digits, 7 zeros)
    // 100 Koti = 1,00,00,00,000 (10 digits)
    expect(toWordsBangla('1000000000')).toBe('এক শত কোটি');
    
    // 1 Koti Koti = 1,00,00,000 x 1,00,00,000 = 10^14 + 1 = 15 digits (1 followed by 14 zeros)
    // Actually Koti Koti logic:
    // 10000000 (1 Koti)
    // 100000000000000 (14 zeros) -> 1 Koti Koti ?
    // Banglsa logic: 
    // 8 digits: 1 Koti
    // 15 digits: 1 Koti Koti
    const kotiKoti = '100000000000000';
    expect(toWordsBangla(kotiKoti)).toBe('এক কোটি কোটি');
  });
});

describe('Currency Conversion', () => {
  it('converts correctly', () => {
    expect(convertCurrency(100, 1.5)).toBe(150);
  });
  
  it('throws on invalid rate', () => {
    expect(() => convertCurrency(100, -1)).toThrow();
  });
});
