export const bgm = new Audio();
bgm.loop = true;
bgm.volume = 0.5;

export function playMusic(src) {
    if (bgm.src !== src) {
        bgm.src = src;
        const playPromise = bgm.play();
        if (playPromise !== undefined) {
            playPromise.catch(() => {
                
            });
        }
    }
}

export function stopMusic() {
    bgm.pause();
    bgm.currentTime = 0;
}
