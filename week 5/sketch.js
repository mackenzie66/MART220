var walk1;
var xImage=100, yImage=25;
var speedX, speedY;
var myFont;

var myTime=10;

var walk2;
var walk3;
var walk4;
var walk5;
var walk6;
var walk7;
var walk8;
var walk9;
var walk10;

var speedX2, speedY2;

var walkingCycle = [];

var i = 0;

var flipX = false;
function preload() {
    img = loadImage("data/snail-sound/png");
}



function setup()
{
    createCanvas(600,800);
    walk1= loadImage("images/Walk (1).png");
    walk2= loadImage("images/Walk (2).png");
    walk3= loadImage("images/Walk (3).png");
    walk4= loadImage("images/Walk (4).png");
    walk5= loadImage("images/Walk (5).png");
    walk6= loadImage("images/Walk (6).png");
    walk7= loadImage("images/Walk (7).png");
    walk8= loadImage("images/Walk (8).png");
    walk9= loadImage("images/Walk (9).png");
    walk10= loadImage("images/Walk (10).png");

    walkingCycle[0] = walk1;
    walkingCycle[1] = walk2;
    walkingCycle[2] = walk3;
    walkingCycle[3] = walk4;
    walkingCycle[4] = walk5;
    walkingCycle[5] = walk6;
    walkingCycle[6] = walk7;
    walkingCycle[7] = walk8;
    walkingCycle[8] = walk9;
    walkingCycle[9] = walk10;

    

for(var i=0; i< walkingCycle.length; i++)
{
    walkingCycle[i].resize(walkingCycle[i].width/ 5, 0);
}
    
    
    //myFont = loadFont("fonts/")
   
   setInterval(changeTime, 100);

}

function draw()
{
    background (120);
    fill(255);
    
    
   if(flipX)
   {
    push();

    scale(-1,1);

    image(walkingCycle[i], -xImage-walkingCycle[i].width/2, yImage);
    console.log(-xImage);

    pop();
   }
   else
   {
    console.log(xImage);
    image(walkingCycle[i], xImage,yImage);
   }

    if(keyIsPressed)
    {
        if(key == "w")
        {
            yImage -= 1;
        }
        if(key == "s")
        {
            yImage += 1;
        }
        if(key == "a")
        {
            xImage -= 1;
            flipX = true;
        }
        if(key == "d")
        {
            xImage += 1;
            flipX = false;
        }
    }
    

fill(100,252,169);
textSize(24);
textFont(myFont);
text("Hello and Yippee", 400,300);



fill(36,250,100);
textSize(15);

text(myTime + "seconds", 50, 50);


 
}


function checkCollision(x,y,w,h,x2,y2,w2,h2)
{
    if (
        x - w/2 < x2 + w2/2 &&
        x + w2/2 > x2 - w/2&&
        y - h2/2 < y2 + h/2&&
        y + h2/2 > y2 - h/2
    ) {
        return true;
    }else{
        return false;
    }
}
 
function changeTime()

{
    i++;
    if(i > walkingCycle.length)
    {
        i=0;
    }

    //console.log(i);

 //   myTime--;
 //   if(myTime < 0)
  //  {
        // reset 
  //      myTime -10;
  //  }
    //myTime -= 1;
    //mytime = myTime - 1;
}

   




/* function setup() {
    createCanvas(400,400);
  }
  
  function draw() {
    background(220);
//straw
fill(190,230,200);
rect(290,10,20,100)
// glass
fill(235,190, 220);
rect(290,100,100,200);

//whipcream
fill(220,220, 220);
triangle(400, 100, 335, 40, 275, 100);

    //sauce
    fill(255,65,0);
    ellipse(200,300,350,200);
    //cheese
    fill(255,165,0);
    ellipse(200,300,330,180);


// left circle
    fill(255,60,0);
    ellipse(80,300,40,40);

//right circle
    ellipse(320,300,40,40);
//top right circle
    ellipse(270,250,40,40);
//top left circle
    ellipse(130,250,40,40);
//bottom left circle
    ellipse(270,350,40,40);
//bottom right circle
    ellipse(130,350,40,40);
  //center circle
    ellipse(200,300,40,40);

    //small left circle
    ellipse(140,300,35,35);
    if(keyIsPressed)
    {
        if(key=='a')
        {
            x-=5;
        }
        else if(key=='d')
        {
            x+=5;
        }
        else if(key =="w")
        {
            y-=5;
        }
        else if(key =="s")
        {
            y+=5;
        }
    }
    
   
    //small right circle
    ellipse(260,300,35,35);

    //small top circle
    ellipse(200,240,35,35);

    //small top circle
    ellipse(200,360,35,35);


    
  }
  */
