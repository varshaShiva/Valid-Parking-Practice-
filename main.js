canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

car_width=140;
car_height=280;
car_img="car.png";
background_img="parking_space.png";
carX=1100;
carY=700;

function add()
{
    background_imgtag= new Image();
    background_imgtag.onload=upload_bg;
    background_imgtag.src=background_img;

    car_imgtag=new Image();
    car_imgtag.onload=upload_car;
    car_imgtag.src=car_img;
}

function upload_bg()
{
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}

function upload_car()
{
    ctx.drawImage(car_imgtag,carX,carY,car_width,car_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);

    if (keyPressed=='37')
    {
      left();
      console.log("left");
    }
    if (keyPressed=='38')
    {
      up();
      console.log("up");
    }
    if (keyPressed=='39')
    {
      right();
      console.log("right");
    }
    if (keyPressed=='40')
    {
      down();
      console.log("down");
    }
}

function left()
{
  if (carX>=0)
  {
    carX=carX-10;
    console.log("left key pressed|| carX:"+carX+"carY:"+carY);
    upload_bg();
    upload_car();
  }
}
function right()
{
  if (carX<=700)
  {
    carX=carX+10;
    console.log("Right key pressed|| carX:"+carX+"carY:"+carY);
    upload_bg();
    upload_car();
  }
}
function up()
{
  if (carY>=0)
  {
    carY=carY-10;
    console.log("Up key pressed|| carX:"+carX+"carY:"+carY);
    upload_bg();
    upload_car();
  }
}
function down()
{
  if (carY<=600)
  {
    carY=carY+10;
    console.log("Down key pressed|| carX:"+carX+"carY:"+carY);
    upload_bg();
    upload_car();
  }
}