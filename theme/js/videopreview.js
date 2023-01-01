// video-preview

let videolinks = document.getElementsByClassName('video-preview');

for (let i = 0; i < videolinks.length; i++) {

    let element = videolinks[i];
    let img = element.getElementsByTagName('IMG')[0];
    let imgsrc = img.src
    let imgalt = img.alt
    let frames = img.dataset.frames;
    let _width = img.naturalWidth;
    let _height = img.naturalHeight;
    let width = _width/frames;
    element.style.width = width + 'px';
    element.style.height = _height + 'px';

    //console.log(_width, _height, width)
    //console.log(element.style.width)
    //console.log(element.style.height)
    
    element.innerHTML = '<span>▷ '+imgalt+'</span>'
    element.style.backgroundImage = 'url("'+imgsrc+'")'

    element.addEventListener('mousemove', mouseMove)
    element.frames = frames;
    element.frames = frames;
    element.width = width;
}

function mouseMove(event) {
    let x = event.offsetX;
    let width = this.width;
    let frames = this.frames
    let step = parseInt(width / frames)
    let nth = parseInt(x / step)
    this.style.backgroundPosition = (-width * nth) + 'px';
}
