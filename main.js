function setup() {
  canvas = createCanvas(400, 320);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  //mobilenet starts here
  classifier= ml5.imageClassifier('MobileNet', modelLoaded);
}
function modelLoaded(){
  console.log('Model has been loaded!')
}
function draw(){
  push();
  translate(width,0);
  scale(-1, 1);
    image(video, 0, 0, 400, 320)
    pop()
    //classifier holds the model
    //video holds the camera
    classifier.classify(video, gotResult);
}
function gotResult(error, results){
  if(error){
    console.error(error)
  }
  else{
    console.log(results)
    document.getElementById("name").innerHTML="Object Name: "+ results[0].label
    per= floor(results[0].confidence*100)
    document.getElementById("acc").innerHTML="Accuracy: "+ per+ "%"
  }
}