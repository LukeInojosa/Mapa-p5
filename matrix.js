class Matrix{
    constructor(lines,columns){
        let div = document.getElementById("container");
        this.background = window.getComputedStyle(div).backgroundColor;
        this.lines = lines;
        this.columns = columns;
        this.dx = Math.floor(width/columns);
        this.dy = Math.floor(height/lines);
    }
    //desenha um bloco com determinada imagem na posição i, j com determinada cor 
    setBlock(img,i,j,color) {
        tint(255,255,255,255);
        if (typeof color == typeof "") tint(color);
        else if (color instanceof Array){
            if (color.length == 3){
                tint(color[0],color[1],color[2]);
            }
            if (color.length == 4 ){
                tint(color[0],color[1],color[2],color[3]);
            }
        }
        if (i >= this.lines) i = this.lines - 1;
        if (j >= this.columns) j = this.columns -1;
        if (i < 0) i = 0;
        if (j < 0) j = 0;
        image(img,j*this.dx,i*this.dy,this.dx,this.dy)
    }
    removeBlock(i,j){
        fill(this.background)
        rect(j*this.dx,i*this.dy,this.dx,this.dy)
    }
    //retorna a posição so bloco sobre o qual o mouse está atualmente
    mouseOver(){
        let i = Math.floor(mouseY/this.dy)
        let j = Math.floor(mouseX/this.dx)
        return [i,j]
    }
}