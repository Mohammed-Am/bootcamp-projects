def display_board(board):
    print("\n")
    print("  1   2   3")
    for idx, row in enumerate(board):
        print(f"{idx+1} {' | '.join(row)}")
        if idx < 2:
            print("  ---------")
    print("\n")

def player_input(player, board):
    while True:
        try:
            pos = input(f"Player {player} enter row and column (e.g. 1 3): ").split()
            if len(pos) != 2:
                print("Please enter two numbers separated by a space.")
                continue
            row, col = int(pos[0])-1, int(pos[1])-1
            if row not in range(3) or col not in range(3):
                print("Row and column must be between 1 and 3.")
                continue
            if board[row][col] != " ":
                print("That spot is already taken.")
                continue
            return row, col
        except ValueError:
            print("Invalid input. Please enter numbers.")

def check_win(board, player):
    # Check rows and columns
    for i in range(3):
        if all([cell == player for cell in board[i]]):
            return True
        if all([board[j][i] == player for j in range(3)]):
            return True
    # Check diagonals
    if all([board[i][i] == player for i in range(3)]):
        return True
    if all([board[i][2-i] == player for i in range(3)]):
        return True
    return False

def is_full(board):
    return all(cell != " " for row in board for cell in row)

def play():
    board = [[" " for _ in range(3)] for _ in range(3)]
    current_player = "X"
    while True:
        display_board(board)
        row, col = player_input(current_player, board)
        board[row][col] = current_player
        if check_win(board, current_player):
            display_board(board)
            print(f"Player {current_player} wins!")
            break
        if is_full(board):
            display_board(board)
            print("It's a tie!")
            break
        current_player = "O" if current_player == "X" else "X"

if __name__ == "__main__":
    play()