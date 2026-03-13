// A canvas
var canv;

// A image
var myimage=new image('gfx/evil_smile.png');

var angle=0;
var angle_step=0.01;

// Satellite heads: radius, scale, speed_multiplier, phase_offset
var satellites = [
    // Large
    { radius: 150, scale: 0.8,  speed: 1.0,  phase: 0 },
    // Medium
    { radius: 110, scale: 0.5,  speed: -1.5, phase: Math.PI * 0.5 },
    { radius: 80,  scale: 0.35, speed: 2.0,  phase: Math.PI },
    { radius: 130, scale: 0.25, speed: -0.7, phase: Math.PI * 1.3 },
    // Small
    { radius: 50,  scale: 0.2,  speed: 3.0,  phase: Math.PI * 0.2 },
    { radius: 170, scale: 0.15, speed: -2.5, phase: Math.PI * 1.7 },
    // Tiny
    { radius: 40,  scale: 0.12, speed: 4.0,  phase: Math.PI * 0.8 },
    { radius: 90,  scale: 0.10, speed: -3.5, phase: Math.PI * 0.1 },
    { radius: 120, scale: 0.08, speed: 5.0,  phase: Math.PI * 1.1 },
    { radius: 60,  scale: 0.10, speed: -4.2, phase: Math.PI * 1.6 }
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
    canv.fill('#6C5EB5');

    // Center of canvas
    var cx = 320;
    var cy = 240;

    // Draw all the orbiting heads
    var imgW = 640;
    var imgH = 480;
    for (var i = 0; i < satellites.length; i++) {
        var s = satellites[i];
        var a = angle * s.speed + s.phase;
        // Offset by half the scaled image size so orbits are centered
        var sx = cx + s.radius * Math.cos(a) - (imgW * s.scale) / 2;
        var sy = cy + s.radius * Math.sin(a) - (imgH * s.scale) / 2;
        myimage.draw(canv, sx, sy, s.scale);
    }

    angle = (angle + angle_step) % (2*Math.PI);

    // Start loop
    requestAnimFrame( go );
}
