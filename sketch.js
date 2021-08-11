var iss, issimg, backgroundimg, spacecraft, spacecraftimg, hasDocked = false;
var leftSmoke, rightSmoke, upSmoke

function preload() { 
  issimg = loadImage("img/iss.png");
  backgroundimg = loadImage("img/spacebg.jpg");
  spacecraftimg = loadImage("img/spacecraft1.png");
  upSmoke = loadImage("img/spacecraft2.png");
  leftSmoke = loadImage("img/spacecraft3.png");
  rightSmoke = loadImage("img/spacecraft4.png");
}
function setup() {
  createCanvas(800,400);
  spacecraft = createSprite(28,240)
  spacecraft.addImage(spacecraftimg);
  spacecraft.scale = 0.15;

  iss = createSprite(330, 130);
  iss.addImage(issimg);
  iss.scale = 0.25;
  iss.setCollider("circle", -50, -50, 20)
  spacecraft.setCollider("circle",0,-300,20)
    
    
  


}

function draw() {
  background(backgroundimg);  
  if (!hasDocked) {
    spacecraft.x += random(-1,1);
    if (keyDown("w")) {
      spacecraft.y -= 2;
      spacecraft.addImage(upSmoke);
    }
    if (keyDown("s")) {
      spacecraft.y += 2;
      spacecraft.addImage(spacecraftimg);
    }
    if (keyDown("a")) {
      spacecraft.x -= 2;
      spacecraft.addImage(rightSmoke);
    }
    if (keyDown("d")) {
      spacecraft.x += 2;
      spacecraft.addImage(leftSmoke);
    }
  }
  if (spacecraft.isTouching(iss)) {
    hasDocked = true;
    spacecraft.addImage(spacecraftimg)
  } else {
    hasDocked = false;
  }
  drawSprites();
}
