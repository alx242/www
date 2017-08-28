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
    canv.line(pos_x,pos_y,pos_x*1.5+640,pos_y*1.5+480,1,'#FF0000');
    canv.line(pos_x,pos_y+480,pos_x*3+640,pos_y*3,5,'#00FF00');

    // Draw some triangles
    canv.triangle(pos_x*2+150,pos_y+150,pos_x*2+250,pos_y+250,pos_x*2+50,pos_y+250,'#FF0000');
    canv.triangle(pos_x*2+250,pos_y+350,pos_x*2+450,pos_y+350,pos_x*2+350,pos_y+450,'#00FF00');

    // Draw some quadrants
    canv.quad(pos_x*2,pos_y*2+150,pos_x+300,pos_y*3+150,pos_x+250,pos_y*3+250,pos_x+50,pos_y+250,'#FF0000');
    canv.quad(pos_x+50,50,pos_x+70,100,'#00FF00');

    // And our image...
    myimage.draw(canv,pos_x,pos_y,0.8);
    // myimage.draw(canv,320,10,1,45);
    // myimage.draw(canv,50,300,1,0,2,1.5);
    // setTimeout(arguments.callee, 100);

    // Start loop
    requestAnimFrame( go );
}
