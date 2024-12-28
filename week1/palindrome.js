const str ="Nan";



function palindrome(str){
    const str1 = str.toLowerCase().split("")
    
    reverse(str1);
    const str2=str1.join("")
    console.log(str2);


    return str2===str.toLowerCase();
}

function reverse(arr){
    let i=0;
    let j= arr.length-1;

    while(i>j){
        let temp = arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
        i++;
        j--;
    }

    return arr;
}

const result = palindrome(str);
console.log(result);