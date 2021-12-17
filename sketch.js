var spaceship, spaceshipPng
var meteriod, meteriodPng, meteriodgroup
var gameover, gameoverPng
var space, spacePmg
function preload(){
spaceshipPng = loadImage("spaceship.png");
spacePmg = loadImage("space.png");
gameoverPng = loadImage("game_over.png");
meteriodPng = loadImage("metoer.png");
meteriodgroup = new Group()
}

function setup() {
createCanvas(400, 400)
space = createSprite(200, 200)
space.addImage(spacePmg)
spaceship = createSprite(200, 200)
spaceship.addImage(spaceshipPng)
spaceship.scale = 0.24
}

function draw() {
 meteriodrandom()
 spaceship.x = World.mouseX
 if(meteriodgroup.isTouching(spaceship)){
   meteriodGroup.setVelocityXEach(0);
 }
 drawSprites()

}

function meteriodrandom(){
   if (frameCount % 30 === 0){
      meteriod = createSprite(200, -20)
      meteriod.addImage(meteriodPng)
      meteriod.scale = 0.28
      meteriod.velocityY = 3;
      meteriod.x = Math.round(random(10, 390))
      meteriodgroup.add(meteriod)
   }
}
