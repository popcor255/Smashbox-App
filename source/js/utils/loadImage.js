function loadImg(options, callback) {
    var seconds = 0,
        maxSeconds = 10,
        complete = false,
        done = false;

    if (options.maxSeconds) {
        maxSeconds = options.maxSeconds;
    }

    function tryImage() {
        if (done) { return; }
        if (seconds >= maxSeconds) {
            callback({ err: 'timeout' });
            done = true;
            return;
        }
        if (complete && img.complete) {
            if (img.width && img.height) {
                callback({ img: img });
                done = true;
                return;
            }
            callback({ err: '404' });
            done = true;
            return;
        } else if (img.complete) {
            complete = true;
        }
        seconds++;
        callback.tryImage = setTimeout(tryImage, 1000);
    }
    var img = new Image();
    img.onload = tryImage();
    img.src = options.src;
    tryImage();
}