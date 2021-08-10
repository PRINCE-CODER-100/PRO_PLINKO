const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var particle = [];
var plinko = [];
var divisions = [];

var divisionHeight = 150;

function setup()
{
  createCanvas(800, 600);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400, 590, 800, 20 );

  for(var i = 5; i <= width; i = i+80)
  {
    divisions.push(
      new Division(i, height - divisionHeight/2, 10, divisionHeight))
  }

  for(var j = 40; j <= width; j = j+50)
{
  plinko.push(new Plinko(j, 75));
}

for(var k = 15; k <= width; k = k+50)
{
  plinko.push(new Plinko(k, 175));
}

for(var l = 40; l <= width; l = l+50)
{
  plinko.push(new Plinko(l, 275));
}

for(var m = 15; m <= width; m = m+50)
{
  plinko.push(new Plinko(m, 375));
}
}


function draw()
{
  background("silver");

  Engine.update(engine);

  for(var x = 0; x<divisions.length; x++)
  {
    divisions[x].display();
  }
  
  for(var x = 0; x<plinko.length; x++)
  {
    plinko[x].display();
  }
  if(frameCount %50 == 0)
{
  particle.push(
    new Particle(random(10, width-10), 10, 10));
}

  for(var x = 0; x<particle.length; x++)
  {
    particle[x].display();
  }
  ground.display();
  drawSprites();
}