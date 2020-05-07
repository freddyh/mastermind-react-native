import ColorManager from './colorManager';
import Guess from './guess';
import GameDifficulty from './gameDifficulty';

export default class MasterMindGame {
  public colorManager: ColorManager;
  public maxGuessCount: number = 10;
  public currentGuessCount: number = 0;
  public guesses: Guess[];
  public codeLength: number = 4;
  private secret: string[];

  static init(difficulty: GameDifficulty = GameDifficulty.EASY) {
    const manager = new ColorManager(difficulty);
    return new MasterMindGame(manager);
  }

  private constructor(colorManager: ColorManager) {
    this.colorManager = colorManager;
    this.guesses = this.generateEmptyGuesses();
    this.maxGuessCount = 10;
    this.secret = this.randomColors(this.codeLength);
  }

  generateEmptyGuesses(): Guess[] {
    const guesses: Guess[] = [];
    let i = 0;
    const count = 10;
    while (i < count) {
      guesses.push(new Guess(Array(this.codeLength).fill('transparent')));
      i++;
    }
    return guesses;
  }

  randomColors(size: number): string[] {
    const result = [];
    let i = 0;
    while (i < size) {
      result.push(this.colorManager.random());
      i++;
    }
    return result;
  }

  submitGuess(guess: Guess): void {
    console.log(`guess: ${guess.debugDescription()} vs secret ${this.secret.join(`, `)}`);
  }
}