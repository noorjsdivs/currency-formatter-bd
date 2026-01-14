# currency-converter-bd

![Version](https://img.shields.io/npm/v/currency-converter-bd?style=flat-square&color=2E7D32)
![License](https://img.shields.io/npm/l/currency-converter-bd?style=flat-square&color=blue)
![Downloads](https://img.shields.io/npm/dt/currency-converter-bd?style=flat-square&color=orange)
![Size](https://img.shields.io/bundlephobia/minzip/currency-converter-bd?style=flat-square&color=purple)

<br/>

A lightweight, robust, and type-safe TypeScript utility for handling **Bangladeshi Currency** (Taka) and **Number Formats**.

<br/>

<div align="center">

| [English](#english-content) | [বাংলা](#bangla-content) |
| :---: | :---: |

</div>

<br/>

<div id="english-content">

## English Documentation

> 🇧🇩 **Made for Bangladesh**: Includes specific formatting rules (3,2,2 grouping) and number-to-words conversion in both Bangla and English.
>
> 🌐 Find out more at [**reactbd.com**](https://www.reactbd.com/)

### ✨ Features

- **🇧🇩 Comma Formatting**: Formats numbers using the South Asian/Bangladeshi numbering system (e.g., `1,23,45,678`).
- **🔤 Number to Words**: 
  - **English**: Converts to standard English words (e.g., "One Hundred Taka").
  - **Bangla**: Converts to accurate Bangla words (e.g., "এক শত টাকা").
  - **Large Numbers**: Supports massive numbers (Trillions, Kotis) with precision (handles strict string inputs).
- **৳ Currency Formatting**:
  - Fully customizable currency strings.
  - Supports symbols (`৳`, `Tk`), positioning (`left`, `right`), and decimals.
- **🚀 Modern Stack**: Built with TypeScript, zero dependencies, ESM/CJS support.

### 📦 Installation

```bash
npm install currency-converter-bd
# or
yarn add currency-converter-bd
# or
pnpm add currency-converter-bd
# or
bun add currency-converter-bd
```

### 🛠️ Usage Examples

#### 1. Bangladeshi Comma Formatting
Properly places commas for easy readability in the local context.

```typescript
import { formatWithCommas } from 'currency-converter-bd';

console.log(formatWithCommas(12345678)); 
// Output: "1,23,45,678"

console.log(formatWithCommas('100000000050')); 
// Output: "1,00,00,00,00,050" (Handles huge strings!)
```

#### 2. Number to Words

**English (International Style)**
```typescript
import { toWords } from 'currency-converter-bd';

console.log(toWords(1050)); 
// Output: "One Thousand Fifty"

console.log(toWords('1098989389384384398434834893')); 
// Output: "One Octillion ..." (Handles very large numbers!)
```

**Bangla (Local Style)**
```typescript
import { toWordsBangla } from 'currency-converter-bd';

console.log(toWordsBangla(150)); 
// Output: "এক শত পঞ্চাশ"

console.log(toWordsBangla(1234567)); 
// Output: "বারো লক্ষ চৌত্রিশ হাজার পাঁচ শত সাতষট্টি"

// Large numbers (e.g., 100 Crore)
console.log(toWordsBangla('1000000000'));
// Output: "এক শত কোটি"

// Recursive Koti Support (e.g., 1 Crore Crore)
console.log(toWordsBangla('100000000000000'));
// Output: "এক কোটি কোটি"

```

#### 3. Currency Formatting
Format prices exactly how you want them.

```typescript
import { formatCurrency } from 'currency-converter-bd';

// Default
console.log(formatCurrency(1500)); 
// Output: "৳ 1,500.00"

// Custom Symbol & Position
console.log(formatCurrency(5000, { symbol: 'Tk', position: 'right', spaced: true })); 
// Output: "5,000.00 Tk"

// No Decimals
console.log(formatCurrency(199.99, { decimals: 0 })); 
// Output: "৳ 200"
```

### ⚙️ API Reference

- `formatWithCommas(num: number | string): string`
- `toWords(num: number | string): string`
- `toWordsBangla(num: number | string): string`
- `formatCurrency(amount: number | string, options?: CurrencyOptions): string`

</div>

<br/>
<hr>
<br/>

<div id="bangla-content">

## বাংলা ডকুমেন্টেশন

> 🇧🇩 **বাংলাদেশের জন্য তৈরি**: এতে রয়েছে নির্দিষ্ট কমা বিন্যাস নিয়ম (৩-২-২ গ্রুপিং) এবং বাংলা ও ইংরেজি উভয় ভাষায় সংখ্যা-থেকে-শব্দ রূপান্তর।
>
> 🌐 আরও জানুন [**reactbd.com**](https://www.reactbd.com/) এ।

### ✨ প্রধান বৈশিষ্ট্যসমূহ

- **🇧🇩 বাংলাদেশী-স্টাইল কমা ফরম্যাটিং**: স্থানীয় প্যাটার্নে অঙ্ক গ্রুপ করে (যেমন ১,২৩,৪৫,৬৭৮)।
- **🔤 সংখ্যা থেকে শব্দ রূপান্তর**:
  - **ইংরেজি**: সংখ্যাকে পাঠযোগ্য ইংরেজি টেক্সটে রূপান্তর করে (যেমন "One Hundred Taka")।
  - **বাংলা**: কোটি-লক্ষ সিস্টেম ব্যবহার করে সঠিক বাংলা শব্দ (যেমন "এক শত টাকা")।
  - **বিশাল সংখ্যা হ্যান্ডলিং**: স্ট্রিং ইনপুটের মাধ্যমে অত্যন্ত বড় মানগুলো কাজ করে।
- **৳ মুদ্রা ফরম্যাটিং**:
  - চিহ্ন (যেমন ৳ বা Tk), প্লেসমেন্ট, স্পেসিং এবং দশমিক নির্ভুলতার জন্য নমনীয় অপশন।
- **🚀 আধুনিক স্ট্যাক**: টাইপস্ক্রিপ্ট দিয়ে তৈরি, কোনো ডিপেন্ডেন্সি নেই।

### 📦 ইনস্টলেশন

```bash
npm install currency-converter-bd
# অথবা
yarn add currency-converter-bd
```

### 🛠️ ব্যবহারের উদাহরণ

#### ১. বাংলাদেশী কমা ফরম্যাটিং
দক্ষিণ এশীয় কমা গ্রুপিং প্রয়োগ করে (৩-২-২)।

```typescript
import { formatWithCommas } from 'currency-converter-bd';

console.log(formatWithCommas(12345678));
// আউটপুট: "1,23,45,678"

console.log(formatWithCommas('100000000050'));
// আউটপুট: "1,00,00,00,00,050"
```

#### ২. সংখ্যা থেকে শব্দ

**ইংরেজি (আন্তর্জাতিক স্টাইল)**
```typescript
import { toWords } from 'currency-converter-bd';

console.log(toWords(1050));
// আউটপুট: "One Thousand Fifty"
```

**বাংলা (স্থানীয় স্টাইল)**
```typescript
import { toWordsBangla } from 'currency-converter-bd';

console.log(toWordsBangla(150));
// আউটপুট: "এক শত পঞ্চাশ"

console.log(toWordsBangla(1234567));
// আউটপুট: "বারো লক্ষ চৌত্রিশ হাজার পাঁচ শত সাতষট্টি"

// বিশাল সংখ্যা (যেমন ১০০ কোটি)
console.log(toWordsBangla('1000000000'));
// আউটপুট: "এক শত কোটি"

// ১ কোয়াড্রিলিয়নের জন্য রিকার্সিভ হ্যান্ডলিং
console.log(toWordsBangla('100000000000000'));
// আউটপুট: "এক কোটি কোটি"
```

#### ৩. মুদ্রা ফরম্যাটিং
টাকার পরিমাণ কীভাবে প্রদর্শন করবেন তা কাস্টমাইজ করুন।

```typescript
import { formatCurrency } from 'currency-converter-bd';

// বেসিক
console.log(formatCurrency(1500));
// আউটপুট: "৳ 1,500.00"

// কাস্টম
console.log(formatCurrency(5000, { symbol: 'Tk', position: 'right', spaced: true }));
// আউটপুট: "5,000.00 Tk"
```

### ⚙️ এপিআই রেফারেন্স

- `formatWithCommas`: বাংলাদেশী কমা যুক্ত স্ট্রিং রিটার্ন করে।
- `toWords`: আন্তর্জাতিক পদ্ধতিতে ইংরেজিতে রূপান্তর করে।
- `toWordsBangla`: দেশীয় পদ্ধতিতে (কোটি-লক্ষ) বাংলায় রূপান্তর করে।
- `formatCurrency`: কাস্টম ফরম্যাটে টাকার অঙ্ক প্রদর্শন করে।

</div>

<br/>
<hr>
<br/>

## 🤝 Contribution / অবদান

We welcome contributions! Please follow these steps:
1. Clone the repo.
2. Install dependencies: `npm install`.
3. Run tests to ensure everything works: `npm test`.
4. Submit a PR.

## 📄 License
MIT
