var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
 pathImg = loadImage ("path.png")
 boyImg = loadImage ("Jake1.png", "Jake2.png", "jake3.png", "jake4.PNG", "jake5.png")
}

function setup(){
  
  createCanvas(400,400);
 //crie um sprite para a pista 
 path = createSprite (200, 200, 200, 400)
//adicione uma imagem para a pista
path.addAnimation ("path.png", pathImg)
path.scale = 1.2
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
path.velocityY = 4
path.scale=1.2;
boy = createSprite (200, 200, 400, 600)
boy.addAnimation ("Jake1.png", "Jake2.png", "jake3.png", "jake4.PNG", "jake5.png", boyImg)
boy.scale = 0.8
//crie um sprite de menino
//adicione uma animação de corrida para ele

  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false
//defina visibilidade como falsa para o limite à esquerda

//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false
//defina visibilidade como falsa para o limite à direita
}

function draw() {
  background(0);
  path.velocityY = 4;
  boy.x = mouseX
  // mover o menino com o mouse usando mouseX
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
boy.collide (leftBoundary)
boy.collide (rightBoundary)
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
