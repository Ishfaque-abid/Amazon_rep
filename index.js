// number import
// 1 is not prime

const x;
int y;
bool isPrime = true;
if (x != 1) {
    for (int i = 2; i < x ; i++) {
        y = x % i;
        if (y == 0) {
            isPrime = false;
            break;
        }
        else {
            isprime = true;
        }
    }
    if (isPrime) {
        console.log(x + "is a prime number")
    } else {
        console.log(x + "is not a prime");
    }
}
else {
    console.log("is not a prime")
}