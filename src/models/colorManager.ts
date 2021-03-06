import { GameConfiguration } from './gameDifficulty';
import { BehaviorSubject } from 'rxjs';

class ColorManager {
  private allColors: string[] = [
    'red',
    'orange',
    'yellow',
    'gray',
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

  public colorSubject: BehaviorSubject<string> = new BehaviorSubject('');
  public colors: string[];

  constructor(config: GameConfiguration) {
    this.colors = this.allColors.slice(0, config.colorCount());
  }

  random() {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  isColorValid(color: string): boolean {
    for (let i = 0; i < this.colors.length; i++) {
      if (this.colors.includes(color)) { continue; }
      else { return false; }
    }
    return true;
  }
}

export default ColorManager;