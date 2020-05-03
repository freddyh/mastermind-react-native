import ColorManager from './colorManager';
import GameDifficulty from './gameDifficulty';
import Guess from './guess';

export default class MasterMindGame {
  public colorManager: ColorManager;
  private secret: string[];

  public maxGuessCount: number;
  public currentGuessCount: number = 0;
  public guesses: Guess[];
  public selectedColor: string;
  private codeLength: number = 4;

  constructor(colorManager: ColorManager) {
    this.colorManager = colorManager;
    this.selectedColor = '';
    this.guesses = this.generateRandomGuesses();
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

  randomRow(size: number) {
    const result = [];
    let i = 0;
    while (i < size) {
      result.push(this.colorManager.random());
      i++;
    }
    return result;
  }
}