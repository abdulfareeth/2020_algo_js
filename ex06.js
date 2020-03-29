// function functionName(param1, param2){ //statements}

function yes(){
    return true;
}
console.log(yes());
//02


function secondName(name){
    return name;
}
console.log(secondName("Fareeth"));
//03

function myName(name, age){
    return "My Name :" + name +" "+ "My Age :" + age;
}
console.log(myName("abdul", 33));

//04

function large(number1, number2){
    if (number1 > number2){
        return "number1 is greater than number 2";
    }else if(number1 < number2){
        return "number1 is less than number2";
    }else {
        return "two numbers are identical or equal";
    }
}
console.log(large(23,56));
