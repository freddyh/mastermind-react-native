import GameDifficulty from './gameDifficulty';
import { BehaviorSubject } from 'rxjs';

type Color = string;

class ColorManager {
  private allColors: Color[] = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet',
    'black',
    'white',
    'brown',
    'gray',
    'cyan',
    'olive',
  ];

  public colorSubject: BehaviorSubject<Color> = new BehaviorSubject('');
  public colors: Color[];

  constructor(difficulty: GameDifficulty) {
    let slice = 6;

    this.colors = [];
    switch (difficulty) {
      case GameDifficulty.EASY:
        break;
      case GameDifficulty.MEDIUM:
        slice += 3;
        break;
      case GameDifficulty.HARD:
        slice += 6;
        break;
      default:
        throw new Error(`-- ${difficulty} -- is not a valid difficulty `);
    }
    this.colors = this.allColors.slice(0, slice);
  }

  random() {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }
}

export default ColorManager;