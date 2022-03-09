var img;
var frames;
var imgsrc;
var width;
var _width;
var _height;
var imgalt;
var nth;

var links = document.getElementsByClassName('video-preview');
for (let i = 0, len = links.length; i < len; i++) {
    var element = links[i];
    img = element.getElementsByTagName('IMG')[0];
    imgsrc = img.src
    imgalt = img.alt
    frames = img.dataset.frames;
    _width = img.naturalWidth;
    _height = img.naturalHeight;
    width = _width/frames;
    element.style.width = width + 'px';
    element.style.height = _height + 'px';
    console.log(_width, _height, width)
    console.log(element.style.width)
    console.log(element.style.height)
    
    element.innerHTML = '<span>▷ '+imgalt+'</span>'
    element.style.backgroundImage = 'url("'+imgsrc+'")'
    links[i].addEventListener('mousemove', mouseMove)
}

function mouseMove(event) {
    var x = event.offsetX;
    var step = parseInt(width/frames)
    var nth = parseInt(x / step)
    this.style.backgroundPosition = (-width * nth) + 'px';
}
