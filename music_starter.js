
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
    ellipse(i * 10, other * sin(i * 10) + 170, 5, 5)
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


}





  