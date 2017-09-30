function setup() {
  createCanvas(800,600);
}

function draw() {
  
  background(237,237,237);
  
  //Neck
  
  stroke(136,132,137);
  strokeWeight(2); 
    line(300,200,300,380);
    line(310,200,310,380);
    line(320,200,320,380);
    
    
  //Antennas
  
  stroke(136,132,137);
  strokeWeight(2); 
  
  line(280,150,300,180);
  
  line(350,215,370,220);
  
  line(350,100,315,180);
  
  //Body
  
  noStroke();
  
  fill(136,132,137);
  ellipse(290,430,70,70);
  
  fill(0,0,0);
  rect(240,280,100,150);
  
  fill(136,132,137);
  rect(240,300,100,7);
  
  
  //Head
  
  noStroke();
  
  fill(0,0,0);
  ellipse(310,200,90,90)
  
  fill(255,255,255);
  ellipse(325,197,30,30);
  
  fill(0,0,0);
  ellipse(325,197,7,7);
  
  fill(190,190,191);
  ellipse(300,197,10,10);
  
  fill(190,190,191);
  ellipse(343,210,5,5);
  
  fill(190,190,191);
  ellipse(328,175,8,8);
  
  
  //Neck
  
  stroke(136,132,137);
  strokeWeight(2); 
    line(500,200,500,380);
    line(510,200,510,380);
  
  //Antennas
  
  
  stroke(136,132,137)
  noStroke();
  rect(503,140,5,50);
  
  fill(178,43,32);
  ellipse(455,205,20,20);
  
  fill(178,43,32);
  ellipse(555,205,20,20);
  
  fill(178,43,32);
  ellipse(505,170,25,25);
  
  fill(239,208,61);
  ellipse(505,140,12,12);
 
  //Body
 
  fill(90,186,195);
  rect (450,285,10,80,10);
  
  fill(90,186,195);
  rect (550,285,10,80,10);
 
  fill(178,43,32);
  ellipse(465,290,15,15);
  
  fill(178,43,32);
  ellipse(545,290,15,15);
  
  fill(178,43,32);
  ellipse(506,440,30,30);
 
  fill(90,186,195);
  rect (480,370,50,70,10);
 
  fill(90,186,195);
  rect (465,270,80,111,10);
  
  fill(239,208,61);
  rect (485,300,40,50);

  
  
  
  //Head
  
   noStroke();
  
   fill(90,186,195);
  rect (455,170,100,80,10);
  
  fill(239,208,61);
  rect (480,220,7,7);
  rect (490,220,7,7);
  rect (500,220,7,7);
  rect (510,220,7,7);
  rect (520,220,7,7);
  
   fill(255,255,255);
  ellipse(495,195,16,16);
  fill(0,0,0);
  ellipse(495,195,7,7);
  
  fill(255,255,255);
  ellipse(515,195,20,20);
  fill(0,0,0);
  ellipse(515,195,10,10);
  
  
  

  
}