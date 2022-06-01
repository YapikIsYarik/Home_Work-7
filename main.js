"use strict"
let testArray = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];
let RandomArray = []
//..1
function getRandomArray  (length, min, max){
    for (let i =0; i<length; i++){
        RandomArray.push(Math.round(Math.random() * (max - min) + min) );
    }
    return RandomArray;
}
console.log("Random Array:  " , getRandomArray(6,-2, 5))
//..2
function getModa (arr) {
    const mode = {};
    let max = 0, count = 0;
    for(let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if(mode[item]) {
            mode[item]++;
        } else {
            mode[item] = 1;
        }
        if(count < mode[item]) {
            max = item;
            count = mode[item];
        }
    }
    return max;
}
console.log('test array: ',testArray)
console.log("Moda:  " ,getModa(testArray))
//..3
function getAverage (arr) {

  let sum =  arr.reduce((sum , current ,i) => {
       return  sum + current;
    })
   return +(sum/(arr.length )).toFixed(3);
}
console.log("Average:  " ,getAverage(sortArr(testArray)))
//..4
function sortArr (arr) {
   let sort =  arr.sort((a , b) =>{
        return a-b;
    }).filter((int) =>{
        return int % 1 === 0;
   })
    return sort;
}
//console.log(sortArr(testArray))
function  getMedian (arr) {
    let num = 0;
    let numTwo = 0;
    if(arr.length%2 == 0 ){
        num = Math.floor(arr.length/2)-1;
        numTwo = Math.ceil(arr.length/2);
        if(numTwo === num){
            return arr[num];
        }else{
            return( arr[numTwo] + arr[num])/2
        }
    } else{
        num = Math.floor(arr.length/2)
        return arr[num]
    }
}
console.log( "Median:  " , getMedian( sortArr(testArray)))

//..5
function filterEvenNumbers ( arr) {
    return arr.filter ((even) =>{
        return (even % 2) !== 0 ;
    } )

}
console.log("Not even Random Array" , filterEvenNumbers(RandomArray))
//..6
function countPositiveNumbers (arr) {
    let count = 0;
    for(let num of arr) {
        if(num > 0){
            count++;
        }
    }
    return count;
}
console.log("Positive Numbers Random Array " , countPositiveNumbers(RandomArray));
//..7
function getDividedByFive( arr) {
    return arr.filter ((even) =>{
        return (even % 5) == 0 ;
    } )
}
console.log('Divided By Five  ', getDividedByFive(testArray));
//..8
function replaceBadWords(str){
let badWords = /fuck|shit/gi ;
return str.replace(badWords,"****");
}
console.log(replaceBadWords("Are you fucking kidding?"))
//..9

const divideByThree = (word) =>  word.toLowerCase().match(/.{1,3}/g)
console.log(divideByThree("Commander"));
//..10
function generateCombinations( word ){
    if (!word || typeof word !== "string"){
        return "Please enter a string"
    } else if (word.length < 2 ){
        return word
    }
    let permutationsArray = []
    for (let i = 0; i < word.length; i++){
        let char = word[i]
        let remainingChars = word.slice(0, i) + word.slice(i + 1, word.length)
        for (let permutation of generateCombinations(remainingChars)){
            permutationsArray.push(char + permutation) }
    }
    return permutationsArray
    }
console.log(generateCombinations("man"))
