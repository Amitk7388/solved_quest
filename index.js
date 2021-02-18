// Question 1: Create an Array from 0...100 without using traditional For-loop
//Using recursive method for this
const printNumbers = (startNumber, endNumber) => {
        let NumEle = []
        let num = startNumber
        function counting(num1){
            if(num1 > endNumber) return 0;
            NumEle.push(num1)
            counting(num++)
        }
        counting(num++)
        return NumEle
}
// console.log(printNumbers(0, 100))

//<-------------------------------------------------------------------------------------------------------------->

//Create an Array of only even numbers from the above array
const findEvenNumbers = arr => {
    const ReturnArr = arr.filter(ele => {
        if(ele % 2 === 0) return ele
    })
    return ReturnArr
}
//console.log(findEvenNumbers(printNumbers(0, 100)))

//<-------------------------------------------------------------------------------------------------------------->

// Create a function that returns a Promise which returns the 
// square of only even numbers and 
// throws an error if an odd number is passed
const promiseOfEvenNumber = (num) => {
  return new Promise((resolve, reject) => {
    if (num % 2 === 0) resolve(num * num);
    else reject("Number is ODD");
  });
};
//console.log(promiseOfEvenNumber(2))

//<-------------------------------------------------------------------------------------------------------------->

//create an array of even squares using the previous array 
const findEvenSquares = (arr) => {
    return arr.map(ele => {
        if(ele % 2 ===0)return ele*ele
    })
}
//console.log(findEvenSquares(findEvenNumbers(printNumbers(0, 100))))

//<-------------------------------------------------------------------------------------------------------------->


// Question 4: Sum of all the squares from the above array of Even Squares
const SumOfAllSquareNumbers = arr => {
    return arr.reduce((accumlater, CurrentValue) => accumlater + CurrentValue)
}

//console.log(SumOfAllSquareNumbers(findEvenSquares(findEvenNumbers(printNumbers(0, 100)))))

//<-------------------------------------------------------------------------------------------------------------->

// Question 5: Call the above square Promise function with all numbers from 0-100
// and ensure that the errors are not thrown
// then print the following:
// 1. Number of errors 
// 2. The resultant array
// 3. Number of objects in the resultant array

const details = async (arr) => {
    let NumberOfError = 0
    let ResultantArry = []
    for(let i = 0; i < arr.length; i++){
        try{
            ResultantArry.push(await promiseOfEvenNumber(arr[i]))
        }catch(error){NumberOfError++}
    }
    return {
        NumberOfError : NumberOfError,
        ResultantArry : ResultantArry,
        lengthOfArry : ResultantArry.length
    }
}
details(printNumbers(0, 100))
  .then(data => console.log(data))
  .catch(console.error);

//<-------------------------------------------------------------------------------------------------------------->

// Q4: Create a promise that simulates a delay of 1-3s randomly. Create an array of 
// 10 such promises. Only print the output when all promises have been resolved.
//Taken expample of 3 promises, if you add 10 promises it excute same 
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "printString");
});
const PromiseDelay = (promise1, promise2, promise3) => {
  return Promise.all([promise1, promise2, promise3]);
};


PromiseDelay(promise1, promise2, promise3)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));

//<-------------------------------------------------------------------------------------------------------------->