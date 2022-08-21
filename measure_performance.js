let start = 0;
let end = 0;

const sum = (num) => {
    // let result = 0;
    // for(let i = 1;i<=num;i++) {
    //     result += i
    // }

    return (num / 2) * (1 + num)
}

start = performance.now();
sum(30000000000000000000000000000000000)
end = performance.now();
console.log(end-start);