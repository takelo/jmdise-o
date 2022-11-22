var canvas = $('canvas').get(0);
var ctx = canvas.getContext('2d');
var particles = [];
var mousePos = {
	x: window.innerWidth / 2,
	y: window.innerHeight / 2
};

console.log(mousePos)

var multiply = 500;

function draw() {
	ctx.clearRect(0,0,canvas.width, canvas.height);
	
	if (particles.length < multiply) {
		for(let i = 0; i < multiply; i++) {
			let p = new Particle();
			particles.push(p);
		}
	}

	for(let i = particles.length - 1; i >= 0; i--) {
		particles[i].update();
		particles[i].draw();
	}
	requestAnimationFrame(draw);
}


class Particle {
	constructor(){
		this.reset();
	}
	reset() {
		this.radius = 3;
		this.x = mousePos.x;
		this.y = mousePos.y;
		this.explosionRadius = 2;
		this.angle = random(0 ,Math.PI * 2);
		this.color = 255;
		// this.color =  10;
		this.velocity = {
			x: Math.sin(this.angle) * this.explosionRadius,
			y: Math.cos(this.angle) * this.explosionRadius,
		};
		this.alpha = Math.random();
	}
	
	draw() {
		ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 1 * Math.PI, false);
    // ctx.fillStyle = `rgba(255, ${this.color}, ${this.color}, ${this.alpha})`;
    // ctx.fillStyle = `hsl(${Math.random() * 360}, 50%, 50%)`;
    ctx.fillStyle = `hsl(361, 50%, 50%)`;
    ctx.fill();
	}
	
	update() {
		this.x += this.velocity.x;
		this.y += this.velocity.y;
		this.alpha -= 0.01;
		this.color = Math.abs(this.color - 5);
		if (this.alpha < 0) {
			this.reset();
		}
	}
	
}
	

function follow(e) {
	mousePos.x = e.pageX;
	mousePos.y = e.pageY;
}



function random(min,max) {
	return Math.random()*(max-min+1)+min;
}
function resize() {
	canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
$(function(){
	$(window).on('resize', resize);
	$(canvas).on('mousemove', follow);
	resize();
	draw();
})