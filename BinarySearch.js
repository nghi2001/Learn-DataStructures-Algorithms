const search = (arr = [], value) => {
    let start = 0;
    let end = arr[arr.length-1];
    
    while( start <= end) {
        let mid = Math.floor((start+end)/2);

        if(arr[mid] == value) return true;

        else if( arr[mid] < value) {
            start = mid + 1;
        } else {
            end = mid -1;
        }
    }

    return false
}

let arr = [];
for(let i = 0; i< 10000000;i++) {
    arr.push(i)
}

let sta = performance.now()
let res = search(arr, 99999999);
let en = performance.now()

console.log(en-sta);
console.log(res);
console.log(arr.length);