noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;

function setup()
{
    canvas= createCanvas(550,550);
    canvas.position(640,100);

    video=createCapture(VIDEO);
    video.size(550, 500);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded()
{
    console.log('poseNet is initialized');
    
}

function draw()
{
    background('#f8f8ff');
    document.getElementById("sqaure_side").innerHTML="Width and Height of a Square will be= "+ difference+"px";
    fill('#ffa500');
    stroke('#ffa500');
    square(noseX, noseY, 100);
    
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX="+ noseX+"noseY="+noseY);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference = floor(leftWristX-rightWristX);
        console.log("leftWristX ="+ leftWristX+"rightWristX="+rightWristX+"difference="+difference);
    }
}