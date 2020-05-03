import ColorManager from './colorManager';
import GameDifficulty from './gameDifficulty';

export default class MasterMindGame {
  public colorManager: ColorManager;
  private secret: string[];

  public maxGuessCount: number;
  public currentGuessCount: number = 0;
  public guesses: any[];
  public selectedColor: string;

  constructor(difficulty: GameDifficulty) {
    this.selectedColor = '';
    this.guesses = [];
    this.maxGuessCount = 10;
    this.colorManager = new ColorManager(difficulty);
    this.secret = this.randomRow(4);
  }

  randomRow(size: number) {
    let result = [];
    let i = 0;
    while (i < size) {
      result.push(this.colorManager.random());
      i++;
    }
    return result;
  }
}