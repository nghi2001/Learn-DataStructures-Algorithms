const PalindromeNum = (number = 0) => {
    let x = number;
    x = x.toString();
    x = x.split('');
    x.reverse();
    let newnum = x.join('')
    if(Number(newnum) == number) {
        return true
    } else {
        return false
    }
}

let number = 102;
let result = PalindromeNum(number)