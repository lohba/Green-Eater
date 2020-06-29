// var handlers = require('./requestHandlers');

// handlers.searchRequest
// function encode(string) {
//     var chars = {'a': 1, 'e': 2, 'i': 3, 'o': 4, 'u': 5};
//     let replaceString = string.replace(/[a,e,i,o,u]/g, m => chars[m])
//     console.log(replaceString)
//   }
  
//   function decode(string) {
//     var chars = {1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u'};
//     let replaceString = string.replace(/[1,2,3,4,5]/g, m => chars[m])
//     console.log(replaceString)
//   }

//   encode('hello')
//   decode('h2ll4')

// function charCount(str) {
//     var result = {};
//     for (var char of str) {
//         var char = char.toLowerCase() // char = h
//         if (result[char] > 0) { // result[h] 
//             result[char]++
//         } else {
//             result[char] = 1
//         }
//         console.log(result)
//     }
// }

// charCount("hello")

// var locate = function(arr,value){
  
  
// }

// locate(['a','b',['c','d',['e']]],'e')

// function same(arr1, arr2) {
//     if (arr1.lenght !== arr2.length) {
//         return false
//     }
//     let frequencyCounter1 = {};
//     let frequencyCounter2 = {};
//     for (let val of arr1) {
//         frequencyCounter1[val] = (frequencyCounter1[val] || 0 ) + 1
//     }
//     for (let val of arr2) {
//         frequencyCounter2[val] = (frequencyCounter2[val] || 0 ) + 1
//     }
//     console.log(frequencyCounter1)
//     console.log(frequencyCounter2)
//     for (let key in frequencyCounter1) {
//         if(!(key ** 2 in frequencyCounter2)) {
//             return false
//         } if (frequencyCounter2[key**2] !== frequencyCounter1[key]) {
//             return false
//         }
//     }
//     return true
// }
// same([1,2,3,3], [1, 4, 9, 9])

// function validAnagram(word1, word2){
//     if (word1.length !== word2.length) {
//         return false 
//     }
//     let word1Obj = {};
//     let word2Obj = {};

//     for (let val in word1) {
//         word1Obj[word1[val]] = (word1Obj[word1[val]] || 0) + 1
//     }

//     for (let val in word2) {
//         word2Obj[word2[val]] = (word2Obj[word2[val]] || 0) + 1
//     }
    
//     let isAnagram = true;
//     if (Object.keys(word1Obj).length !== Object.keys(word2Obj).length) {
//         isAnagram = false;
//     } 
    
//     if (isAnagram) {
//     for (let key in word1Obj) {
//         if (word1Obj[key] !== word2Obj[key]) {
//             isAnagram = false; 
//             break;
//         }
//     }
//     }

//     return isAnagram
//   }

//   console.log(validAnagram('aaaz', 'zaza'));

// function sumZero(arr) {
//     let left = 0
//     let right = arr.length - 1
//     while (left < right ) {
//         let sum = arr[left ] + arr[right]
//         if (sum === 0) {
//             console.log([arr[left], arr[right]])
//         } else if (sum > 0) {
//             right --
//         } else {
//             left ++
//         }
//     }
// }

// sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 4])

// function countUniqueValues(arr) {
//     if(arr.length === 0) return 0
//         let i = 0;
//         for (var j = 0; j < arr.length; j++) {
//           if (arr[i] !== arr[j]) {
//               i++;
//               arr[i] = arr[j]
//           }
//         }
//         return(i+1)
//     }

// console.log(countUniqueValues([1,2 ]))

//SAME FREQUENCY (CHALLENGE 1)
// function sameFrequency(num1, num2) {
//     let obj1 = {};
//     let obj2 = {};
 
//     let stringNum1 = num1.toString();
//     let stringNum2 = num2.toString();
//     console.log(stringNum1.length)
//       if (stringNum1.length !== stringNum2.length) {
//        return(false)
//       } 
//         for (let i in stringNum1 ) {
//             obj1[stringNum1[i]] =  (obj1[stringNum1[i]] || 0) + 1;
//         } 
//         for (let i in stringNum2) {
//             obj2[stringNum2[i]] = (obj2[stringNum2[i]] || 0) + 1;
//         }
//         if (Object.keys(obj1).length !==  Object.keys(obj2).length) {
//             return(false)

//         } for (let key in obj2) {
//             if (obj1[key] !== obj2[key]) {
//             return(false)
//          }
//     }
//     return(true) 
// }

// sameFrequency(1223,2213)

// function areThereDuplicates(arg) {
//     let obj1 = {};
//     for (let i in arguments) {
//        obj1[(arguments[i])] = (obj1[(arguments[i])] || 0) + 1;
//     for (let key in obj1) {
//         if (obj1[key] > 1) {
//             return("duplicate")
//          }
//     }
        
//     }
//     return ("no dublicate")
// }
//   console.log(areThereDuplicates("a", 'b', 'c'))

// function averagePair(arr, correctAvg){
//     if (arr.length === 0) return false;
//      let point1 = 0;
//      let point2 = arr.length - 1;
    
//      while( point1 < point2) {
//          let avg = (arr[point1] + arr[point2])/2
//          if(avg === correctAvg) return true
//          if(avg > correctAvg) {
//             point2--
//          } else if (avg < correctAvg) {
//              point1++
//          } 
//      }
//      return false
// }
//   console.log(averagePair([1,2,3,4,5], 2.5))

// function isSubsequence(word1, word2) {
//       let i = 0;
//       let j = 0;
//       while (j < word2.length) {
//         if(word2[j] === word1[i]) i++;
//         if(i === word1.length) return true;
//         j++
//       }
//       return false
//   }

//   isSubsequence("hello", " world hello")

// function maxSubarraySum(arr,num){
//     let maxSum = 0;
//     let tempSum = 0;
//     for (let i = 0; i < num ; i++) {
//         maxSum+=arr[i]
//         tempSum = maxSum
//     }
//     for (i = num; i < arr.length; i++) {
//         tempSum = tempSum - arr[i-num] + arr[i]
//         maxSum = Math.max(tempSum,maxSum)
//     }
//     return(maxSum)
//   }

// maxSubarraySum([100,200,300,400],2)

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

// function power(base, pow){
//     if (pow === 0) return 1;
//     return base * power(base, pow - 1)
    
// }

// console.log(power(2,4))

// function factorial(num) {
//     if(num === 1) return 1;
//     if(num===0) return 0
//     return num * factorial(num - 1)
// }
// console.log(factorial(0))

// function productOfArray(arr) {
//     //if(arr.length === 0) return 1
//     //return arr[0] * productOfArray(arr.slice(1))
//     console.log(arr.slice(1))
// }

// productOfArray([1,2,3,4])

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

// function recursiveRange(num){
//     if(num === 1) return 1;
//     return num + recursiveRange(num - 1)
// }
// console.log(recursiveRange(4))

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

// function fib(n){
//     if(n<=2) return 1
//     return fib(n-1) + fib(n-2)
//     // add whatever parameters you deem necessary - good luck!  
//   }
//   console.log(fib(5))

// function reverse(word){
//     if (word.length <= 1) return word
//     //return (word[word.length-1]) + reverse(word.slice(word.length-1))
//     return  reverse(word.slice(1)) + word[0]
// }
  
//    console.log(reverse('awesome')) // 'emosewa'
//   // reverse('rithmschool') // 'loohcsmhtir'd

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

// function isPalindrome(word){
//    if(word.length === 1) return true;
//    if(word.length === 2) return word[0] === word[1];
//    if(word[0] === word.slice(-1)) return isPalindrome(word.slice(1,-1))
//    return false
//     //if(newWord === word) return true
//   } 
//   console.log(isPalindrome("tacocata"))
  
// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

// function someRecursive(arr,isOdd){
//     const isOdd = val => val % 2 !== 0;
//     //if (arr.length === 0) return false
//     if (isOdd(arr[0]))return true
//     return someRecursive(arr.slice(1), isOdd)
//     // add whatever parameters you deem necessary - good luck!
//   }

// someRecursive([4,6,8], isOdd) 

function flatten(arr){
    //if (arr.length === 0) arr;
    return arr.reduce((acc, val) => acc.concat(val), []);
    
  }
  
  console.log (flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) )// [1, 2, 3, 4, 5]
  // flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
  // flatten([[1],[2],[3]]) // [1,2,3]
  // flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3