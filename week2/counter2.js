let count =0;

// here for iteration we are using function inside function counter function is called by setTimeout function
function counter(){
    console.log(count);
    count++;

    setTimeout(counter,1000);
}

counter();