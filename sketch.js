const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg;
var engine, world;
var hour;
 var backgroundImg
function preload (){
    getBackgroundImg();
    backgroundImg = bg;
}
function setup (){
    var canvas = createCanvas(700,700);
    engine = Engine.create();
    world = engine.world;
}
function draw (){
if (backgroundImg)
{
background (backgroundImg);
Engine.update (engine);
fill (255);
textSize (25);
if (hour>=12){
    text ("Time:"+ hour%12 + "PM",50,100);

}
else if (hour==0){
    text ("Time: 12 AM",50,100);

}
else {
    text ("Time:"+hour%12+"AM",50,100);
}
}
async function getBackgroundImg(){
    var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    console.log(responseJSON);
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    if (hour>=04 && hour<=06){
        bg= "sunrise1.png";
    }
    if (hour>=06 && hour<=08){
        bg= "sunrise2.png";
    }
    if (hour>=08 && hour<=11){
        bg= "sunrise3.png";
    }
    if (hour>=011 && hour<=13){
        bg= "sunrise4.png";
    }
    if (hour>=13 && hour<=15){
        bg= "sunrise5.png";
    }
    if (hour>=15 && hour<=17){
        bg= "sunrise6.png";
    }
    if (hour>=17 && hour<=19){
        bg= "sunset7.png";
    }

    if (hour>=19&& hour<=21){
        bg= "sunset8.png";
    }
    if (hour>=21 && hour<=23){
        bg= "sunset9.png";
    }

    if (hour>=23 && hour<=01){
        bg= "sunset10.png";
    }
    if (hour>=01 && hour<=03){
        bg= "sunset11.png";
    }
    if (hour>=03 && hour<=04){
        bg= "sunset12.png";
    }
    backgroundImage= loadImage(bg);

}
}
