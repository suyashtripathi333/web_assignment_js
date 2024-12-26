

function anagram(str1,str2){
   
    const arr1 = str1.split("").sort().join("");
    const arr2 = str2.split("").sort().join("");
    if(str1.length !== str2.length){
        return false;
    }   
    else if(arr1 === arr2){
        return true;
    }
}


const result = anagram("asam","sama");
console.log(result);


