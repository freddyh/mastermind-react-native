import ColorManager from './colorManager';
import Guess from './guess';
import GameDifficulty from './gameDifficulty';
import GuessResult from './guessResult';

export default class MasterMindGame {
  public colorManager: ColorManager;
  public maxGuessCount: number = 10;
  public currentGuessCount: number = 0;
  public guesses: Guess[];
  public selectedColor: string;
  public activeRow: number = 0;
  public codeLength: number = 4;
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
    this.secret = this.randomColors(this.codeLength);
  }

  generateRandomGuesses(): Guess[] {
    const guesses: Guess[] = [];
    let i = 0;
    const count = 10;
    while (i < count) {
      const random: string[] = this.randomColors(this.codeLength);
      const guess = new Guess(this.colorManager, random);
      guesses.push(guess);
      i++;
    }
    return guesses;
  }

  generateEmptyGuesses(): Guess[] {
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

  emptyGuessRow(size: number): Guess {
    const values: string[] = Array(size).fill('transparent');
    return new Guess(this.colorManager, values);
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

  getGuessResults(guess: Guess): GuessResult[] {
    if (!guess.isValid()) {
      return Array(this.codeLength).fill(GuessResult.NO_MATCH);
    }
    console.log(`...comparing guess with secret ${guess} ${this.secret}`);
    return [GuessResult.COLOR_POSITION_MATCH, GuessResult.COLOR_MATCH, GuessResult.COLOR_MATCH, GuessResult.NO_MATCH]
  }
}