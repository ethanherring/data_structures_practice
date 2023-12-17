// https://www.hackerrank.com/challenges/connected-cell-in-a-grid/problem?isFullScreen=true
//
// Consider a matrix where each cell contains either a 0 or a 1 
// Any cell containing a 1 is called a filled cell. 
// Two cells are said to be connected if they are adjacent to each other horizontally, vertically, or diagonally. 
// In the following grid, all cells marked X are connected to the cell marked Y.



// If one or more filled cells are also connected, they form a region. 
// Note that each cell in a region is connected to zero or more cells in the region but is not 
// necessarily directly connected to all the other cells in the region.
//
//
// Given an n * m matrix, find and print the number of cells in the largest region in the matrix. 
// Note that there may be more than one region in the matrix
//
//
//Complete the connectedCell function in the editor below
//connectedCell has the following parameters: 
//int matrix[n][m]: matrix[i] represents the ith row of the matrix
// Function returns int: the area of the largest region
//

// 100
// 110
// 100
// 00


let matrix: number[][] = [[1, 0, 0], [1, 1, 0], [1, 0, 0], [0, 0, 0]];


function connectedCell(matrix: number[][]): number {

  let region_count = 0;
  let matrixColumnCount = matrix[0].length;


  matrix.forEach((row) => {
    row.forEach((row_value, index) => {

      console.log(`Index: ${index} Row Value: ${row_value}`);
      let right = 0;
      let left = 0;
      let up = 0;
      let down = 0;

      if (index === matrixColumnCount - 1) {
        console.log(row_value);
      }
    }
    )
    console.log("-----------------------");
  });

  return 5
}

connectedCell(matrix);
