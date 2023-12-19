def czy_mozna(table,row,col,num):
    for i in range(9):
        if table[row][i] == num or table[i][col] == num:
            return False

    start_row, start_col = 3 * (row//3), 3*(col//3)
    for i in range(3):
        for j in range(3):
            if table[start_row + i][start_col + j] == num:
                return False
    
    return True

def znajdz(table):
    for row in range(9):
        for col in range(9):
            if table[row][col] == 0:
                for num in range(1,10):
                    if czy_mozna(table,row,col,num):
                        table[row][col] = num
                        znajdz(table)
                        table[row][col] = 0
                return 
    solutions.append([row[:] for row in table])

def print_table(table):
    for row in table:
        print(" ".join(map(str,row)))

def rozwiazanie_sudoku(board):
    global solutions
    solutions = []
    znajdz(board)
    return solutions if solutions else None

sudoku = [
    [4, 6, 0, 0, 0, 0, 0, 8, 5],
    [3, 0, 0, 0, 6, 8, 0, 0, 0],
    [0, 1, 2, 4, 0, 0, 0, 0, 0],
    [0, 0, 4, 0, 0, 1, 9, 0, 0],
    [0, 0, 0, 0, 0, 0, 7, 0, 0],
    [7, 0, 9, 0, 0, 0, 0, 3, 0],
    [0, 7, 0, 0, 3, 0, 0, 0, 2],
    [6, 0, 0, 7, 9, 4, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 6, 7, 3]
]

solutions = rozwiazanie_sudoku(sudoku)

if solutions:
    for rozwiaznie in solutions:
        print_table(rozwiaznie)
else:
    print(None)