// video-preview

function mouseMove(event) {
    let x = event.offsetX;
    let width = this.width;
    let frames = this.frames
    let step = parseInt(width / frames)
    let nth = parseInt(x / step)
    this.style.backgroundPosition = (-width * nth) + 'px';
}

function video_preview_create() {
    let videoparagraphs = document.getElementsByClassName('video-preview');

    for (let i = 0; i < videoparagraphs.length; i++) {
        let paragraph = videoparagraphs[i];
        let frames = paragraph.dataset.frames;
        let a = paragraph.getElementsByTagName('A')[0];
        a.frames = frames;
        let img = paragraph.getElementsByTagName('IMG')[0];
        let src = img.src;
        a.addEventListener('mousemove', mouseMove)
        let text = a.innerHTML
        a.innerHTML = '<span id="title">▷ ' + text + '</span>'

        img.remove();
        img = new Image();
        img.a = a;
        img.onload = function () {
            const _width = this.naturalWidth;
            const _height = this.naturalHeight;
            let width = _width / frames;
            this.a.style.width = width + 'px';
            this.a.style.height = _height + 'px';
            this.a.width = width;
        };
        img.src = src;
        a.style.backgroundImage = 'url("' + src + '")'
    }
}
document.addEventListener('DOMContentLoaded', video_preview_create);
