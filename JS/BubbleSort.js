const bubbleSort = (array = []) => {
    for(let i = 0; i < array.length ; i++) {
        for( let j = 0; j< array.length -i -1; j++) {
            if( array [j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp
            }
        }
    }
    return array
}

var arr = [];

for(let i = 0;i<100000;i++){
    arr.push(Math.floor(Math.random()*1000))
}
 
// Now pass this array to the bblSort() function

let start = performance.now()
console.log(bubbleSort(arr));
let end = performance.now();
console.log(end - start);