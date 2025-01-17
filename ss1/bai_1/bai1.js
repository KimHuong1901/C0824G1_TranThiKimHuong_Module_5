//Hàm kiểm tra số nguyên tố
let checkNum =(number)=> {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
};
//Lọc ra các số là số nguyên tố trong mảng số nguyên dùng filter
const arrNum = [1, 2, 3, 4, 5, 6, 7, 8];
const checkNumber = arrNum.filter(checkNum);
console.log(checkNumber);
