var canvas = document.createElement('canvas');
document.body.appendChild(canvas);


document.body.style.margin = 0;
document.body.style.backgroundColor = "black";
canvas.style.position = 'fixed';


var canvastwodcontext = canvas.getContext('2d');
resize();


var position = { x: 0, y: 0 };

window.addEventListener('resize', resize);
document.addEventListener('mousemove', draw);
document.addEventListener('mousedown', setPosition);
document.addEventListener('mouseenter', setPosition);


function setPosition(e) {
  position.x = e.clientX;
  position.y = e.clientY;
}


function resize() {
  canvastwodcontext.canvas.width = window.innerWidth;
  canvastwodcontext.canvas.height = window.innerHeight;
}

function draw(e) {
  
  if (e.buttons !== 1) return;

  canvastwodcontext.beginPath(); 

  canvastwodcontext.lineWidth = 5;
  canvastwodcontext.lineCap = 'round';
  canvastwodcontext.strokeStyle = 'white';

  canvastwodcontext.moveTo(position.x, position.y); 
  setPosition(e);
  canvastwodcontext.lineTo(position.x, position.y); 

  canvastwodcontext.stroke(); 
}