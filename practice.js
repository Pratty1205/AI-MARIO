img = "";
noseX = 0;
noseY = 0;
marioX = 325;
marioY = 325;

function preload() {
    img = loadImage("mario05.png");
}

function setup() {
    createCanvas(650, 400);
    video = createCapture(VIDEO);
    video.size(650, 400);

    posenet = ml5.poseNet(video, model_loaded);
    posenet.on("pose", gotposes);
}

function model_loaded() {
    console.log("Model is not loaded!!!")
}

function draw() {
    background("#D3D3D3");
    if (noseX < 325) {
        marioX = marioX - 1;
    }
    if (noseX > 325) {
        marioX = marioX + 1;
    }
    if (noseY > 200) {
        marioY = marioY + 1;
    }
    if (noseY < 200) {
        marioY = marioY - 1;
    }
    image(img, marioX, marioY, 40, 70);
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y
    }
}