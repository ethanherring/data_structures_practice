// Search Problem
// https://www.hackerrank.com/challenges/missing-numbers/problem?isFullScreen=true
//
//
// Given two arrays of integers, find which elements in the second array are missing from the first array.
//
let arr = [7, 2, 5, 3, 5, 3];
let brr = [7, 2, 5, 4, 6, 3, 5, 3]; //brr is the original list and [4, 6] are the elements missing in the first list


// Check for the frequency of a number in the original list, if multiple then it could be missing
// sort the missing numbers asc
// only include a missing number once even if its missing multiple times
// min and max are <= 100
//
//

function remove_duplicates(arr: number[]) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

function missing_numbers(arr: number[], brr: number[]): number[] {
  // Write your code here

  let missing_numbers: number[] = [];



  brr.forEach((value) => {
    if (arr.includes(value) === false && missing_numbers.includes(value) === false) {
      missing_numbers.push(value);
    }
  }
  );

  //for (let i = 0; i <= brr.length; i++) {

  //if (arr.includes(brr[i]) === false && missing_numbers.includes(brr[i]) === false) {
  //  missing_numbers.push(brr[i])
  // }
  //}

  return remove_duplicates(missing_numbers.sort());
}

let f = missing_numbers(arr = arr, brr = brr)

console.log(f);


// Time Complexity of Solution - 
// for each, includes includes, push
//
// Space Complexity of Solution - Keeping the space of the original array and adding a second one for a list of missing values
// Original list will grow with the input sice O(n) + missiing values in second list :
