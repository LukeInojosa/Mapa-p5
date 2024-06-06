function perlin_noise(lines,columns){
    let matrix = new Array(lines).fill().map(() => new Array(columns).fill())
    perlin.seed()

    const GRID_SIZE = 4;
    const RESOLUTION_y = lines;
    const RESOLUTION_x = columns;
    let num_pixels_y = GRID_SIZE / RESOLUTION_y;
    let num_pixels_x = GRID_SIZE / RESOLUTION_x;
    let y;
    let x;
    for (let i = 0; i*num_pixels_y < GRID_SIZE; i += 1 ){
        y = i*num_pixels_y;
        for (let j = 0; j*num_pixels_x < GRID_SIZE; j += 1){
            x = j*num_pixels_x;
            let p = perlin.get(x, y)
            matrix[i][j] = p
        }
    }
    return matrix;
    
}