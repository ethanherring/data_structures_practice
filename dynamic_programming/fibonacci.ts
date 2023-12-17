// Write a function fib(n) that takes in a number as an argument
// The function should return the n-th number of the Fibonacci sequence

// Note:
// The 1st and 2nd number of the sequence is 1
// To generate the next number of the sequnce, we sum the previous two. 



// Recursive Solution: 
function recursive_fib(n: number): number {
  if (n <= 2) return 1;
  return recursive_fib(n - 1) + recursive_fib(n - 2);
}



