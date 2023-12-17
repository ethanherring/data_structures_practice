// Binary Search
function binary_search(list: Array<string | number>, target: string | number) {

    let first = 0;
    let last = list.length - 1; // minus 1 because indices start at 0

    while (first <= last) {
        //Calculate midpoint
        // We're using rounding because decimals are not valid indices
        let midpoint = Math.floor((first + last) / 2);

        if (list[midpoint] === target) {
            return `Value Found at ${midpoint}`;
        }
        else if (list[midpoint] < target) {
            first = midpoint + 1;
        }
        else {
            last = midpoint - 1;
        }

    };   


    return "Value Not Found in List";

}

// Binary search
// Breaks the list or set into smaller chunks until we find the value we're looking for


// console.log(binary_search([0, 12, 14, 2, 4, 5, 6, 7, 4, 5, 22, 3, 4, 5, 6, 7, 34], 12));
console.log(binary_search([11, 12, 13, 14], 12));

// Algorithms:
// Must return a value
// Must complete in a finite time scale
// Must return the same thing every time with the same input

// Logarithmic Run Time