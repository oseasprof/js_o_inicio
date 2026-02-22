function setup() {
    createCanvas(800, 400);
    background("white");
    createElement("h2", "Pressione o mouse para gerar uma saída!");
  }
  
  function draw() {
    stroke("black");
    fill("blue");
  
    //console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 10);
    }
  }
  