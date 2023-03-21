//Array Methods
//Your task is to add the missing logic to a transformToObjects() function that transforms a list of numbers into a list of JavaScript objects.
//For the provided input [1, 2, 3] the transformToObjects() function should return [{val: 1}, {val: 2}, {val: 3}].

function transformToObjects(numberArray) {
    // Todo: Add your logic
    // should return an array of objects
    // .map metho takes an array and creates another array based off of the initial array
    // .map is used here to take a number and put it in an array of objects from an array of numbers
    return (
        // .map takes the param or a function. here the function is setting the array to a new array
        numberArray.map((number) => {
            return {val: number}
   }))

}

