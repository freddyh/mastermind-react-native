import ColorManager from './colorManager';
import GameDifficulty from './gameDifficulty';

export default class MasterMindGame {
  public colorManager: ColorManager;
  private secret: string[];

  constructor(difficulty: GameDifficulty) {
    switch (difficulty) {
      case GameDifficulty.EASY:
        this.colorManager = new ColorManager(difficulty);
        break;
      case GameDifficulty.MEDIUM:
        this.colorManager = new ColorManager(difficulty);
        break;
      case GameDifficulty.HARD:
        this.colorManager = new ColorManager(difficulty);
        break;
      default:
        throw new Error(`-- ${difficulty} -- is not a valid difficulty `);
    }

    this.secret = this.randomRow(6);
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