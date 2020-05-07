export enum CodeComparisonResult {
  COLOR_POSITION_MATCH = 'COLOR_POSITION_MATCH',
  COLOR_MATCH = 'COLOR_MATCH',
};

export default class Code {
  public values: string[] = [];

  constructor(values: string[]) {
    this.values = values;
  }

  debugDescription(): string {
    return `${this.values.join(`\t`)}`;
  }

  compareCode(other: Code): CodeComparisonResult[] {
    const a = this.values;
    const b = other.values;

    const results: CodeComparisonResult[] = [];
    let burned: number[] = [];

    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < b.length; j++) {

        // if (burned.includes(j)) { continue; }

        const colorMatch = a[i] === b[j];
        if (i === j && colorMatch) {
          results.push(CodeComparisonResult.COLOR_POSITION_MATCH);
          burned.push(j);
          break;
        }

        if (burned.includes(j)) {
          continue;
        }

        const willBeColorMatch = a[j] === b[j];
        if (willBeColorMatch) {
          results.push(CodeComparisonResult.COLOR_POSITION_MATCH);
          burned.push(j);
          continue;
        }

        if (colorMatch) {
          results.push(CodeComparisonResult.COLOR_MATCH);
          burned.push(j);
          break;
        }
      }
    }
    return results;
  }
};