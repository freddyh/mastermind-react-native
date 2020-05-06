export default class Guess {
  public values: string[] = [];

  constructor(values: string[]) {
    this.values = values;
  }

  debugDescription() {
    console.log(`DEBUG DESCRIPTION: ${this.values.join(`, `)}`);
  }
};