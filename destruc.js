// var obj = {
//     numbers: {
//       a: 1,
//       b: 2
//     }
// };
  
// var a = obj.numbers.a;
// var b = obj.numbers.b;

const obj = {
    numbers: {
        a: 1,
        b: 2
    }
}
const {numbers: {a, b}} = obj;





// var arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

[arr[0], arr[1]] = [arr[1], arr[0]];





// Write a function called raceResults which accepts a single array argument. It should return an object with the keys first, second, third, and rest.
// my answer
const raceResults = (arr) => {
    const [first, second, third, ...rest] = arr;
    const newObj = {
        first,
        second,
        third,
        rest
    }
    return newObj;
}

// actual answer (to make it a one line function)
// const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest});