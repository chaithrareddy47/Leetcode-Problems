// last digit using % we get last didgit of anumber

let n = 121;
// console.log(n % 10); // we got last digit here
let originalNum = n;



// let lastDigit = n 
// console.log(Math.floor(lastDigit / 10));// here we removed the last digit using math.floor
let reverse = 0;

while (n > 0) {
    let lastDigit = n % 10;
    // last digit i have to put in some varibale to i use reverse as varble name
    reverse = reverse * 10 + lastDigit // here what we doing is reverse will be 0 so we are  multiplying why mesna last didgit has to sit in reverse so we are using this bcs last varible should not dissaper whn we add another last dight it site next that last digit
    
    // removing the last dight 
    // n exact value 1234
    
    n = Math.floor(n / 10);

}

if (reverse === originalNum) {
    console.log(reverse);
    
} else {
    console.log(false +" "+  reverse);
    
}
