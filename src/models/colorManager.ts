import GameDifficulty from './gameDifficulty';

type Color = string;

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
  public selectedColor: Color;

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
    this.selectedColor = this.colors[0];
  }

  random() {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }
}

export default ColorManager;