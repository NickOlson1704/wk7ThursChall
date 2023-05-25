function determineWinner(stones) {
    if (stones <= 1) {
      return "Player #2 wins";
    }
  
    const dp = [false, true, true, false, true, true];
  
    for (let i = 6; i <= stones; i++) {
      dp[i] = !dp[i - 2] || !dp[i - 3] || !dp[i - 5];
    }
  
    return dp[stones] ? "Player #1 wins" : "Player #2 wins";
  }
  
  // Test the function
  const stones = 10;
  const winner = determineWinner(stones);
  console.log(winner);

  const canWin = n => {
    // none of the legal moves are under two
    if (n < 2) {
        return false
    }

    let legalMoves = [2, 3, 5]

    // if canWin is false for the opponent, then we win
    legalMoves.forEach(move => {
        if (!canWin(n - move)) {
            return true
        }
    })

    // if we can't win from above, we lose
    return false
}

console.log(canWin(10))