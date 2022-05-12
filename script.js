 // ARROW FUNCTION
 /**
  * 
  * @param { first input} a 
  * @param {Second input} b 
  * @returns sum of the input
  */

 let sum = (a, b) => {
    return a + b;
  };

  console.log("LN 21-", sum(8, 15));

  let sum1=(a,b)=> a+b;
  console.log("LN 14",sum1(9,6));

//   anonymous function

let sumano= function(a,b){
    return a+b;
}
console.log("LN20-",sumano(9,20));
let sumano2=(a,b)=>a+b;

console.log("LN25-",sumano2(30,50));

// IIFE

let sumdetails=(function sum(a,b){
    console.log("LN31-"+"I am an IIFE sum");
    return a+b;
})(2,2);
console.log("LN34-",sumdetails);


let mult=((a,b)=>{
console.log("LN37-"+"i am in IIFE multiplication");
return a*b;
}
)(9,8);

console.log("LN41-",mult);


let divide= (a,b)=>a/b

console.log("LN45-",divide(4,2));

console.log("LN46-",divide(3,2));


let typeoff= (input)=> !input?"falsy":"truthy"

console.log("LN53-",typeoff(undefined));

console.log("LN54-",typeoff(null));

console.log("LN55-",typeoff("vishal"));


test()
console.log(test());
function test(){
    console.log("LN 65-test");
}


// console.log("line 68",test3);
var test2=function test2(){
    console.log("LN 68-i am test 2")
}

// Star Pattern
/**
 * 
 * @param {takes the numner as input for rows and colums} input 
 */

 function pattern(input){
    for(let i=0; i<input;i++){
        for(let j=input-i;j>0;j--){
            document.write("*");
          
        }  document.write("<br>");
    }
    }
    (pattern(5));
    (pattern(8));
    
    // Patter 2
    
    /**
     * {IIFE takes two input for rows and columns} columns,rows
     */
    
    ((column,rows)=>{
        for(let i=0;i<column;i++){
            for(let j=0;j<rows;j++){
                document.write("*")
            }document.write("<br>");
        }
    })(5,5);
    
    // Number Pattern
    
    /**
     * 
     * @param {takes the input from user} input 
     */
    
    // numberPattern(5); //tried calling with const and let but got reference error,with var  error was numberPatter is not a function
    
    
    var numberPattern= (input)=>{
        for(let i=0;i<input;i++){
            for(let j=input-i;j>0;j--){
                document.write(j);
            }
            document.write("<br>");
        }
    }
    
    numberPattern(5);
    
    // star pattern IIFE
    
    ((input)=>{
        for(let i=0;i<input;i++){
            for(let j=input-i;j<=input;j++){
                document.write("*");
            }document.write("<br>");
        }
    })(5);
    