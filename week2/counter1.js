// here we intialize count with value 0;
let count =0;

// here we intialize interval 
const interval = setInterval(()=>{   //here we are using setInterval for making counter 
    count++;  //count is increamented by one ;
    console.log(count); // printing count 

    if(count===10){
        clearInterval(interval);// count reaches 10 then clearInterval will stop the counter
        console.log("he counter stopped");
    }
},1000);