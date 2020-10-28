// Setting canvas class to variable:
var canvas = document.getElementById("draw");

// Get canvas 2D context and set it to the correct size:
var ctx = canvas.getContext("2d");
resize();

// Resize canvas when window is resized:
function resize() {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
}

// Initialize position as 0,0:
var pos = { x: 0, y: 0 };

// New position from mouse events:
function setPosition(e) {
    pos.x = e.clientX;
    pos.y = e.clientY;
}

function draw(e) {
    if(e.buttons !== 1)  return; // If mouse is not clicked, do not go further
    
    var color = document.getElementById("hex").value;
    
    ctx.beginPath(); // Begin the drawing path
    
    ctx.lineWidth = 20; // Width of line
    ctx.lineCap = "round"; // Rounded end cap
    ctx.strokeStyle = color; // Hex color of line
    
    ctx.moveTo(pos.x, pos.y); // From position
    setPosition(e);
    ctx.lineTo(pos.x, pos.y); // To position
    
    ctx.stroke();
}

// Add window event listener to trigger when window is resized:
window.addEventListener("resize", resize);

// Add event listeners to trigger on different mouse events:
document.addEventListener("mousemove", draw);
document.addEventListener("mousedown", setPosition);
document.addEventListener("mouseenter", setPosition);
