window.onload = function(){
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),

        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,

        p1 = particle.create(width / 2, height / 2, 0.0, 0),
        p2 = particle.create(width / 2 + 300, height / 2, 0.8, -Math.PI / 2),
        p2moon = particle.create(width / 2 + 330, height / 2, 2, -Math.PI / 2),
  
        p3 = particle.create(width / 2 - 500, height / 2, 0.5, Math.PI / 2),
        
        p4 = particle.create(width / 2 - 100, height / 2, 2, -Math.PI / 2),
        p5 = particle.create(width / 2 - 340, height / 2, 2.5, Math.PI / 2),
        p6 = particle.create(width / 2 + 100, height / 2, 2, Math.PI / 2),
        
        // should orbit p3:
        p7 = particle.create(width / 2 - 540, height / 2, 1, Math.PI / 2);
    
    p1.mass = 300;
    
    p2.mass = 40;
    p2.color = "#E0FFFF";
    
    p2moon.mass = 5;
    p2moon.color = "#ffffff";
    
    p3.mass = 15;
    p3.color = "#E0FFFF";
    p4.mass = 5;
    p4.color = "#ffffff";
    
    p5.mass = 5;
    p5.color = "#ffffff";
    
    p6.mass = 3;
    p6.color = "#ffffff";
    
    p7.mass = 3;
    p7.color = "#ffffff";
  
    bodies = [p1, p2, p3, p4, p5, p6, p7, p2moon];
    
    update();
    
    function update(){
      context.clearRect(0, 0, width, height);
      context.fillStyle = "#404040";
      context.fillRect(0, 0, width, height);
      
      bodies.forEach(function(b){
        bodies.forEach(function(other){
          if(b != other && other.active){
            b.gravitateTo(other);
            if(b.distanceTo(other) < 10 && b.mass > other.mass){
              other.active = false;
              b.mass += other.mass;
              other.mass = 0;
            }
          }
        });
        b.update();
        drawBody(b, "ffff00");
      });
  
      requestAnimationFrame(update);
    }
    
    function drawBody(particle) {
      context.beginPath();
      context.fillStyle = particle.color;
      context.arc(particle.position.getX(), particle.position.getY(), particle.mass * 0.1, 0, Math.PI * 2, false);
      context.fill();
    }
  };