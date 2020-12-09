const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bijili1,bijili2,bijili3,bijili4;
var thunder, aadmi, bhunde;
var bhundes = [];
var maxDrops = 100;

function preload(){
  bijili1 = loadImage("1.png")
  bijili2 = loadImage("2.png")
  bijili3 = loadImage("3.png")
  bijili4 = loadImage("4.png")
}

function setup(){
  createCanvas(400,400)

    engine = Engine.create();
    world = engine.world;

    aadmi = new Insaan(190,266)

   
     
    Engine.run(engine)
  }

function draw(){
    background("black");
    Engine.update(engine)
    aadmi.display();
    for(var i = 0; i < maxDrops; i++){
        bhunde = new Baarish(random(0,400),random(0,100))
        bhundes.push(bhunde)
    }
    for(var j = 0; j < bhundes.length; j++){
    bhundes[j].display();
    }
    spawnThunder();
    drawSprites();  
} 

function spawnThunder() {
 if (frameCount % 10 == 0)
    {
      var thunder=createSprite(random(50,350),50);
      
      rando = round(random(1,4))
      switch(rando)
        {
          case 1: thunder.addImage(bijili1)
                  break;
          case 2: thunder.addImage(bijili2)
                  break;
          case 3: thunder.addImage(bijili3)
                  break;
          case 4: thunder.addImage(bijili4)
                  break;
          default: break;
        }
        thunder.scale = 0.40
        thunder.lifetime = 5
      }
   
}


