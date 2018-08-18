var video,
    vScale = 9;
  

function setup() {
 
  createCanvas(500, 500);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width/vScale, height/vScale);
}

function draw() {
  video.loadPixels();
   
  loadPixels();
    for(var y = 0; y < video.height; y++){
    for(var x = 0; x < video.width; x++){
      var index = (x + y * video.width)*4;
      var r = video.pixels[index+0];
      var g = video.pixels[index+1];
      var b = video.pixels[index+2];
      
      var bright = r + g + b;
      
      var w = map(bright, 1, 255, 0, vScale);
      
      // noStroke()
      fill(r, g, b);
      ellipse(x*vScale, y*vScale, w, w);
      
      pixels[index+0] = bright;
      pixels[index+1] = bright;
      pixels[index+2] = bright;
      pixels[index+3] = 255;
    }
  }
  
   
}