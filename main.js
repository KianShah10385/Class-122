function preload() {
}

function setup() {
    canvas = createCanvas(600, 600);
    canvas.position(135,275);
    video = createCapture(VIDEO);
    video.hide();
tint_color = "";
}

function draw() {
    image(video, 0, 0, 720, 530);
    tint(tint_color);
}
function take_snapshot(){
    save('Filter.png');
}
function createCanvas()
{
    createCanvas(600, 600)
    circle(30, 30, 20);
    ellipse(56, 46, 55, 55);
    rect(30, 20, 55, 55);

}