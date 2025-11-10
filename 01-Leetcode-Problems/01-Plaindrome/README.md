// ----------------------------------------
// 💡 Why we use Math.floor()
// ----------------------------------------

// In DSA problems like reverse number or palindrome,
// we use Math.floor() to remove the last digit easily.

// Earlier (manual way):
// We used to do this in two steps:
// 1️⃣ Find last digit → digit = n % 10
// 2️⃣ Remove last digit → n = (n - digit) / 10

// Example:
// n = 153
// digit = 153 % 10 = 3
// n = (153 - 3) / 10 = 150 / 10 = 15

// 🔹 Using Math.floor() – shortcut method
// Instead of subtracting and then dividing,
// we directly divide and remove decimal part:
//
// n = Math.floor(n / 10)
//
// Example:
// n = Math.floor(153 / 10)
// n = Math.floor(15.3) = 15 ✅

// So Math.floor() just helps remove the decimal part
// (it rounds down to nearest integer) and saves 1 extra step.

// 🔸 Simple meaning:
// %10 → gives last digit
// Math.floor(/10) → removes last digit
//
// That’s why we use Math.floor() — cleaner and faster code.
// ----------------------------------------
