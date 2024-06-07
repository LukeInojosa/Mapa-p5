const GRASS = 0;
const DIRT = 1;
const WATER = 2;
const WALL = 3;
const REMOV = 10
const TARGET = 100

class Board{
    constructor(lines,columns){
        this.screen = new World(lines,columns);
        this.board = perlin_noise(lines,columns).map((array)=>{
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
        for(let i = 0; i < lines; i++){
            for(let j = 0; j < columns; j++){
              this.board[i][j] = {coord: this.calc_coord(i, j), terr: this.board[i][j]};
            }
        }
        this.target = this.set_target()
    }
    set_target(){
        let i = Math.floor(this.screen.lines*Math.random())
        let j = Math.floor(this.screen.columns*Math.random())
        while (this.board[i][j].terr == WALL || this.board[i][j].terr == REMOV) {
            i = Math.floor(this.screen.lines*Math.random())
            j = Math.floor(this.screen.columns*Math.random())
        }
        return [i,j]
    }
    calc_coord(i,j){
        let dx = this.screen.matrix.dx;
        let dy = this.screen.matrix.dy;
        return createVector((j+1/2)*dx,(i+1/2)*dy)
    }

}