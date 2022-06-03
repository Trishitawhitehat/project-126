var song1 = "music1.mp3";
var song2 = "music2.mp3";

function preload() {
    song = loadSound("music.mp3");
    song = loadSound("music2.mp3");
}

function setup() {
    createCanvas(600, 500);
    canvas.center()

    video = createCapture(VIDEO);
    video.hide(); 
}

function draw() {
    image(video, 0, 0, 600, 500);
}