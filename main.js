var scoreLeftWrist = 0;
var scoreRighttWrist = 0;
var song1_status = "";
var song2_status = "";
var leftWristX = 0;
var leftWristY = 0;
var rightwristX = 0;
var rightWristY = 0;
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

    poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("PoseNet Is Initialized");
}

function draw() {
    image(video, 0, 0, 600, 500);

    fill("#FF0000");
	stroke("#FF0000");

    if (scoreLeftWrist > 0.2) {
        circle(leftWristX, leftWristY, 20);
        song2.stop();

        if (song1_status == "false") {
            song1.play();
            document.getElementById("song_name").value = "Song = Peter Pan"
        }
    }
}

function gotPoses(results) {

    if(results.length > 0) {
    console.log(results);
	scoreLeftWrist =  results[0].pose.keypoints[0].score;

    }
}