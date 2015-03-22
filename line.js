//----------------------------------//
// Don't edit these!!               //
//----------------------------------//

canvas = document.getElementById('canvas');
context = canvas.getContext('2d');

// OK to edit stuff below here

context.lineWidth = 10
context.strokeStyle = 'red'
context.lineCap = 'round'
context.lineJoin = 'round'

context.beginPath()
context.moveTo(50, 50)
context.lineTo(450, 50)
context.lineTo(450, 450)
context.lineTo(50, 450)
context.lineTo(50, 50)
context.stroke()