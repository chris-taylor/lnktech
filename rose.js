//----------------------------------//
// Don't edit these!!               //
//----------------------------------//

canvas = document.getElementById('canvas');
context = canvas.getContext('2d');

// OK to edit stuff below here

var radius = 240;
var x = 250;
var y = 250;

function getX(angle) {
    return 250 + radius * Math.cos(angle / 180 * Math.PI);
}

function getY(angle) {
    return 250 + radius * Math.sin(angle / 180 * Math.PI);
}

angle = 0;
d = 10;
context.beginPath();
context.moveTo(getX(angle), getY(angle))
while (angle < 360) {
    x = getX(angle);
    y = getY(angle);
    context.lineTo(getX(angle+180), getY(angle+180));
    context.lineTo(getX(angle+d), getY(angle+d));
    angle += d;
}

context.stroke()