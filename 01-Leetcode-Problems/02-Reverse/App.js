let n = 1237876;
let reverse = 0;
let lastDigit = 0;
while (n > 0) {
    lastDigit = n % 10;
    reverse = reverse * 10 + lastDigit;
    n = Math.trunc(n / 10);
}

console.log(reverse);
