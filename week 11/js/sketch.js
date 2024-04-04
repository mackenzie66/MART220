
var idlePaths = [];
var myAnimation;
var myWalkAnimation;
var walkPaths = [];
var attackPaths = [];
var icecreamImage;
var burgerImage;
var friesImage;
var pizzaImage;
var saladImage;
var particles = [];
var health = 100;

function preload() {
    idlePaths = loadStrings("./images/idle/idle.txt");
    walkPaths = loadStrings("./images/walk/walk.txt");
    attackPaths = loadStrings("./images/attack/attack.txt");
}

function setup() {
    createCanvas(800, 600);
    
    myAnimation = new animationImage(200, 200, 150, 150);
    myAnimation.loadAnimation('idle', idlePaths);
    myAnimation.loadAnimation('walk', walkPaths);
    myAnimation.loadAnimation('attack', attackPaths);

    //compact way to add an image
    icecreamImage = createSprite(450, 200, 100, 100, 'static');
    icecreamImage.img = "./images/icecream.jpg";
    icecreamImage.scale = 0.05;
    icecreamImage.diameter = 150;


    burgerImage = createSprite(450, 400, 100, 100, 'static');
    burgerImage.img = "./images/burger.jpg";
    burgerImage.scale = 0.05;
    burgerImage.diameter = 150;

    friesImage = createSprite(450, 300, 100, 100, 'static');
    friesImage.img = "./images/fries.jpg";
    friesImage.scale = 0.05;
    friesImage.diameter = 150;

    pizzaImage = createSprite(600, 400, 100, 100, 'static');
    pizzaImage.img = "./images/pizza.jpg";
    pizzaImage.scale = 0.05;
    pizzaImage.diameter = 150;

    saladImage = createSprite(600, 300, 100, 100, 'static');
    saladImage.img = "./images/salad.jpg";
    saladImage.scale = 0.05;
    saladImage.diameter = 150;

}

// display all the frames using the draw function as a loop
function draw() {

    background(90);
    

    if (kb.pressing('d')) {
        myAnimation.updatePosition('forward');
        myAnimation.drawAnimation('walk');
        if (icecreamImage != null) {
            if (myAnimation.isColliding(icecreamImage)) {
                myAnimation.drawAnimation('idle');
                myAnimation.updatePosition('idle');

            }
        }
    }
    else if (kb.pressing('a')) {
        myAnimation.updatePosition('reverse');
        myAnimation.drawAnimation('walk');
    }
    else if (kb.pressing('x')) {
        myAnimation.drawAnimation('attack');
        if (icecreamImage != null) {
            if (dist(myAnimation.getCurrentAnimation().position.x, myAnimation.getCurrentAnimation().position.y, icecreamImage.position.x, catImage.position.y) < 200) {
                createParticles(icecreamImage.position.x, icecreamImage.position.y);
                health -= 1;
                if(health <= 0)
                {
                    icecreamImage.remove();
                    icecreamImage = null;
                }    
            }

        }
    }
    else {
        myAnimation.drawAnimation('idle');
    }

    icecreamImage.debug = mouseIsPressed;

}

function createParticles(x,y)
{
for (let i = 0; i < 5; i++) {
    let p = new Particle(x,y);
    particles.push(p);
  }
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    //if (particles[i].finished()) {
      // remove this particle
      //particles.splice(i, 1);
   // }
  }
}

function drawSquare()
{
    ctx.clearRect(0,0,800,600);
    ctx.fillRect(x,y,20,20);
    x++;
}

