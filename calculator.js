var big = "";
var small = "";
var prev = "";
var count= 0;
var sum = 0;
var sumArr=[];
var timer;

/*This is the button function. It registers and displays buttons pushed in two ways.
  "Big" displays each number as it is entered. "Small"" displays the string of numbers */
function getValue(value){
 /*If the button pushed is a number, or a decimal, the values are entered as a single
   unit, with no spaces between them. */
  if(value >= 0 && value <= 9 || value === "."){
    count = 0;
    var n = small.substr(-1);
     if(value+n == ".."){
      value ="";
     }
    big = big + value;
    small = small + value;
    document.getElementById("big").innerHTML= big;
    document.getElementById("small").innerHTML=small;
  /*If the button pushed is not a number, check that a number has been entered previously, and
    if so, push the number into sumArr. If an operand button has been pushed twice, slice the first
    operand from the string and replace it with the second. Also replace it in the array.*/
  }else {
    if (small !== ""){
      sumArr.push(big)
      count++;
        if (count > 1){
          small = small.slice(0, -1);
          sumArr.pop();
          sumArr.pop();
          
    }
    small = small + value;
    sumArr.push(value)
    document.getElementById("big").innerHTML= value;
    document.getElementById("small").innerHTML=small;
    big ="" 
    }
  }
  
 
  
}  
//Clears everything. Resets timer button.
function getClear(){
  big = "";
  small = "";
  sumArr.length = 0;
  clearInterval(timer);
  document.getElementById("timer").disabled = false;
  document.getElementById("big").innerHTML= 0;
  document.getElementById("small").innerHTML= 0; 
}

//gets the sum. Filters the array to remove empty elements.
//Runs through the array, calculating based on elements in the array.
//Uses switch statement to calculate.
function getSum(){
  sumArr.push(big);
    
  function isValid(value) {
  return value != "";
}

    var filtered = sumArr.filter(isValid);
    a=Number(filtered[0]);
    filtered.shift();
  
    while (filtered.length > 0){
      b = filtered[0];
      c = Number(filtered[1]);
  
      filtered.splice(0, 2);
  
 switch(b){
    case "+":
      sum = a + c;
      break;
    case "-" :
      sum = a - c;
      break;
    case "x":
      sum = a * c;
      break;
    case "/":
      sum = a / c;
    }
 
  a = sum;
  var sm = (sum * 100).toPrecision(10);
  s = sm/100;
  document.getElementById("big").innerHTML= s;
  } 

  big = "";
  small = "";
  sumArr.length = 0; 
}

//Calls the timing function. Has to be outside the timing function
//or it can't be turned off.
function setTimer(){
  timer = setInterval(getTime ,1000); 
}

//Timing function. Needed something to do with the blank button.
function getTime(){
    document.getElementById("timer").disabled = true;
    //cursor: default;
    var d = new Date();
    document.getElementById("big").innerHTML = d.toLocaleTimeString();
 
  
}
 