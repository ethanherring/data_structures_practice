function recursive_binary_search(list, target) {
    list.sort();
    if (list.length == 0) {
        return false;
    }
    else {
        var midpoint = Math.floor(list.length / 2);
        console.log(midpoint);
        if (list[midpoint] == target) {
            return true;
        }
        else {
            if (list[midpoint] < target) {
                return recursive_binary_search(list.slice(midpoint + 1), target);
            }
            else {
                return recursive_binary_search(list.slice(0, midpoint), target);
            }
        }
    }
}
// console.log(recursive_binary_search([0, 12, 14, 2, 4, 5, 6, 7, 4, 5, 22, 3, 4, 5, 6, 7, 34], 12));
// console.log(recursive_binary_search([11, 12, 13, 14], 12));
console.log(recursive_binary_search([0, 8, 1, 2, 3, 4, 5, 6, 7], 8));
// Algorithms:
// Must return a value
// Must complete in a finite time scale
// Must return the same thing every time with the same input
// ALways returns true or false
// Will always operate in
// Tested
