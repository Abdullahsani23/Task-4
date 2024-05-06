var randomNum =Math.random()*10 
var randomNum2 =Math.floor(randomNum)
console.log(randomNum);
console.log(randomNum2);

var userNum =prompt("enter a random number")
if(userNum ==randomNum2){
    document.write("Good Work")
}else{
    document.write("Not Matched Try Again")
}