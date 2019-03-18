const firstWord = "Roma";
const secondWord = "Amor";
const anagram = (firstWord,secondWord) => {

const firstWordLowerCase = firstWord.toLowerCase();
const secondWordLowerCase = secondWord.toLowerCase();

if(firstWordLowerCase().split("").sort().join("") === secondWordLowerCase().split("").sort().join("")){ //split separa, join junta, sort ordena 

    console.log("true");
} else {
    console.log("false");
}

}

console.log(anagram(firstWord,secondWord))