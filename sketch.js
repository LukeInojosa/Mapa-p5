import World from "./world.js";
import Matrix from "./matrix.js";
import {perlin_noise} from "./noise.js"

const GRASS = 0;
const DIRT = 1;
const WATER = 2;
const WALL = 3;
const REMOVE = 10
let grama;
let terra;
let agua;
let parede;

const lines = 10;
const columns = 10;
let mapa = perlin_noise(lines,columns).map((array)=>{
    return array.map((value) => {
        // if (value <= -0.3) return GRASS;
        if(value <= -0.5) return WATER;
        else if (value <= -0.44) return DIRT;
        else if (value <= -0.42) return WALL;
        else if (value <= -0.40) return WATER;
        else if (value <= -0.05) return GRASS;
        else if (value <= 0.07) return DIRT;
        else if (value <= 0.08) return WALL;
        else if (value < 0.4) return WATER;
        else if(value >= 0.4) return WALL;
        else if(value <= 1) return DIRT;
    })
})

let w ;

let pos;
let locked = false;
var element = GRASS;

let test = true;
function ambient( p ) { 
    p.preload = function () {
        grama = p.loadImage("./image/grama.png")
        terra = p.loadImage("./image/terra.png")
        agua = p.loadImage("./image/agua.png")
        parede = p.loadImage("./image/terra.png")
    };
    p.setup = function () {
        //Seta as configuração da tela
        var div = document.getElementById("container");
        let height = Math.ceil(0.95*div.offsetHeight/lines)*lines;
        let width = Math.ceil(0.95*div.offsetWidth/columns)*columns;
        p.createCanvas(width,height);
        
        w = new World(p,lines,columns);
        w.createBlock(GRASS,grama,[0,255,0,255]);
        w.createBlock(DIRT,terra,[150,75,0,255]);
        w.createBlock(WATER,agua,[0,0,255,255]);
        w.createBlock(WALL,agua,[127,127,127,255]);
        w.drawWorld(mapa);
    };
    p.draw = function () {
        if (test){
            for (let i =0;i<3;i+=1){
                for (let j =0;j<3;j+=1){
                    w.removeBlock(i,j)
                    w.drawBlock(mapa[i][j],i,j,[0,0,0,-200]);
                }                
            }
            test = false
        }
        if (locked){
            pos = w.mouseOver();
            mapa[pos[0]][pos[1]] = element; 
            w.drawBlock(element,pos[0],pos[1]);      
        }
    };
    p.keyPressed = function(){
        if(p.key === "g"){
            element = GRASS;
        }
        if(p.key === "d"){
            element = DIRT;
        }
        if(p.key === "w"){
            element = WATER;
        } 
        if(p.key === "b"){
            element = WALL;
        } 
        if(p.key === "r"){
            element = REMOVE;
        } 
    };
    p.mousePressed = function(){
        locked = true;
        p.redraw()
    };
    p.mouseDragged = function(){
        if(locked){
            p.redraw()
        }
    };
    p.mouseReleased = function(){
        locked = false;
    };
}

new p5(ambient,"container");