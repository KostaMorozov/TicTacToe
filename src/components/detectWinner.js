import { CIRCLE, CROSS, EMPTY } from "./board";

export function detectWinner(board) {
  if (board[0] === CIRCLE && board[1] === CIRCLE && board[2] === CIRCLE)
    return CIRCLE;
  if (board[3] === CIRCLE && board[4] === CIRCLE && board[5] === CIRCLE)
    return CIRCLE;
  if (board[6] === CIRCLE && board[7] === CIRCLE && board[8] === CIRCLE)
    return CIRCLE;
  if (board[0] === CIRCLE && board[3] === CIRCLE && board[6] === CIRCLE)
    return CIRCLE;
  if (board[1] === CIRCLE && board[4] === CIRCLE && board[7] === CIRCLE)
    return CIRCLE;
  if (board[2] === CIRCLE && board[5] === CIRCLE && board[8] === CIRCLE)
    return CIRCLE;
  if (board[0] === CIRCLE && board[4] === CIRCLE && board[8] === CIRCLE)
    return CIRCLE;
  if (board[2] === CIRCLE && board[4] === CIRCLE && board[6] === CIRCLE)
    return CIRCLE;
  if (board[0] === CROSS && board[1] === CROSS && board[2] === CROSS)
    return CROSS;
  if (board[3] === CROSS && board[4] === CROSS && board[5] === CROSS)
    return CROSS;
  if (board[6] === CROSS && board[7] === CROSS && board[8] === CROSS)
    return CROSS;
  if (board[0] === CROSS && board[3] === CROSS && board[6] === CROSS)
    return CROSS;
  if (board[1] === CROSS && board[4] === CROSS && board[7] === CROSS)
    return CROSS;
  if (board[2] === CROSS && board[5] === CROSS && board[8] === CROSS)
    return CROSS;
  if (board[0] === CROSS && board[4] === CROSS && board[8] === CROSS)
    return CROSS;
  if (board[2] === CROSS && board[4] === CROSS && board[6] === CROSS)
    return CROSS;
  if (board.every((p) => p !== EMPTY)) return "It's a Tie";
}
