var circular1=2;

function setup() {
  // put setup code here
    createCanvas(600,600);
    background("#000000");
    
}

function draw() {
  // put drawing code here
    fill("#e00707"); //colors the inside of ellipse
    stroke("#e00707"); //colors the outline of ellipse
    strokeWeight(1); //the size of outline of ellipse
    ellipseMode(CORNERS);  // places one ellipse in corner according to the center 
    
    fill("#000000"); 
    translate(0,0); //the position of the drawing code on canvas changes 
    ellipse(25, 25, 50, 50);
    line(80,80,3,3);
    ellipse(300,300,50,50);
     line(600,600,3,3);
    fill("#00007f");
    strokeWeight(1);
     ellipse(mouseX,mouseY,circular1,circular1); //ellipse moves wherever the mouse goes
 
    fill("#000000"); 
    translate(300,300); //position of the drawing code on canvas changes 
    ellipse(25, 25, 50, 50);
    line(80,80,3,3);  
    ellipse(300,300,50,50);
     line(600,600,3,3);
    fill("#00007f");
    strokeWeight(1);
     ellipse(mouseX,mouseY,circular1,circular1); //ellipse moves wherever the mouse goes
    

}

function keyPressed(){ //when a key is pressed the diameter of ellipse entitled circular1 expands by 20.
    circular1=circular1+20;
    
}