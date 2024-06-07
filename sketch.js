let grama;
let terra;
let agua;
let parede;


let board;

let pos;
let locked = false;
var element = GRASS;

let test = true;

preload = function () {
    grama = loadImage("./image/grama.png")
    terra = loadImage("./image/terra.png")
    agua = loadImage("./image/agua.png")
    parede = loadImage("./image/terra.png")
};
setup = function () {
    const lines = 20;
    const columns = 20;
    //Seta as configuração da tela
    var div = document.getElementById("container");
    let height = Math.ceil(0.95*div.offsetHeight/lines)*lines;
    let width = Math.ceil(0.95*div.offsetWidth/columns)*columns;
    var canvas = createCanvas(width,height);
    canvas.parent("container");

    
    board = new Board(lines,columns)
    board.screen.createBlock(GRASS,grama,[0,255,0,255]);
    board.screen.createBlock(DIRT,terra,[150,75,0,255]);
    board.screen.createBlock(WATER,agua,[0,0,255,255]);
    board.screen.createBlock(WALL,agua,[127,127,127,255]);
    board.screen.drawWorld(board.board);
};
draw = function () {
    if (test){
        for (let i =0;i<3;i+=1){
            for (let j =0;j<3;j+=1){
                board.screen.removeBlock(i,j)
                board.screen.drawBlock(board.board[i][j].terr,i,j,[0,0,0,-200]);
            }                
        }
        test = false
    }
    if (locked){
        if (element == TARGET){
            board.target = [pos[0]],[pos[1]]
        }
        else{
            pos = board.screen.mouseOver();
            board.board[pos[0]][pos[1]].terr = element; 
            board.screen.drawBlock(element,pos[0],pos[1]);  
        }    
    }
};
keyPressed = function(){
    if(key === "g"){
        element = GRASS;
    }
    if(key === "d"){
        element = DIRT;
    }
    if(key === "w"){
        element = WATER;
    } 
    if(key === "b"){
        element = WALL;
    } 
    if(key === "r"){
        element = REMOVE;
    } 
    if(key === "t"){
        element = TARGET;
    } 
};
mousePressed = function(){
    locked = true;
    redraw()
};
mouseDragged = function(){
    if(locked){
        redraw()
    }
};
mouseReleased = function(){
    locked = false;
};
