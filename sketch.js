var canvas;
var music;
var box1
var box2
var box3
var box4
var ball


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    box1=createSprite(0,580,360,30)
    box1.shapeColor="green"
    box2=createSprite(295,580,200,30)
    box1.shapeColor="cyan"
    box3=createSprite(515,580,200,30)
    box3.shapeColor="yellow"
    box4=createSprite(740,580,220,30)
    box4.shapeColor="red"

    ball=createSprite(random(20,750),100,40,40)
    ball.shapeColor="white"
    ball.velocityX=4
    ball.velocityY=9

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges=createEdgeSprites()
ball.bounceOff(edges)

if(box1.isTouching(ball) && ball.bounceOff (box1)){
ball.shapeColor=box1.shapeColor
music.play()
}
if(box2.isTouching(ball)&& ball.bounceOff (box2)){
    ball.shapeColor=box2.shapeColor
    music.play()
}
if(box3.isTouching(ball) && ball.bounceOff (box3)){
    ball.shapeColor=box3.shapeColor
    music.play()
}
if(box4.isTouching(ball) && ball.bounceOff (box4)){
    ball.shapeColor=box4.shapeColor
    music.play()
}
            drawSprites()
    //add condition to check if box touching surface and make it box
}
