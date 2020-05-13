
let myPiece;

function setup()
{
  createCanvas(canvasW, canvasH);
  myPiece = new Piece (piece_L, canvasW/2 - boxDimension*2, boxDimension, colors[2]);
  setInterval( () => applyGravity(), timer)
}


function draw()
{
//The background of game
  background(44);
  stroke(130);
  fill(44)
  strokeWeight(boxDimension);
  rect(boxDimension/2,boxDimension/2, canvasW-boxDimension, canvasH-boxDimension);
  stroke(255);
  noFill();
  strokeWeight(7);
  rect(0,0, canvasW, canvasH);

//reset stroke
  stroke(0);
  strokeWeight(2);


  myPiece.show();

}

let applyGravity = () =>
{
  myPiece.y += boxDimension;
}

function keyPressed()
{
    if (keyCode === UP_ARROW)
        myPiece.rotation();

    if (keyCode === RIGHT_ARROW )
        myPiece.x += boxDimension;
        myPiece.y -= boxDimension;

    if (keyCode === LEFT_ARROW)
        myPiece.x -= boxDimension;
        myPiece.y -= boxDimension;

    if (keyCode === DOWN_ARROW)
        applyGravity();
        applyGravity();
        applyGravity();

}
