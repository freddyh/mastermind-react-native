import ColorManager from './colorManager';
import Guess from './guess';
import GameDifficulty from './gameDifficulty';

export default class MasterMindGame {
  public colorManager: ColorManager;
  public maxGuessCount: number = 10;
  public currentGuessCount: number = 0;
  public guesses: Guess[];
  public selectedColor: string;
  public activeRow: number = 0;
  private codeLength: number = 4;
  private secret: string[];

  static init(difficulty: GameDifficulty = GameDifficulty.EASY) {
    const manager = new ColorManager(difficulty);
    return new MasterMindGame(manager);
  }

  private constructor(colorManager: ColorManager) {
    this.colorManager = colorManager;
    this.activeRow = 0;
    this.selectedColor = '';
    this.guesses = this.generateEmptyGuesses();
    this.maxGuessCount = 10;
    this.secret = this.randomRow(this.codeLength);
  }

  generateRandomGuesses() {
    const guesses: Guess[] = [];
    let i = 0;
    const count = 10;
    while (i < count) {
      const random = this.randomRow(this.codeLength);
      guesses.push(random);
      i++;
    }
    return guesses;
  }

  generateEmptyGuesses() {
    const guesses: Guess[] = [];
    let i = 0;
    const count = 10;
    while (i < count) {
      const empty = this.emptyGuessRow(this.codeLength);
      guesses.push(empty);
      i++;
    }
    return guesses;
  }

  emptyGuessRow(size: number) {
    return Array(size).fill('transparent');
  }

  randomRow(size: number) {
    const result = [];
    let i = 0;
    while (i < size) {
      result.push(this.colorManager.random());
      i++;
    }
    return result;
  }

  getGuessResults(guess: Guess[]) {
    console.log(`...comparing guess with secret ${guess} ${this.secret}`);
    return ['match', 'match', '', ''];
  }
}