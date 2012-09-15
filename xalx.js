// A canvas
var canv;

// A image
var myimage=new image('gfx/evil_smile.png');

var pos_x=0;
var pos_y=0;
var angle=0;
var angle_step=0.01;
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

    // Circle movement
    pos_x = 200*Math.cos(angle);
    pos_y = 200*Math.sin(angle);
    angle = (angle + angle_step) % (2*Math.PI);
    console.log(angle);

    // Draw some lines
    canv.line(0,0,640,480,1,'#FF0000');
    canv.line(0,480,640,0,5,'#00FF00');

    // Draw some triangles
    canv.triangle(150,150,250,250,50,250,'#FF0000');
    canv.triangle(250,350,450,350,350,450,'#00FF00');

    // Draw some quadrants
    canv.quad(0,150,300,150,250,250,50,250,'#FF0000');
    canv.quad(50,50,70,100,'#00FF00');

    // And our image...
    myimage.draw(canv,pos_x,pos_y,0.8);
    // myimage.draw(canv,320,10,1,45);
    // myimage.draw(canv,50,300,1,0,2,1.5);
    // setTimeout(arguments.callee, 100);

    // Start loop
    requestAnimFrame( go );
}
