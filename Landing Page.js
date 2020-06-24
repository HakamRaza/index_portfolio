
// detect window screen and height to arrange position
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;


function centralisedOrigin () {
    //must same as CSS
    const originWidth = 1000;
    const originHeight = 1000;
    
    document.getElementById('zoomOrigin').style.top = `${windowHeight/2 - originHeight/2}px`;
    
    document.getElementById('zoomOrigin').style.left = `${windowWidth/2 - originWidth/2}px`;

}