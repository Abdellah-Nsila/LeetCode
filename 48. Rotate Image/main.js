
const  print_matrix = function(matrix)
{
    console.log("=============== matrix ===============")
    for (let i = 0; i < matrix.length; i++)
    {
        process.stdout.write("[ ");
        for (let j = 0; j < matrix[i].length; j++)
        {
            process.stdout.write(`${matrix[i][j] } `);
        };
        console.log("]");
    };
};

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix)
{
    let n = matrix.length;

    // Transpose
    for (let x = 0; x < n; x++)
    {
        for (let y = x + 1; y < n; y++)
        {
            // Classique swap without third tmp variable
            // a=10 b=3
            // a += b => 13
            // b = a - b => 13 - 3 => 10
            // a = a - b => 13 - 10 => 3
            [ matrix[x][y], matrix[y][x] ] = [ matrix[y][x], matrix[x][y] ]
        };
    };

    // Reflection swap
    for (let y = 0; y < n; y++)
    {
        for (let x = 0; x < Math.trunc(n / 2); x++)
        {
            [ matrix[y][x], matrix[y][n - 1 - x] ] = [ matrix[y][n - 1 - x], matrix[y][x] ]
        }
    }
};


// let matrix = [
//   [1, 2, 3], // Row 0
//   [4, 5, 6], // Row 1
//   [7, 8, 9]  // Row 2
// ];

let matrix = [[5,1,9,11],
                [2,4,8,10],
                [13,3,6,7],
                [15,14,12,16]]

print_matrix(matrix);
rotate(matrix);
print_matrix(matrix);
