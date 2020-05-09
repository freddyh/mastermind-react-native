import ColorManager from './colorManager';
import Code, { CodeComparisonResult } from './code';
import GameDifficulty, { GameConfiguration } from './gameDifficulty';

export default class MasterMindGame {
  public colorManager: ColorManager;
  public maxGuessCount: number = 10;
  public currentGuessCount: number = 0;
  public guesses: Code[];
  public results: CodeComparisonResult[][];
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
    this.results = this.generateRandomResults();
    this.maxGuessCount = 10;
    this.secret = new Code(new Array(this.codeLength).fill('').map((v) => this.colorManager.random()));
  }

  generateEmptyGuesses(): Code[] {
    const guesses: Code[] = [];
    let i = 0;
    const count = this.maxGuessCount;
    while (i < count) {
      guesses.push(new Code(Array(this.codeLength).fill('transparent')));
      i++;
    }
    return guesses;
  }

  generateRandomResults(): CodeComparisonResult[][] {
    const results: CodeComparisonResult[][] = [];
    for (let i = 0; i < this.maxGuessCount; i++) {
      const length = 1 + (Math.floor((this.codeLength - 1) * Math.random()));
      const random = this.randomResults(length);
      results.push(random);
    }
    return results;
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

  randomResult(): CodeComparisonResult {
    return Math.random() < 0.5 ? CodeComparisonResult.FULL_MATCH : CodeComparisonResult.PARTIAL_MATCH;
  }

  randomResults(length: number): CodeComparisonResult[] {
    let results: CodeComparisonResult[] = [];
    for (let i = 0; i < length; i++) {
      results.push(this.randomResult());
    }
    return results;
  }

  submitGuess(guess: Code): void {
    console.log(`\n\n`);
    console.log(`guess:\t${guess.debugDescription()}`);
    console.log(`secret:\t${this.secret.debugDescription()}`);
    const results: CodeComparisonResult[] = guess.compareCode(this.secret);
    console.log(`results:\t${results.map(result => result.toString())}`);
  }
}