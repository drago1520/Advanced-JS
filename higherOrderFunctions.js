//This is a standart calculator

function add (num1, num2){
    return num1+num2;
};
function sub (num3, num4){
    return num3 - num4;
};
function mult (num1, num2){
    return num1*num2;
};
function divide (num3, num4){
    return num3/num4;
};
function modular (num1, num2){
    return num1%num2;
};
function calc (num1, num2, wut_to_do){
    return wut_to_do(num1, num2);
};
console.log(calc(5,3,add));
