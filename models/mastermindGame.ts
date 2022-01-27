import ColorManager from './colorManager';
import Code, { CodeComparisonResult } from './code';
import GameDifficulty, { GameConfiguration } from './gameDifficulty';
import { Alert } from 'react-native';

export default class MasterMindGame {
  public colorManager: ColorManager;
  public maxGuessCount: number = 10;
  public currentGuessCount: number = 0;
  public codes: Code[] = [];
  public results: CodeComparisonResult[][];
  public codeLength: number = 4;
  public isActive: boolean = true;
  private secret: Code = new Code([]);
  public config: GameConfiguration;

  static init(difficulty: GameDifficulty = GameDifficulty.EASY) {
    const config = GameConfiguration.create(difficulty);
    const manager = new ColorManager(config);
    return new MasterMindGame(manager, config);
  }

  private constructor(colorManager: ColorManager, configuration: GameConfiguration) {
    this.config = configuration;
    this.colorManager = colorManager;
    this.results = [];
    this.maxGuessCount = 10;
    this.setSecret();
  }

  setSecret() {
    const randomColors = new Array(this.codeLength).fill('').map((v) => this.colorManager.random());
    this.secret = new Code(randomColors);
  }

  createTwoButtonAlert(title: string, message: string) {
    Alert.alert(
      title,
      message,
      [
        {
          text: "OK",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "Start New Game",
          onPress: () => this.restart() // TODO: this needs to update state of Game view somehow
        }
      ],
      { cancelable: false }
    )
  }

  finishGame(win: boolean) {
    this.isActive = false;
    if (win) {
      this.createTwoButtonAlert(`You Win`, `Great Job`);
    } else {
      this.createTwoButtonAlert(`You Lose`, `Better Luck Next Time`);
    }
  }

  updateGameStatus() {
    const triesRemaining = this.maxGuessCount - this.results.length;
    const lastResult = this.results[this.results.length - 1];
    if (this.isWinner(lastResult)) {
      this.finishGame(true);
    } else if (triesRemaining === 0) {
      this.finishGame(false);
    }
  }

  isCompleteGuess(code: Code): boolean {
    const valids = code.values.filter(x => this.colorManager.isColorValid(x));
    return valids.length === this.config.codeLength();
  }

  submitGuess(code: Code): GameUpdate | undefined {
    if (!this.isCompleteGuess(code)) {
      return;
    }
    if (this.results.length === this.maxGuessCount) {
      this.results = [];
      this.codes = [];
      return new GameUpdate(this.codes, this.results);
    }
    this.currentGuessCount += 1;
    console.log(`\n\n`);
    console.log(`code:\t${code.debugDescription()}`);
    console.log(`secret:\t${this.secret.debugDescription()}`);
    const results: CodeComparisonResult[] = code.compareCode(this.secret);
    console.log(`results:\t${results.map(result => result.toString())}`);
    this.results.push(results);
    this.updateGameStatus();
    return new GameUpdate(this.codes, this.results);
  }

  isWinner(results: CodeComparisonResult[]): boolean {
    return results.filter(x => x.isFullMatch()).length === this.config.codeLength();
  }

  restart(): GameUpdate {
    this.isActive = true;
    this.setSecret();
    this.currentGuessCount = 0;
    this.results = [];
    this.codes = [];
    return new GameUpdate(this.codes, this.results);
  }
}

type Result = CodeComparisonResult[];
export class GameUpdate {
  public codes: Code[];
  public results: Result[];
  constructor(codes: Code[], results: Result[]) {
    this.codes = codes;
    this.results = results;
  }
}