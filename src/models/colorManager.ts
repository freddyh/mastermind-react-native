import GameDifficulty from './gameDifficulty';

class ColorManager {
  private easyColors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet'
  ];
  private mediumColors = [
    'black',
    'white',
    'brown'
  ];
  private hardColors = [
    'gray',
    'cyan',
    'olive'
  ];
  public colors: string[];

  constructor(difficulty: GameDifficulty) {
    this.colors = [];
    switch (difficulty) {
      case GameDifficulty.EASY:
        this.colors = this.easyColors;
        break;
      case GameDifficulty.MEDIUM:
        this.colors = this.easyColors.concat(this.mediumColors);
        break;
      case GameDifficulty.HARD:
        this.colors = this.easyColors.concat(this.mediumColors, this.hardColors);
        break;
      default:
        throw new Error(`-- ${difficulty} -- is not a valid difficulty `);
    }
  }

  random() {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }
}

export default ColorManager;