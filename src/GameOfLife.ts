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
    constructor(n: number, m: number) {
        this.n = n;
        this.m = m;
        this.board = Array<boolean>(n * m).fill(false);
    }

    /**
     * @brief Creates a copy of this game of life in its next game state.
     * @return A copy of this game of life in its next game state.
     */
    nextState(): GameOfLife {
        /**
         * @todo Implement this method.
         */
        return this; // stub
    }

    /**
     * @brief Creates a copy of this game with the given square toggled.
     * @param x The x-coordinate of the square to be toggled.
     * @param y The y-coordinate of the square to be toggled.
     * @return A copy of this game of life, with the given square toggled.
     */
    toggle(x: number, y: number): GameOfLife {
        /**
         * @todo Implement this method.
         */
        return this; // stub
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
