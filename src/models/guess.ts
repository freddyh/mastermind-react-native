export default class Guess {
  public values: string[] = [];

  constructor(values: string[]) {
    this.values = values;
  }

  debugDescription(): string {
    return `DEBUG DESCRIPTION: ${this.values.join(`, `)}`;
  }
};