//----------------------------------//
// Don't edit these!!               //
//----------------------------------//

canvas = document.getElementById('canvas');
context = canvas.getContext('2d');

// OK to edit stuff below here

framerate = 25; // frames per second
angle = 3; // canvas is rotated by this many degrees on each frame

function rotate(amount) {
    context.translate(canvas.width / 2, canvas.height / 2);
    context.rotate(amount / 180 * Math.PI);
    context.translate(-canvas.width/2, -canvas.width / 2);
}

function draw() {

    // Clear the canvas and reset styles
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.lineWidth = 1;
    context.strokeStyle = 'black'
    context.fillStyle = 'black'

    // Rotate
    rotate(angle)

    // Draw the head
    context.beginPath();
    context.fillStyle = 'orange';
    context.arc(250, 250, 200, 0, 2 * Math.PI);
    context.stroke();
    context.fill();

    // Draw the mouth
    context.beginPath();
    context.fillStyle = 'white';
    context.arc(250, 250, 150, 0, Math.PI);
    context.stroke();
    context.fill();
    context.lineTo(400, 250);
    context.stroke();

    // Draw the left eye
    context.beginPath();
    context.fillStyle = 'white'
    context.arc(180, 180, 50, 0, 2 * Math.PI);
    context.stroke();
    context.fill();

    // Left pupil
    context.beginPath();
    context.fillStyle = 'black'
    context.arc(180, 180, 25, 0, 2 * Math.PI);
    context.stroke();
    context.fill();

    // Draw the right eye
    context.beginPath();
    context.fillStyle = 'white'
    context.arc(250 + 70, 180, 50, 0, 2 * Math.PI);
    context.stroke();
    context.fill();

    // Left pupil
    context.beginPath();
    context.fillStyle = 'black'
    context.arc(250 + 70, 180, 25, 0, 2 * Math.PI);
    context.stroke();
    context.fill();

    // Hair
    context.beginPath();
    context.lineWidth = 30;
    context.lineCap = 'round';
    context.arc(250, 250, 200, 1.1 * Math.PI, 1.9 * Math.PI);
    context.stroke();

}


setInterval(draw, 1000 / framerate);
