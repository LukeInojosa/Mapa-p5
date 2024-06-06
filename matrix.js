export default class Matrix{
    constructor(p,lines,columns){
        let div = document.getElementById("container");
        this.background = window.getComputedStyle(div).backgroundColor;
        this.lines = lines;
        this.columns = columns;
        this.dx = Math.floor(p.width/columns);
        this.dy = Math.floor(p.height/lines);
        this.p = p;
    }
    //desenha um bloco com determinada imagem na posição i, j com determinada cor 
    setBlock(img,i,j,color) {
        this.p.tint(255,255,255,255);
        if (typeof color == typeof "")this.p.tint(color);
        else if (color instanceof Array){
            if (color.length == 3){
                this.p.tint(color[0],color[1],color[2]);
            }
            if (color.length == 4 ){
                this.p.tint(color[0],color[1],color[2],color[3]);
            }
        }
        if (i >= this.lines) i = this.lines - 1;
        if (j >= this.columns) j = this.columns -1;
        if (i < 0) i = 0;
        if (j < 0) j = 0;
        this.p.image(img,j*this.dx,i*this.dy,this.dx,this.dy)
    }
    removeBlock(i,j){
        this.p.fill(this.background)
        this.p.rect(j*this.dx,i*this.dy,this.dx,this.dy)
    }
    //retorna a posição so bloco sobre o qual o mouse está atualmente
    mouseOver(){
        let i = Math.floor(this.p.mouseY/this.dy)
        let j = Math.floor(this.p.mouseX/this.dx)
        return [i,j]
    }
    // show(){
    //     for(var l = 0; l<this.lines; l+=1) {
    //         for (var c = 0; c < this.columns; c+=1){
    //             // this.p.stroke(200)
    //             this.p.fill(10)
    //             this.p.rect(c*this.dx,l*this.dy,this.dx,this.dy)
    //         }
    //     }
    // }
}