$(document).ready(function () {
  console.log(gsap);
  const canvas = document.querySelector("canvas");
  const c = canvas.getContext("2d");

  console.log(canvas);
  canvas.width = innerWidth;
  canvas.height = innerHeight;







  class Enemy {
    constructor(x, y, radius, color, velocity) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
      this.velocity = velocity;
    }
    draw() {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.fillStyle = this.color;
      c.fill();
    }

    update() {
      this.draw();
      this.x = this.x + this.velocity.x;
      this.y = this.y + this.velocity.y;
    }
  }
  const friction = 0.98;

  const x = canvas.width / 2;
  const y = canvas.height / 2;


  let enemies = [];


  function init(){
    enemies = [];
  }


  function spawnEnemies() {
    setInterval(() => {
      // valores entre 4 y 30 para que no sean tan chicos
      const radius = Math.random() * (30 - 4) + 4;
      let x;
      let y;


      // x =  new Random();
      // y = new Random();
      if (Math.random() < 0.5) {
        x = Math.random() < 0.5 ? 0 - radius : canvas.width + radius;
        y = Math.random() * canvas.height;
      } else {
        x = Math.random() * canvas.width;
        y = Math.random() < 0.5 ? 0 - radius : canvas.height + radius;
      }
      const color = `hsl(${Math.random() * 360}, 50%, 50%)`;


      // const angle = Math.random();
      const angle = Math.atan2(canvas.height / 2 - y, canvas.width / 2 - x);
      const velocity = {
        x: Math.cos(angle),
        y: Math.sin(angle),
      };
      enemies.push(new Enemy(x, y, radius, color, velocity));
      console.log(enemies);
    }, 1000);
  }
  // 51 min

  let animationId;
  let score = 0;
  function animate() {
    animationId = requestAnimationFrame(animate);
    c.fillStyle = 'rgb(0,0,0, 0.1)';
    c.fillRect(0, 0, canvas.width, canvas.height);
    // player.draw();


    enemies.forEach((enemy, index) => {
      enemy.update();
      const dist = Math.hypot(0, 0);
      // end game - game over
      // if(sale de la pantalla){
      //   cancelAnimationFrame(animationId);
      // }

 
    });
  }
  init();
  animate();
  spawnEnemies();


}); //lave document ready


