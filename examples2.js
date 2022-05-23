var letters = ['a','b', 'c'];
var numbers = ['1', '2', '3'];

function push(letters,newItem){
    letters[letters.length]= newItem;
    return letters;

}

console.log(push(letters,"d"));
console.log(push(numbers,"4"));

//this example is to add elements to an array without using push
//instead we are creating our push method 