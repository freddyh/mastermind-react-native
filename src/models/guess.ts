import GuessResults from './guessResult';
import ColorManager from './colorManager';
export default class Guess {
  public values: string[] = [];
  public guessResults: GuessResults[] = [];
  public active: boolean = false;
  private colorManager: ColorManager;

  constructor(colorManager: ColorManager, values: string[]) {
    this.colorManager = colorManager;
    this.values = values;
  }

  isValid(): boolean {
    if (this.values.length === 0) { return false; }
    for (let i = 0; i < this.values.length; i++) {
      if (!this.colorManager.colors.includes(this.values[i])) {
        return false;
      }
    }
    return true;
  }
};