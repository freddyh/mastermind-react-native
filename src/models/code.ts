export class CodeComparisonResult {
  static readonly FULL_MATCH  = new CodeComparisonResult('FULL_MATCH', 'black');
  static readonly PARTIAL_MATCH = new CodeComparisonResult('PARTIAL_MATCH', 'white');

  // private to disallow creating other instances of this type
  private constructor(private readonly key: string, public readonly value: string) {
  }

  toString() {
    return this.value;
  }
}

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

    if (a.length !== b.length) { return []; }

    const results: CodeComparisonResult[] = [];
    let burned: number[] = [];

    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < b.length; j++) {
        // console.log(`i: ${i}, j: ${j}`);

        const colorMatch = a[i] === b[j];
        if (colorMatch) {
          if (i === j) {
            results.push(CodeComparisonResult.FULL_MATCH);
            burned.push(j);
            // console.log(`full match, burn ${j}, break`);
            break;  
          }

          if (burned.includes(j)) {
            // console.log(`${j} is burned, continue`);
            continue;
          }
  
          const willBeColorMatch = a[j] === b[j];
          if (willBeColorMatch) {
            // console.log(`predict full match, burn ${j}, break`);
            continue;
          }
  
          results.push(CodeComparisonResult.PARTIAL_MATCH);
          burned.push(j);
          // console.log(`got a match, burn ${j}, break`);
          break;
        }
      }
    }
    return results;
  }
};