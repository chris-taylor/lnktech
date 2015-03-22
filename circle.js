//----------------------------------//
// Don't edit these!!               //
//----------------------------------//

canvas = document.getElementById('canvas');
context = canvas.getContext('2d');

// OK to edit stuff below here

context.beginPath()
context.arc(250, 250, 250, 0, 2 * Math.PI)
context.stroke()
context.fillStyle = 'black'
context.fill()

context.beginPath()
context.arc(250, 250, 200, 0, 2 * Math.PI)
context.stroke()
context.fillStyle = 'red'
context.fill()

context.beginPath()
context.arc(250, 250, 150, 0, 2 * Math.PI)
context.stroke()
context.fillStyle = 'orange'
context.fill()

context.beginPath()
context.arc(250, 250, 100, 0, 2 * Math.PI)
context.stroke()
context.fillStyle = 'yellow'
context.fill()

context.beginPath()
context.arc(250, 250, 50, 0, 2 * Math.PI)
context.stroke()
context.fillStyle = 'white'
context.fill()
