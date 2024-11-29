/**
 * @brief Represents a GameOfLife game.
 */
class GameOfLife {
    private n: number;
    private m: number;
    private board: boolean[];

    /**
     * Creates a new GameOfLife using the given features.
     * @param n Amount of columns in this game.
     * @param m Amount of rows in this game.
     */
    constructor(
        n: number,
        m: number,
        board: boolean[] = Array<boolean>(n * m).fill(false)
    ) {
        this.n = n;
        this.m = m;
        this.board = board;
    }

    /**
     * @brief Creates a copy of this game of life in its next game state.
     * @return A copy of this game of life in its next game state.
     */
    nextState(): GameOfLife {
        const newBoard = Array<boolean>(this.n * this.m).fill(false);
        for (let x = 0; x < this.n; x++) {
            for (let y = 0; y < this.m; y++) {
                const neighbors =
                    +(x > 0 && y > 0 && this.board[x - 1 + (y - 1) * this.n]) +
                    +(y > 0 && this.board[x + (y - 1) * this.n]) +
                    +(
                        x < this.n - 1 &&
                        y > 0 &&
                        this.board[x + 1 + (y - 1) * this.n]
                    ) +
                    +(x > 0 && this.board[x - 1 + y * this.n]) +
                    +(x < this.n - 1 && this.board[x + 1 + y * this.n]) +
                    +(
                        x > 0 &&
                        y < this.m - 1 &&
                        this.board[x - 1 + (y + 1) * this.n]
                    ) +
                    +(y < this.m - 1 && this.board[x + (y + 1) * this.n]) +
                    +(
                        x < this.n - 1 &&
                        y < this.m - 1 &&
                        this.board[x + 1 + (y + 1) * this.n]
                    );
                newBoard[x + y * this.n] =
                    (neighbors == 2 && this.board[x + y * this.n]) ||
                    neighbors == 3;
            }
        }
        return new GameOfLife(this.n, this.m, newBoard);
    }

    /**
     * @brief Creates a copy of this game with the given square toggled.
     * @param x The x-coordinate of the square to be toggled.
     * @param y The y-coordinate of the square to be toggled.
     * @param alive True if the tile should be set to alive, or false if dead.
     * @return A copy of this game of life, with the given square toggled.
     */
    toggle(x: number, y: number, alive: boolean): GameOfLife {
        const newBoard = [...this.board];
        newBoard[x + y * this.n] = alive;
        return new GameOfLife(this.n, this.m, newBoard);
    }

    /**
     * @brief Produces the width of the board.
     * @return The width of the board.
     */
    getWidth(): number {
        return this.n;
    }

    /**
     * @brief Produces the height of the board.
     * @return The height of the board.
     */
    getHeight(): number {
        return this.m;
    }

    /**
     * @brief Produces the current state of the board.
     * @return The current state of the board.
     */
    getBoard(): boolean[] {
        return this.board;
    }

    /**
     * Given a (x, y) pair, produces the tile value at these coordinates.
     * @param x The x-coordinate to get.
     * @param y The y-coordinate to get.
     * @returns The value of the board at (x, y).
     */
    getTileAt(x: number, y: number): boolean {
        return this.board[this.toBoardCoordinate(x, y)];
    }

    /**
     * Given a (x, y) pair, produces the corresponding board coordinate.
     * @param x The x-coordinate in two-dimensional coordinates.
     * @param y The y-coordinate in two-dimensional coordinates.
     * @returns The corresponding one-dimensional board coordinate.
     */
    private toBoardCoordinate(x: number, y: number): number {
        return x + y * this.n;
    }
}

export { GameOfLife };
