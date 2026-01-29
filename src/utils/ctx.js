 export function getContext(){
    const canvasElement = document.querySelector('canvas');
    const ctx = canvasElement.getContext('2d');
    ctx.imageSmoothingEnabled = false;

    return ctx;
}



export function drawFrame(ctx, image, dimensions, x, y, direction = 1){
            const [srcX, srcY, srcWidth, srcHeight] = dimensions;
    
            ctx.scale(direction, 1);
            ctx.drawImage(
                image, 
                srcX, srcY, srcWidth, srcHeight, x * direction, y, srcWidth, srcHeight,
            )
            ctx.setTransform(1, 0, 0, 1, 0, 0);
        }
