let arr = [5,3,10,9,0,14,16,15,22,21,19]

const find = (arr = []) => {
    if( arr.length <2) return arr
    let pivot = arr[arr.length -1];
    let left = []
    let right = []

    for( let i = 0 ; i< arr.length-1;i++) {
        if(arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...find(left), pivot, ...find(right)]
}

let a = find(arr);
console.log(a[a.length -2]);