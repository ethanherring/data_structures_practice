// Linear Search Algorithm
function linear_search(list: Array<string | number>, target: string | number) {
    /*
    Returns the index position of the target if found 
    else returns undefined
    */

    // list.map((item, index) => {return item === target ? index : undefined})
    for(let i = 0; i <= list.length; i++) {
        if(list[i] === target) {
            return `Match Found At Index: ${i}`
        }
    }

    return "Target Not Found in List"

}



let search_list = [0, 1, 5, 2, 56, 7, 8, 3, 5]



console.log(linear_search(search_list, -3))

// Algorithms:
// Must return a value
// Must complete in a finite time scale
// Must return the same thing every time with the same input