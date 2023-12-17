// Search Problem
// https://www.hackerrank.com/challenges/missing-numbers/problem?isFullScreen=true
//
//
// Given two arrays of integers, find which elements in the second array are missing from the first array.
//
var arr = [7, 2, 5, 3, 5, 3];
var brr = [7, 2, 5, 4, 6, 3, 5, 3]; //brr is the original list and [4, 6] are the elements missing in the first list
// Check for the frequency of a number in the original list, if multiple then it could be missing
// sort the missing numbers asc
// only include a missing number once even if its missing multiple times
// min and max are <= 100
//
//
function remove_duplicates(arr) {
    return arr.filter(function (item, index) { return arr.indexOf(item) === index; });
}
function missing_numbers(arr, brr) {
    // Write your code here
    var missing_numbers = [];
    for (var i = 0; i <= brr.length + 1; i++) {
        console.log(brr[i]);
    }
    return remove_duplicates(missing_numbers.sort());
}
console.log(missing_numbers(arr, brr));
