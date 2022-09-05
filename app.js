var largeInput = document.querySelector("#largeInput");
var smallInput = document.querySelector("#smallInput");
var varResult;
var numberStored;
var flag = false;
var resultFlag = true;
var repeatOperator = [];
var percentShow;
var finalPercentage;
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
  numberStored = "";
  largeInput.value = "";
  smallInput.innerHTML = "&nbsp";
  arr = [];
  console.log(arr);
  // window.location.reload();
}
function characterDelete() {
  if (resultFlag && numberStored.length >= 1) { // for after result smallinput.innerHTML none and don't do it again befor doing any other operation
    console.log("resultFlag numberstored: " + numberStored)
    // var a = numberStored;
    var b = numberStored.slice(0, numberStored.length - 1);
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
  if(percentShow){
    smallInput.innerHTML = percentShow;
    largeInput.value = finalPercentage;
  }
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
function percentage(){
  var result;
  var ab = numberStored;
  var abc = ab.split("");
  var index = [];
  var indexValue =[];
  var count=0;
  var total;
  var operator;
  var obtained;
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
  result = abc;
  var arr = [];
  var arrIndex = [];
  var arrValue=[];
  var c=0;
  for (var i = 0; i < abc.length; i++) {
    var a = abc[i];
    var b ;
    var flag = true;
    if (a == "+" || a == "-" || a == "*" || a == "/") {
      b = result.slice(c,i);
      b=b.join("");
      arr.push(b);
      arr.push(a);
      arrIndex.push(i);
      c = i+1;
    }else if(flag && (i==abc.length-1)){
      var a = Number(arrIndex.slice(-1))+1;
      var b = result.slice(a).join("");
      arr.push(b);
      total = arr.slice(0,-2).join("");
      operator = arr.slice(-2,-1).join("");
      obtained = arr.slice(-1).join("");
      var process =eval(total)+operator+(eval(total)/100*obtained);
      flag= false;
    }else{arrValue.push(a);}
  }
  finalPercentage = eval(process);
  smallInput.innerHTML = process;
  largeInput.value =(eval(total)/100*obtained);
  percentShow = process + "=";
  numberStored = finalPercentage;
  console.log('main arr after ',arr)
  console.log('final percentage arr after ',finalPercentage)
  // console.log('copy array : ', arr.slice(0,-2))
  result = abc.join("");
  // var forPercentage = result.split("+");
  console.log('result ajoin', result);
}
window.addEventListener('keydown',(e)=>{
  var b= e.key;
  var a= b.charCodeAt(0);
  if(a>=48 && a<=57){
    getNumber(b);
    console.log("keycode ",a)
    console.log("key ",b)
    console.log('typte of keycode:',typeof a)
    console.log('type of keytypeof',typeof b)
  }
  if(a>=48 && a<=57){
    getNumber(b);
    console.log("keycode ",a)
    console.log("key ",b)
    console.log('typte of keycode:',typeof a)
    console.log('type of keytypeof',typeof b)
  }
}) 