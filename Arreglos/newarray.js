const names =["Ana","Stephanie","Victor","Hugo"];
const namesLowerCase =(arr) => {
    let result =[];
    for(let i=0; i<names.length; i++){

     result.push(names[i].toLowerCase());

    }
    console.log(result);
    return result;
    

}