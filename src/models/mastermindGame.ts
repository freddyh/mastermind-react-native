import ColorManager from './colorManager';
import Code, { CodeComparisonResult } from './code';
import GameDifficulty, { GameConfiguration } from './gameDifficulty';

export default class MasterMindGame {
  public colorManager: ColorManager;
  public maxGuessCount: number = 10;
  public currentGuessCount: number = 0;
  public guesses: Code[];
  public codeLength: number = 4;
  private secret: Code;

  static init(difficulty: GameDifficulty = GameDifficulty.EASY) {
    const config = GameConfiguration.create(difficulty);
    const manager = new ColorManager(config);
    return new MasterMindGame(manager);
  }

  private constructor(colorManager: ColorManager) {
    this.colorManager = colorManager;
    this.guesses = this.generateEmptyGuesses();
    this.maxGuessCount = 10;
    this.secret = new Code(new Array(this.codeLength).fill('').map((v) => this.colorManager.random()));
  }

  generateEmptyGuesses(): Code[] {
    const guesses: Code[] = [];
    let i = 0;
    const count = 10;
    while (i < count) {
      guesses.push(new Code(Array(this.codeLength).fill('transparent')));
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

  submitGuess(guess: Code): void {
    // console.log(`guess:`);
    // console.log(`vs`);
    console.log(`\n\n`);
    console.log(`guess:\t${guess.debugDescription()}`);
    console.log(`secret:\t${this.secret.debugDescription()}`);
    const resultsa: CodeComparisonResult[] = guess.compareCode(this.secret);
    // const resultsb: CodeComparisonResult[] = this.secret.compareCode(guess);
    console.log(`\n\n`);
    console.log(`results:\t${resultsa}`);
    // console.log(`results:\t${resultsb}`);
  }
}