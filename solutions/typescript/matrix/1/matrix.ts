export class Matrix {
  private _rows: number[][];
  private _cols: number[][];

  constructor(matrix_str: string = "") {
    this._rows = matrix_str.split('\n').map(row => row.split(" ").map(Number));
    this._cols = this._rows[0].map((_, colIndex) =>
      this._rows.map(row => row[colIndex])
    );
  }

  get rows(): number[][] {
    return this._rows;
  }

  get columns(): number[][] {
    return this._cols;
  }
}
