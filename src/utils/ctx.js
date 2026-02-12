 export function getContext(){
    const canvasElement = document.querySelector('canvas');
    const ctx = canvasElement.getContext('2d');
    ctx.imageSmoothingEnabled = false;

    return ctx;
}



export function drawFrame(ctx, image, dimensions, x, y, direction = 1, scaleX = 1, scaleY = 1) {
    const [srcX, srcY, srcWidth, srcHeight] = dimensions;

    ctx.save(); 

    ctx.translate(x, y); 
    ctx.scale(direction * scaleX, scaleY); 
    ctx.drawImage(
        image,
        srcX,
        srcY,
        srcWidth,
        srcHeight,
        0, 
        0,
        srcWidth,
        srcHeight
    );

    ctx.restore(); 
}

