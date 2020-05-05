export default class Guess {
  public values: string[] = [];

  constructor(values: string[]) {
    this.values = values;
  }

  debugDescription() {
    this.values.forEach((val: string, index: number) => console.log(`DEBUG DESCRIPTION: ${val} ${index}`))
  }
};