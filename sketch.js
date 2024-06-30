
let song;
//let slider;
//let sliderRate;

let x, y;
let angle = 0

function preload() {
    song = loadSound("Childers Street 8.mp3", () => {
        console.log("Sound loaded successfully!");
    }, (err) => {
        console.error("Failed to load sound:", err);
    });
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    //slider = createSlider(0, 1, 0.5, 0.1);
    //sliderRate = createSlider(0, 5, 1, 0.2);

    // Create the play/pause button and set its initial position and label
    let playButton = createButton("Play Sound");
    playButton.position(width / 2 - 40, height / 2);

    // Toggle between play and pause on button press
    playButton.mousePressed(() => {
        if (song.isLoaded()) {
            if (song.isPlaying()) {
                song.pause();
                playButton.html("Play"); // Change label back to "Play Sound"
            } else {
                song.play();
                playButton.html("Pause"); // Change label to "Pause Sound"
            }
        }
    });
    background(10);
}

function draw() {
    //background(10);
    //if (song.isLoaded()) {
        //song.setVolume(slider.value());
        //song.rate(sliderRate.value());
    //}

   frameRate(150);
   x = mouseX -15;
   y = mouseY;
   translate(x, y);
   rotate(angle)
   noFill()
   stroke(100,100,255, 150);
   arc(0,0, 30, 50, 0, 160);
   arc(30, 0, 30, 50,160, 0);
  
   angle = angle + 2;
   
}

function keyPressed()
{
  save("img.png");  

}