import { units, teens, tens, scales } from '../utils/constants';

const convertChunk = (num: number): string => {
  let words = '';
  if (num >= 100) {
    words += units[Math.floor(num / 100)] + ' Hundred ';
    num %= 100;
  }
  if (num >= 10 && num <= 19) {
    words += teens[num - 10] + ' ';
    num = 0;
  } else if (num >= 20) {
    words += tens[Math.floor(num / 10)] + ' ';
    num %= 10;
  }
  if (num > 0) {
    words += units[num] + ' ';
  }
  return words;
};

export const toWords = (num: number | string): string => {
  let numStr = num.toString().replace(/,/g, '');
  
  if (!/^-?\d+(\.\d+)?$/.test(numStr)) return 'Invalid Number';
  if (numStr === '0') return 'Zero';

  const isNegative = numStr.startsWith('-');
  if (isNegative) numStr = numStr.slice(1);

  // Split integer and decimal
  const parts = numStr.split('.');
  let integerPartStr = parts[0];
  
  // Remove leading zeros
  integerPartStr = integerPartStr.replace(/^0+/, '') || '0';
  if (integerPartStr === '0') return 'Zero';

  let words = '';
  let scaleIndex = 0;
  
  // Process in chunks of 3 from right to left
  while (integerPartStr.length > 0) {
    const chunkLen = Math.min(3, integerPartStr.length);
    const start = integerPartStr.length - chunkLen;
    const chunkStr = integerPartStr.slice(start);
    integerPartStr = integerPartStr.slice(0, start);
    
    const chunkNum = parseInt(chunkStr, 10);
    
    if (chunkNum > 0) {
      const chunkWords = convertChunk(chunkNum);
      const scaleName = scaleIndex < scales.length ? scales[scaleIndex] : ' (scale too high)'; 
      // Note: scales array needs to be extended if we want to support huge numbers properly, 
      // or we can reuse scales or just show numbers. 
      // For extremely large numbers, English usually stops at specific names or uses scientific notation.
      // We will assume 'scales' covers reasonable range, or user can extend constants.
      // But for 30+ digits we need more scales. 
      // Let's extend constants later if needed, for now standard implementation.
      
      words = chunkWords + (scaleIndex > 0 ? scaleName + ' ' : '') + words;
    }
    scaleIndex++;
  }

  return (isNegative ? 'Minus ' : '') + words.trim();
};

