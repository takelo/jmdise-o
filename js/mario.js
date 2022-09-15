$(document).ready(function () {
  console.log(gsap);
  const canvas = document.querySelector("canvas");
  const c = canvas.getContext("2d");
  console.log('c',c);

  // console.log(canvas);
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  // const scoreEl = document.querySelector('#scoreEl');
  // const startGameBtn = document.querySelector('#startGameBtn');
  // const modalUI = document.querySelector('#modalUI');
  // const modalScore = document.querySelector('#modalScore');

  class Player {
    constructor() {
      this.position = {
        x: 100,
        y: 100
      }
      this.width = 100;
      this.height = 100;
    }

    draw() {
      c.fillRect(this.position.x , this.position.y, this.width, this.height);
      // c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      // c.fillStyle = this.color;
      // c.fill();
    }
  }

  const player = new Player();
  player.draw();
  // class Projectile {
  //   constructor(x, y, radius, color, velocity) {
  //     this.x = x;
  //     this.y = y;
  //     this.radius = radius;
  //     this.color = color;
  //     this.velocity = velocity;
  //   }
  //   draw() {
  //     c.beginPath();
  //     c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
  //     c.fillStyle = this.color;
  //     c.fill();
  //   }

  //   update() {
  //     this.draw();
  //     this.x = this.x + this.velocity.x;
  //     this.y = this.y + this.velocity.y;
  //   }
  // }

  // class Enemy {
  //   constructor(x, y, radius, color, velocity) {
  //     this.x = x;
  //     this.y = y;
  //     this.radius = radius;
  //     this.color = color;
  //     this.velocity = velocity;
  //   }
  //   draw() {
  //     c.beginPath();
  //     c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
  //     c.fillStyle = this.color;
  //     c.fill();
  //   }

  //   update() {
  //     this.draw();
  //     this.x = this.x + this.velocity.x;
  //     this.y = this.y + this.velocity.y;
  //   }
  // }
  // const friction = 0.98;
  // class Particle {
  //   constructor(x, y, radius, color, velocity) {
  //     this.x = x;
  //     this.y = y;
  //     this.radius = radius;
  //     this.color = color;
  //     this.velocity = velocity;
  //     this.alpha = 1;
  //   }
  //   draw() {
  //     c.save();
  //     c.globalAlpha = this.alpha;
  //     c.beginPath();
  //     c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
  //     c.fillStyle = this.color;
  //     c.fill();
  //     c.restore();
  //   }

  //   update() {
  //     this.draw();
  //     this.velocity.x *= friction;
  //     this.velocity.y *= friction;
  //     this.x = this.x + this.velocity.x;
  //     this.y = this.y + this.velocity.y;
  //     this.alpha -= 0.01;
  //   }
  // }
  // const x = canvas.width / 2;
  // const y = canvas.height / 2;

  // let player = new Player(x, y, 10, "white");
  // let projectiles = [];
  // let enemies = [];
  // let particles = [];

  // function init(){
  //   player = new Player(x, y, 10, "white");
  //   projectiles = [];
  //   enemies = [];
  //   particles = [];
  //   score = 0;
  //   scoreEl.innerHTML = 0;
  //   modalScore.innerHTML = 0;
  // }
  // // const projectile = new Projectile(
  // //   canvas.width / 2,
  // //   canvas.height / 2,
  // //   5,
  // //   'red',
  // //   {
  // //     x:1,
  // //     y:1
  // //   }
  // // )


  // function spawnEnemies() {
  //   setInterval(() => {
  //     // valores entre 4 y 30 para que no sean tan chicos
  //     const radius = Math.random() * (30 - 4) + 4;
  //     let x;
  //     let y;

  //     if (Math.random() < 0.5) {
  //       x = Math.random() < 0.5 ? 0 - radius : canvas.width + radius;
  //       y = Math.random() * canvas.height;
  //     } else {
  //       x = Math.random() * canvas.width;
  //       y = Math.random() < 0.5 ? 0 - radius : canvas.height + radius;
  //     }
  //     const color = `hsl(${Math.random() * 360}, 50%, 50%)`;
  //     const angle = Math.atan2(canvas.height / 2 - y, canvas.width / 2 - x);
  //     const velocity = {
  //       x: Math.cos(angle),
  //       y: Math.sin(angle),
  //     };
  //     enemies.push(new Enemy(x, y, radius, color, velocity));
  //     console.log(enemies);
  //   }, 1000);
  // }
  // // 51 min

  // let animationId;
  // let score = 0;
  // function animate() {
  //   animationId = requestAnimationFrame(animate);
  //   c.fillStyle = 'rgb(0,0,0, 0.1)';
  //   c.fillRect(0, 0, canvas.width, canvas.height);
  //   player.draw();
  //   particles.forEach((particle, index ) => {
  //     if(particle.alpha <= 0 ){
  //       particles.splice(index, 1);
  //     }else{
  //       particle.update();
  //     }
  //     particle.update();
  //   })
  //   projectiles.forEach((projectile, index) => {
  //     projectile.update();

  //     // remove proyerctiles out view
  //     if(projectile.x + projectile.radius < 0 ||
  //        projectile.x - projectile.radius > canvas.width ||
  //        projectile.y + projectile.radius < 0 ||
  //        projectile.y - projectile.radius > canvas.height){
  //       setTimeout(() => {
  //         projectiles.splice(index, 1);
  //       }, 0);
  //     }
  //   });
  //   enemies.forEach((enemy, index) => {
  //     enemy.update();
  //     const dist = Math.hypot(player.x - enemy.x, player.y - enemy.y);
  //     // end game - game over
  //     if(dist - enemy.radius - player.radius < 1){
  //       cancelAnimationFrame(animationId);
  //       modalUI.style.display = 'flex';
  //       modalScore.innerHTML = score;
  //     }

  //     projectiles.forEach((projectile, projectileIndex) => {
  //       // hypot obtiene distancia entre 2 elementos
  //       const dist = Math.hypot(projectile.x - enemy.x, projectile.y - enemy.y);
  //       // projectile touch enemy
  //       if(dist - enemy.radius - projectile.radius < 1){
  //         // create particles explosions
  //         for (let i = 0 ; i < enemy.radius * 2 ; i++){
  //           // para hacer dandom negativo positivo le resto 0,5
  //           particles.push(
  //             new Particle(
  //               projectile.x, 
  //               projectile.y, 
  //               Math.random() * 2, 
  //               enemy.color, 
  //               {
  //                 x: (Math.random() - 0.5) * (Math.random() * 6),
  //                 y: (Math.random() - 0.5) * (Math.random() * 6)
  //               }
  //             )
  //           )
  //         }
  //         if(enemy.radius - 10 > 5){
  //           // incrase score hit
  //           score += 100;
  //           scoreEl.innerHTML = score;
  //           // enemy.radius -= 10;
  //           gsap.to(enemy,{
  //             radius: enemy.radius - 10, duration: 0.3
  //           });
  //           setTimeout(() => {
  //             projectiles.splice(projectileIndex, 1);
  //           }, 0);
  //         }else{
  //           // incrase score erase enemy
  //           score += 250;
  //           scoreEl.innerHTML = score;
  //           setTimeout(() => {
  //             enemies.splice(index, 1);
  //             projectiles.splice(projectileIndex, 1);
  //           }, 0);
  //         }
  //       }
  //     });
  //   });
  // }

  // window.addEventListener("click", (e) => {
  //   console.log(projectiles);
  //   const angle = Math.atan2(event.clientY - canvas.height / 2, event.clientX - canvas.width / 2);
  //   const velocity = {
  //     x: Math.cos(angle)*5,
  //     y: Math.sin(angle)*5,
  //   };
  //   projectiles.push(new Projectile(canvas.width / 2, canvas.height / 2, 5, "white", velocity));
  // });

  // startGameBtn.addEventListener("click", (e) => {
  //   init();
  //   animate();
  //   spawnEnemies();
  //   modalUI.style.display = 'none';
  // });

}); //lave document ready


