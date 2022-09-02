var largeInput = document.querySelector("#largeInput");
var smallInput = document.querySelector("#smallInput");
var varResult;
var numberStored;
var flag = false;
var resultFlag = true;
var repeatOperator = [];
function getNumber(num) {
  if(numberStored == "square"){
    numberStored = 0;
    largeInput.value = "";
  }
  // console.log(num)
  var a = largeInput.value;
  if (flag) {               // for large input field empty after user enter the operator
    largeInput.value = "";
  }
  largeInput.value += num;
  // smallInput.innerHTML +=  num;
  if (a === "") {           // for user enter first number then largeIntput value stored in numberstored
    numberStored = largeInput.value;
  } else {                  // old value add into latest value 
    numberStored += num;
  }
  // console.log('numberstored in getnumber:', numberStored)
  flag = false;
  // console.log("largeInpur n: ", largeInput.value)
  // console.log("smallInput n: ", smallInput.value)
  // console.log("numberStored n: ",numberStored)
}
function getOperator(operator) {
  
  var a = repeatOperator.slice(-1);
  if (a != operator) { // double operator does not add in numberStore
    numberStored += operator;
  }
  if (a != operator && repeatOperator.length <= 1) { // restriction for double same operator and repeat operator
    smallInput.innerHTML = numberStored;
    console.log("double : ", a)
  }
  console.log('mycheck', numberStored)
  // console.log('mycheck',repeatOperator)
  repeatOperator.push(operator);
  if (repeatOperator.length > 1 && operator) {
    if (numberStored.slice(-1) == "*" || numberStored.slice(-1) == "-" || numberStored.slice(-1) == "+" || numberStored.slice(-1) == "/") {
      numberStored = numberStored.slice(0, -1)
    } console.log("after pop ", numberStored)
    numberStored = eval(numberStored);
    smallInput.innerHTML = numberStored + operator;
    largeInput.value = numberStored;
    numberStored += operator;
    repeatOperator.splice(2);
    console.log("check")
  }
  flag = true;
}
function allClear() {
  largeInput.value = "";
  smallInput.value = "";
  arr = [];
  console.log(arr);
  window.location.reload();
}
function characterDelete() {
  if (resultFlag && numberStored.length > 1) { // for after result smallinput.innerHTML none and don't do it again befor doing any other operation
    console.log("resultFlag numberstored: " + numberStored)
    var a = numberStored;
    var b = a.slice(0, numberStored.length - 1);
    var c = largeInput.value.slice(0, largeInput.value.length - 1);
    numberStored = b;
    largeInput.value = c;
  } else {
    smallInput.innerHTML = "&nbsp;";
    largeInput.value = numberStored;
  }
}
function result() {
  varResult = eval(numberStored);
  largeInput.value = varResult;
  console.log("numberStored", numberStored);
  smallInput.innerHTML = numberStored + "=";
  console.log('varResult:', varResult)
  numberStored = eval(numberStored);
  console.log("numberstored value : ", numberStored);
  repeatOperator.splice(0);
  console.log(repeatOperator);
  resultOper = "fayyaz";
  resultFlag = false;
}
function square() {
  if (numberStored) {
    numberStored = Number(numberStored);
    var result = numberStored * numberStored;
    smallInput.innerHTML = "sqr("+ result +")";
    largeInput.value = result;
    console.log(typeof numberStored);
    numberStored = numberStored.toString();
    console.log(typeof numberStored);
  }
  numberStored = "square";
}
window.keycode()
function percentage(){
  var result;
  var ab = "12546+2*3*2-3*4/5";
  var abc = ab.split("");
  var index = [];
  var indexValue =[];
  var count=0;
  for (var i = 0; i < abc.length; i++) {
    var a = abc[i];
    if (a == "+" || a == "-" || a == "*" || a == "/") {
      // count +=0  
      indexValue.push(abc[i])
      index.push(i)
      abc.splice(i, 1, indexValue[count])
      count++;
    }
  }
  console.log('result bjoin', abc)
  result = abc.join("");
  // var forPercentage = result.split("+");
  console.log('result ajoin', result)
  
}