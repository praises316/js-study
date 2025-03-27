// let a = 5,  
//     b = 8,  
//     c = 3,  
//     d = 10;  
  
//   a += b-- - ++c;  
//   c *= a % d || b;  
//   b = (c > 10 && d < 15) ? --d : a++;  
//   d = !(b % 2) ? d + 5 : d - 3;  
  
//   let result = (a > b || c < d) && !(d < a);  
  
//   console.log(a, b, c, d, result);


  let x = 10,  
    y = 5,  
    z = 2;  

x -= ++y + z--;  
y *= x % z + 3;  
z += y-- - x / 2;  

let results = (x * 2 <= y + z) ? ++x : --y;  

console.log(x, y, z, result);


let a = 8;  
let b = 3;  
let c = 10;  

a += ++b * 2;  
c -= a-- / b;  
b *= a % c;  

let result = (a + b) >= (c - 2) ? a++ : --c;  

console.log(a, b, c, result );



let p = 7,  
    q = 4,  
    r = 12;  

p *= --q + r / 3;  
7 *= --4 +12/3
console.log(p)

r -= p++ - q * 2;  
q += p % r;  

let resultss = (p - q > r / 2) ? --p : q++;  

console.log(p, q, r, result);

// Illustration of (===) operator
// let x = 5;
// let y = '5';

// // Checking of operands
// console.log(x === 6);
// console.log(y === '5');        
// console.log(x === y);

// console.log();

// // Check against special values
// console.log(NaN === NaN);   
// console.log(0 === false);   
// console.log(0 === null);



// Illustration of (!=) operator
// let x = 5;
// let y = '5';

// // Checking of operands
// console.log(x != 6);
// console.log(y != '5');        
// console.log(x != y);

// console.log();

// // Check against special values
// console.log(0 != false);   
// console.log(0 != null);
// console.log(NaN != NaN);


