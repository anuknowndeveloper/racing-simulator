//all the code that is commetned out is junk code.
window.onload = () => {
var canvas = document.querySelector('canvas');
var times = 10;
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
var c = canvas.getContext('2d');
var particles = [];
var xx;
var yy;
// a class for creating particles.
class Particle{
    constructor(x,y,num, color, beginningY, width, height){
        this.x = x;
        this.y = y;
        this.beginningY = beginningY
        this.num = num;
        this.color = color;
        this.height = height;
        this.width = width;
    }
    draw(){
        c.beginPath();
        c.fillRect(this.x, this.y, Math.random() * 30, Math.random() * 30);
        c.stroke();
    }
}
//the animate function is the main place where theparticles are all drawn out and animated.
function animate(){
    for (i = 0; i < times; i++){
        var r = Math.random() * 255;
        var g = Math.random() * 255;
        var b = Math.random() * 255
        var y = 50;
        var x = Math.random() * innerWidth + 200;
        particles.push(new Particle(x, y, Math.round(Math.random() * times), "rgb(" + r + ", " + g + ", " + b + ")", Math.random() * 5, Math.floor((Math.random() * 50) + 10), Math.floor((Math.random() * 50) + 10)));
    }
    particles.forEach((particle) => {
        upd();
        function upd(){
            console.clear();
            c.clearRect(particle.x - 0.5, particle.y - 3, particle.x + 0.5, particle.y + 3)
            console.log(particles)
            // setTimeout(function(){
                c.fillStyle = particle.color;
                particle.y += Math.random() * 5 * particle.beginningY;
                // c.fillText(particle.num, particle.x, particle.y - 0.5);
                c.fillRect(particle.x, particle.y, particle.width, particle.height);
                requestAnimationFrame(upd);
            // }, Math.random() * 6000)
        }
    })
}
animate();
}
