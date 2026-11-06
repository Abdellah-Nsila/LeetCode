

def print_matrix(matrix: list[list[int]]) -> None :
    n = len(matrix)
    print("========== matrix ==========")
    for y in range(n) :
        print("[ ", end="")
        for x in range(n) :
            print(f"{matrix[y][x]} ", end="")
        print("]")

def rotate(matrix: list[list[int]]) -> None:
    """
    Do not return anything, modify matrix in-place instead.
    """
    n = len(matrix)

    # Transpose
    for x in range(n) :
        for y in range(x + 1, n) :
            matrix[y][x], matrix[x][y] = matrix[x][y], matrix[y][x]
    # Reverse each row
    for y in range(n) :
        for x in range(n // 2) :
            matrix[y][x], matrix[y][n - 1 - x] = matrix[y][n - 1 - x], matrix[y][x]        
    


matrix = [[1,2,3],       
          [4,5,6],
          [7,8,9]]

# Output: [[7,4,1],
#          [8,5,2],
#          [9,6,3]]

# matrix = [[5,1,9,11],
#           [2,4,8,10],
#           [13,3,6,7],
#           [15,14,12,16]]

# Output: [[15,13,2,5],
#          [14,3,4,1],
#          [12,6,8,9],
#          [16,7,10,11]]

print_matrix(matrix)
rotate(matrix)
print_matrix(matrix)
