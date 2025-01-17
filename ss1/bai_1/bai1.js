//Hàm kiểm tra số nguyên tố
const isPrime = (number) => {
    if (number <= 1) return false;
    return Array.from({ length: Math.floor(Math.sqrt(number)) - 1 }, (_, i) => i + 2)
        .every(divisor => number % divisor !== 0);
};

//Lọc ra các số là số nguyên tố trong mảng số nguyên dùng filter
const arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 13, 11, 90];
const checkNumber = arrNum.filter(isPrime);
console.log(checkNumber);
