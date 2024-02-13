let x=10;
let y=x;
console.log("x : "+x +" y : "+ y );

x += x;
console.log(x);

x-=y;
console.log(y);

x*=y;
console.log(x);

y=5;
x/=y;
console.log(x);

y=3;
x%=y;
console.log(x);

x**=y; // x^y x=2 y=3 2^3 = 8
console.log(x)

//shift assignment operators
x=1002
y<<=x;
console.log(y)
y>>=x;
console.log(y)
y>>>=x;
console.log(y)

//bitwise assignment operators
x=1;
y=1;

x&=y;
console.log(x)
x^=y;
console.log(x);
x|=y;
console.log(x);

// logical assignment operator

x=true;
y=true;

x&&=y
console.log(x)

x||=y
console.log(x)

x??=y
console.log(x)