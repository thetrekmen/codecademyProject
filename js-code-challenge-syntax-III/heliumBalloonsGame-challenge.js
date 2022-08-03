class Player {
    constructor(name, hitsPerMinute) {
      this._name = name;
      this._hitsPerMinute = hitsPerMinute;
      this._balloonCount = 100;
    }
  
    get name() {
      return this._name;
    }
    get hitsPerMinute() {
      return this._hitsPerMinute;
    }
    get balloonCount() {
      return this._balloonCount;
    }
  
    status() {
      console.log(`Player: ${this.name} -- Balloons Left: ${this.balloonCount}`)
    }
  }
  
  
const player1 = new Player('dominator', 5);
const player2 = new Player('crusher', 8);

  // Write function below
function balloonAttack(p1, p2) {
    minPlayed = 10
    p1Score = p1.balloonCount - (p2.hitsPerMinute * minPlayed);
    p2Score = p2.balloonCount - (p1.hitsPerMinute * minPlayed);

    if (p1Score === p2Score) {
        return 'Tie';
    } else if (p1Score > p2Score) {
        return p1.name
    } else {
        return p2.name
    }
}
  
console.log(balloonAttack(player1, player2))