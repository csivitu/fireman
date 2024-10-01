const canvas = document.getElementById('canvas');
if (!canvas) {
    console.error('Canvas element not found');
    
}

let ctx = canvas.getContext('2d');
if (!ctx) {
    console.error('Canvas 2D context not found');
    
}


    export const maze =[
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1],
    [1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1],
    [1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1],
    [1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1],
    [1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1],
    [1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1],
    [1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1],
    [1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1],
    [1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1],
    [1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1],
    [1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1],
    [1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1],
    [1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1],
    [1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1],
    [1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1],
    [1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1],
    [1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];
    
    const wall = new Image();
wall.src = './images/wall.png'; // Ensure this path is correct

const empty = new Image();
empty.src = './images/empty.png'; // Ensure this path is correct

let imagesLoaded = 0;

wall.onload = () => {
    imagesLoaded++;
    console.log('Wall image loaded');
    checkImagesLoaded();
};

empty.onload = () => {
    imagesLoaded++;
    console.log('Empty image loaded');
    checkImagesLoaded();
};

function checkImagesLoaded() {
    if (imagesLoaded === 2) {
        resizeCanvas();
        draw(ctx);
    }
}

function resizeCanvas() {
    const viewportHeight = window.innerHeight * 0.85;
    const viewportWidth = window.innerWidth * 0.85;
    canvas.width = viewportWidth;
    canvas.height = viewportHeight;
    console.log(`Canvas resized to: ${canvas.width}x${canvas.height}`);
    if (imagesLoaded === 2) {
        draw(ctx); // Redraw maze on resize
    }
}

function draw(ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas before drawing
    const tilesize = Math.min(canvas.width / maze[0].length, canvas.height / maze.length);
    
    console.log(`Tile size: ${tilesize}`);
    
    for (let row = 0; row < maze.length; row++) {
        for (let column = 0; column < maze[row].length; column++) {
            const img = maze[row][column] === 1 ? wall : empty;
            ctx.drawImage(img, column * tilesize, row * tilesize, tilesize, tilesize);
        }
    }
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas(); // Initial canvas setup