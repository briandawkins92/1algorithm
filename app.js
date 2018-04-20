/* BEGIN JAVASCRIPT*/

var number = 100;
intervalID  = setInterval (decrement, 4500);
function decrement (){
    number--;
setTimeout (function () {console.log(number + " bottles of beer on the wall!");}, 1000);
setTimeout (function () {console.log(number + " bottles of beer!");}, 2000);
setTimeout (function () {console.log("you take one down, pass it around");}, 3000);
setTimeout (function () {console.log(number - 1 + " bottles of beer!");}, 4000);


}

/*END JAVASCRIPT*/