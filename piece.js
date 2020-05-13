class Piece
{
    constructor(originalShape = [[]], x = 0, y = 0, color = {r : 0, g : 0, b : 0})
    {
        this.originalShape = originalShape
        this.color = color
        this.x = x
        this.y = y
        this.shape = this.fillPiece(originalShape.length)
    }


  fillPiece(pieceLength) {

        return Array.from(new Array(pieceLength), (x, i) =>
            Array.from(new Array(pieceLength), (x, j) =>
            this.originalShape[i][j] === 1 ? new
            Box(this.x + j * boxDimension, this.y + i * boxDimension,
              boxDimension, boxDimension, this.color) : null)
        )
    }

  show()
  {
    let {r, g, b} = this.color;
    fill(r,g,b)
    this.updatePiecePosition()
    this.shape.forEach(x => x.filter(j => j!= null).forEach(box => box.show()))

  }

  updatePiecePosition()
  {
        this.shape.forEach( (row, i) => row.forEach( (col, j) => { if(col)
          { col.x = this.x + j * boxDimension;
            col.y = this.y + i * boxDimension; }}))
  }

  rotation() {
      this.transpose()
      this.rotate90Degrees()
      this.updatePiecePosition()
  }

  transpose() {
      let dimension = this.shape.length
      let aux = Array.from(new Array(dimension), e => Array.from(new Array(dimension), x => null) )
      this.shape.forEach( (x, i) => x.forEach( (e, j) => aux [j][i] = e))
      this.shape = aux
  }

  rotate90Degrees() {
      this.shape.reverse()[0].map((column, index) =>
          this.shape.map(row => row[index])
        )
  }
  
}
