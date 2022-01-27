enum GameDifficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD'
};

export default GameDifficulty;

export class GameConfiguration {
  private _guessCount: number = 10;
  private _codeLength: number = 4;
  private _colorCount: number = 12;

  guessCount(): number { return this._guessCount }
  codeLength(): number { return this._codeLength }
  colorCount(): number { return this._colorCount }

  static create(difficulty: GameDifficulty): GameConfiguration {
    switch (difficulty) {
      case GameDifficulty.EASY:
        return new GameConfiguration(10, 4, 6);
      case GameDifficulty.MEDIUM:
        return new GameConfiguration(10, 4, 9);
      case GameDifficulty.HARD:
        return new GameConfiguration(10, 4, 12);
    }
  }

  private constructor(guessCount: number = 10, codeLength: number = 4, colorCount: number = 12) {
    this._guessCount = guessCount;
    this._codeLength = codeLength;
    this._colorCount = colorCount;
  }
}