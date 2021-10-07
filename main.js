function preload() {
    world_start = loadSound("world_start.wav");
    setSprites();
    MarioAnimation();
}

function setup() {
    canvas = createCanvas(1240, 336);
    canvas.parent("canvas");
    instializeInSetup(mario);
    video = createCapture(VIDEO);
    video.size(800, 400);
    video.parent("controller");
    posenet = ml5.poseNet(video, model_loaded);
    posenet.on("pose", gotposes);
}

function model_loaded() {
    console.log("Model is not loaded!!!")
}

function draw() {
    game()
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y
    }
}