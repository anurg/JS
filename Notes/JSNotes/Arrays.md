### My Notes on Javascript Arrays

### Arrays Methods

### forEach

forEach is applied to each element of array but not changes original array.
Nothing is returned. We can access each element and do some operations and push to new array.

```
arr.forEach(<Callbackfunction>);
function callbackfn(value: any, index: number, array: any[])
```

Examples-

```
const arr = [1, 2, 3, 4, 5];
const newArray = [];
arr.forEach((val, ind, arr) => {
  newArray.push(val + ind);
  // console.log(`val: ${val} index: ${ind} array: ${arr}`);
});
console.log(arr);
console.log(newArray);
```

In JavaScript, when we want to ignore a parameter from the beginning or middle of a parameter list, we use a special parameter name, the \_ symbol, instead of a parameter name.

### filter

It filters the array based on callbacks logic. filter returns new Array without changing original array.

```
arr.forEach(<Callbackfunction>);
function callbackfn(value: any, index: number, array: any[])
```

```
const arr = [1, 2, 3, 4, 5];
const arrFilter = arr.filter((x) => x > 3);
console.log(arr);
console.log(arrFilter);
```

### find & findIndex

find return the first occurance of the Item in Array based on callback logic. findIndex returns the Index instead of the element.

```
const arr = [1, 2, 3, 4, 5];
const firstElement = arr.findIndex((x) => x > 1);
console.log(firstElelment);

const first = arr.findIndex((x) => x > 1);
console.log(first);
```

### Map

The map method applies a function to each element of the array and creates a new array of the returned values.The original array remains unchanged.

```
arr.map(<function>);
function callbackfn(value: any, index: number, array: any[])
```

```
const arr = [1, 2, 3, 4, 5];
const arrMap = arr.map((x) => {
  if (x % 2 === 0) return x;
  else return 0;
});
console.log(arr);
console.log(arrMap);

```

### Reduce Method

The reduce method reduces the array to a single value from left to right. This method leaves the original array unchanged when applied.

```
arr.reduce(<function>);
function callbackfn(prev: any, curr: any, index: number, array: number[])
// this can also be thought as (source : Alchemy UNiversity JS course)
function callbackfn(accumulator: any, currentValue: any, index: number, array: number[])
```

For each element, the callbackfn will be passed with the previous callbackfn function’s return value as the first argument, and the value of the element as the second argument. This is followed by the index of the element as the third argument and lastly the array itself as the fourth argument.

```
function sum(numbers) {
    return numbers.reduce((accumulator, currentValue) => {
        return accumulator+currentValue// <-- sum the numbers here!
    });
}
```

```
var arr = [10, 20, 30, 40, 50]; // initialise an array and assign to arr
var val = arr.reduce((prev, curr) => prev + curr); // reduce element to sum
console.log("arr:",arr); // print original array
console.log("reduced val:",val); // print element returned by reduce

```

### Chaining methods

Chaining methods allows us to write methods one after the other such that the return value of the previous method is passed on to the next. This makes it easy to evolve data using the chain of methods. We do not need to create new variables and assign them the returned value of each method.

### Using the map and reduce methods

### Counting elements

Often, we need to count elements in an array that satisfy a certain condition. We can use the map and reduce methods to do this in one line. Follow these steps:
Map the array into an array of zeros and ones.
Reduce the array of zeros and ones into the sum.
The final output gives the count of elements that satisfy a condition.
Take a look at the following code, where we find the elements of type string.

```
const arr = ["Hello", 1, true, NaN, "Bye", "Byebye"]; // initialise an array of elements

const num = arr
  .map((e) => (typeof e === "string" ? 1 : 0))
  .reduce((acc, val) => acc + val);
console.log(num);
```

### Finding number of elements in a two-dimensional array

Another common coding task: finding the number of elements in a two-dimensional array. Again, we can use the map and reduce methods to do this task in one line! Use the following steps.

Map the array into the length of each array at each index.
Reduce the array of lengths into the sum.
The final output gives the count of elements in a two-dimensional array.

```
let arr = [[1, 2, 3, 4, 3], [1, 2], [1, 2, 3, 4, 5, 6], []]; // `initialise a two-dimensional array

const element = arr.map((x) => x.length).reduce((acc, val) => acc + val);
console.log(element);

```
