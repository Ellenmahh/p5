var r = 0;
var b = 255;
var circle = {x :0 , y: 200, diameter : 50};
function setup() {
    createCanvas(700, 300);
}

function draw() {
    //oq sera mapeado,
    // min e max do alcance(tamanho da tela),
    // min e max intervalo
    r = map(mouseX, 0, 600 , 0 , 255);
    b = map(mouseY, 0, 600 , 0 , 255);
    background(r, 0 , b);
    fill(250, 200, 200);
    ellipse(mouseX, mouseY, circle.diameter, circle.diameter);

    
    circle.x ++;


}
