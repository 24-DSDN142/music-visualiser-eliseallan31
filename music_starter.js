
let backGround
let firstRun = true 
let Discofloor = [];
let DiscoLight = [];
let elephant = [];
let glitz 

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  if (firstRun) {
    rectMode(CENTER);
    //background image
    backGround = loadImage('background.png')
   
    //discofloor image
    Discofloor.push(loadImage('discofloor1.png')) ;
    Discofloor.push(loadImage('discofloor2.png')) ;
    Discofloor.push(loadImage('discofloor3.png')) ;

    //discolight image
    DiscoLight.push(loadImage('light1.PNG'));
    DiscoLight.push(loadImage('light2.PNG'));
    DiscoLight.push(loadImage('light3.PNG'));

    //elephant image
    elephant.push(loadImage('elephant1.png'));
    elephant.push(loadImage('elephant2.png'));
    elephant.push(loadImage('elephant3.png'));
    elephant.push(loadImage('elephant4.png'));
    elephant.push(loadImage('elephant5.png'));

    //glitter image
    glitz = loadImage('glitter.png')
    firstRun = false
  }

  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);

  let bar_spacing = height / 10;
  let bar_height = width / 12;
  let bar_pos_x = width / 2;

  imageMode(CORNER)
  image(backGround, 0, 0);

  let discoFloorFrame = int(map(drum, 0, 100, 0, 2));
  push();
  scale(0.5);
  image(Discofloor[discoFloorFrame], 0, 0)
  pop();

  //background waves 
  for (let i = 0; i < 1000; i++) {
    fill(163, 237, 107) //green
    ellipse(i * 10, bass * sin(i * 10) + 170, 5, 5)
  }
  for (let i = 0; i < 1000; i++) {
    fill(245, 212, 66) //yellow
    ellipse(i * 10, drum * sin(i * 20) + 170, 7, 7)
  }

  //discolight colour change
  let discoLightFrame = int(map(drum, 0, 100, 0, 2));
  image(DiscoLight[discoLightFrame], 0, 0)

  //elephant movement
  push();
  let elephantFrame = int(map(vocal, 0, 100, 0, 4));

  image(elephant[elephantFrame], 0, 0)

  pop();

  //second elephant at beat drop
  if (counter > 60 * 72) {
    elephantFrame = int(map(bass, 0, 100, 0, 4));
    push();
    scale(-0.5, 0.5)
    image(elephant[elephantFrame], -1000, 200);
    pop();
  }

  //glitter frame 
if(words == 'elephant') {
  image(glitz, 0, 0)
}

  
  // image(mybackgroundimage, 0, 0);

}




// function draw_one_frame(words, vocal, drum, bass, other, counter) {




//   // let eyeSize = map(drum,0,100,50,150)
//   // fill(250, 65, 120)
//   // ellipse(150,200,eyeSize,eyeSize)
//   // ellipse(350,200,eyeSize,eyeSize)
// }



  //  // vocal bar is red
  //  fill(200, 0, 0);
  //  rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
  //  fill(0);
  //  text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);

  //  // drum bar is green
  //  fill(0, 200, 0);
  //  rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
  //  fill(0);
  //  text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);

  //  // bass bar is blue
  //  fill(50, 50, 240);
  //  rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
  //  fill(0);
  //  text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);

  //  // other bar is white
  //  fill(200, 200, 200);
  //  rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
  //  fill(0);
  //  text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
  //  fill(255, 255, 0);

  //  // display "words"
  //  textAlign(CENTER);
  //  textSize(vocal);
  //  text(words, width/2, height/3);