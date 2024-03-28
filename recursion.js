let maxSteps = 0;
function setup(){
createCanvas(1000,800);

}

function draw(){
    background(255);
    noStroke();
    maxSteps += 0.1;
    tri(width/2, 0, width, height);
    if(maxSteps > 10) maxSteps = 0;

}

function tri(x, y, w, h){
    triangle(x, y, (x +(w/2)), y+h, (x - (w/2)), y+h)
    if(w > 5 && s < maxSteps){
    tri(x, y, w/2, h/2);
    tri(x+(w/4), y+(h/2), w/2, h/2);
    tri(x-(w/4), y+(h/2), w/2, h/2);
    }
}