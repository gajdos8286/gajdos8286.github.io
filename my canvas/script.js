function drawShapes()
{
    drawCircles();
    drawLines();
    drawRectangles();
    drawImage();
}

function drawCircles()
{
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(250,200,100,Math.PI,2*Math.PI,true);
    ctx.fillStyle = "#996633";
    ctx.fill();
    ctx.stroke();
}

function drawRectangles()
{
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#0066ff";
    ctx.fillRect(0,300,500,200)

    ctx.fillStyle = "#000000";
    ctx.fillRect(200,100,100,65)
}

function drawLines()
{
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(250,100);
    ctx.lineWidth = 9;
    ctx.lineTo(250,200);
    ctx.strokeStyle = "#996633";
    ctx.stroke();
}

var pic1 = new Image();
pic1.src = "img/sun.JPG";

function drawImage()
{
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(pic1,0,0,100,100);
}
