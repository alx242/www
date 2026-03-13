// A canvas
var canv;

// A image
var myimage=new image('gfx/evil_smile.png');

var angle=0;
var angle_step=0.01;

// Satellite heads: [radius, scale, speed_multiplier, phase_offset]
var satellites = [
    { radius: 200, scale: 0.8,  speed: 1.0,  phase: 0 },
    { radius: 140, scale: 0.5,  speed: -1.5, phase: Math.PI * 0.5 },
    { radius: 100, scale: 0.35, speed: 2.0,  phase: Math.PI },
    { radius: 170, scale: 0.25, speed: -0.7, phase: Math.PI * 1.3 },
    { radius: 60,  scale: 0.2,  speed: 3.0,  phase: Math.PI * 0.2 },
    { radius: 220, scale: 0.15, speed: -2.5, phase: Math.PI * 1.7 }
];

/**
 * Initialize the canvas
 */
function init(){
    canv=new canvas(640,480,"main");
    go();
}

/**
 * Fill the canvas and start the animation...
 */
function go(){
    canv.fill('#000000');

    // Center of canvas
    var cx = 320;
    var cy = 240;

    // Main orbit position (used for lines/shapes)
    var pos_x = 200*Math.cos(angle);
    var pos_y = 200*Math.sin(angle);

    // Draw some lines
    canv.line(pos_x,pos_y,pos_x*1.5+640,pos_y*1.5+480,1,'#FF0000');
    canv.line(pos_x,pos_y+480,pos_x*3+640,pos_y*3,5,'#00FF00');

    // Draw some triangles
    canv.triangle(pos_x*2+150,pos_y+150,pos_x*2+250,pos_y+250,pos_x*2+50,pos_y+250,'#FF0000');
    canv.triangle(pos_x*2+250,pos_y+350,pos_x*2+450,pos_y+350,pos_x*2+350,pos_y+450,'#00FF00');

    // Draw some quadrants
    canv.quad(pos_x*2,pos_y*2+150,pos_x+300,pos_y*3+150,pos_x+250,pos_y*3+250,pos_x+50,pos_y+250,'#FF0000');
    canv.quad(pos_x+50,50,pos_x+70,100,'#00FF00');

    // Draw all the orbiting heads
    for (var i = 0; i < satellites.length; i++) {
        var s = satellites[i];
        var a = angle * s.speed + s.phase;
        var sx = cx + s.radius * Math.cos(a);
        var sy = cy + s.radius * Math.sin(a);
        myimage.draw(canv, sx, sy, s.scale);
    }

    angle = (angle + angle_step) % (2*Math.PI);

    // Start loop
    requestAnimFrame( go );
}
