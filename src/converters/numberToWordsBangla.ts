import { banglaWords0to99, banglaScales } from '../utils/constants';

export const toWordsBangla = (num: number | string): string => {
  let numStr = num.toString().replace(/,/g, '');

  if (!/^-?\d+(\.\d+)?$/.test(numStr)) return 'অমান্য সংখ্যা';
  if (numStr === '0') return 'শূন্য';

  const isNegative = numStr.startsWith('-');
  if (isNegative) numStr = numStr.slice(1);

  // Split integer and decimal
  const parts = numStr.split('.');
  let integerPartStr = parts[0];
  
  // Remove leading zeros
  integerPartStr = integerPartStr.replace(/^0+/, '') || '0';
  if (integerPartStr === '0') return 'শূন্য';

  const words = convertToBanglaUnknown(integerPartStr);

  return (isNegative ? 'ঋণাত্মক ' : '') + words.trim();
};

const convertToBanglaUnknown = (numStr: string): string => {
  if (numStr.length === 0) return '';
  
  // Max integer safe length in JS is 15-16. But we should handle strings of any length.
  // The structure is cyclic:
  // Koti (1,00,00,000) - 7 zeros.
  // So anything larger than 7 digits is "Koti".
  
  if (numStr.length > 7) {
    const kotiIndex = numStr.length - 7;
    const kotiPart = numStr.slice(0, kotiIndex); // The number of Kotis
    const remainder = numStr.slice(kotiIndex);   // The remaining < 1 Crore
    
    // Recursive Step
    // Example: 100000000 -> "10" (Koti) + "0000000" (remainder)
    // 10 Koti 0
    // But we need to handle "Koti Koti" if it's super huge? 
    // Standard Bangla doesn't strictly say "Koti Koti", but for huge currency it loops.
    // Let's implement recursive Koti.
    
    const kotiWords = convertToBanglaUnknown(kotiPart);
    const remainderWords = convertToBanglaSmall(parseInt(remainder, 10)); // Safe since <= 7 digits
    
    return `${kotiWords} ${banglaScales[4]} ${remainderWords}`.trim();
  }
  
  // If <= 7 digits, we can parse safely
  const n = parseInt(numStr, 10);
  return convertToBanglaSmall(n);
};

const convertToBanglaSmall = (num: number): string => {
  if (num === 0) return '';
  
  let words = '';
  
  // Lakhs - 1,00,000 (5 zeros, digits 6,7)
  if (num >= 100000) {
    const lakh = Math.floor(num / 100000);
    words += banglaWords0to99[lakh] + ' ' + banglaScales[3] + ' ';
    num %= 100000;
  }
  
  // Thousands - 1,000 (3 zeros, digits 4,5)
  if (num >= 1000) {
    const thousand = Math.floor(num / 1000);
    words += banglaWords0to99[thousand] + ' ' + banglaScales[2] + ' ';
    num %= 1000;
  }
  
  // Hundreds - 100
  if (num >= 100) {
    const hundred = Math.floor(num / 100);
    words += banglaWords0to99[hundred] + ' ' + banglaScales[1] + ' ';
    num %= 100;
  }
  
  // Remaining 0-99
  if (num > 0) {
    words += banglaWords0to99[num] + ' ';
  }
  
  return words.trim();
};

