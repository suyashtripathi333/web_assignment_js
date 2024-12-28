/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/



let arr=[3,7,9,2,1];
console.log(arr);




function findlargestNumnber(arr){
    let max=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;

}

const result=findlargestNumnber(arr);
console.log(result);  