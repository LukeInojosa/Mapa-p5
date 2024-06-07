class World{
    constructor(lines,columns){
        this.lines = lines;
        this.columns = columns;
        this.matrix = new Matrix(lines,columns);
        this.blocks = {};
    }
    createBlock(id,image,color){
        this.blocks[id] = {"image":image,"color":color};
    }
    drawWorld(matrix){
        for(var i = 0; i < this.lines; i++){
            for(var j = 0; j < this.columns; j++){
                this.drawBlock(matrix[i][j].terr,i,j);
            }
        }
    }
    drawBlock(id,i,j,color){
        let block = this.blocks[id]
        if (color){
            let new_color = []
            if (block["color"] instanceof Array){
                for(let i =0;i<color.length;i+=1){
                    new_color.push(block["color"][i] + color[i])
                }
                console.log(new_color.length)
                console.log(new_color)
                this.matrix.setBlock(block["image"],i,j,new_color);
            }
        }else{
            this.matrix.setBlock(block["image"],i,j,block["color"]);
        }
    }
    removeBlock(i,j){
        this.matrix.removeBlock(i,j)
    }
    mouseOver(){
        return this.matrix.mouseOver()
    }
}




