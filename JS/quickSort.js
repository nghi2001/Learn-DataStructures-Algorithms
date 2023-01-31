const quickSort = (arr = []) => {
    if(arr.length <2) return arr;

    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];

    for( let i = 0; i< arr.length - 1 ; i++) {
        if( arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}
var arr = [];

for(let i = 0;i<100000;i++){
    arr.push(Math.floor(Math.random()*1000))
    console.log(arr[arr.length-1]);
}
let start = performance.now()
console.log(quickSort(arr));
let end = performance.now();
console.log(end - start);