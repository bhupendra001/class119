function preload(){

classifier = ml5.imageClassifier('Doodlenet')

}

function setup(){

canvas = createCanvas(280,280);
canvas.center();
background("white");

canvas.mouseReleased(classifycanvas);
synth = window.speechSynthesis;
}

function draw(){

strokeWeight(13);    
stroke(0);

if(mouseIsPressed){

line(pmouseX,pmouseY,mouseX,mouseY);

}

}

function clear_canvas(){

    background("white");

}

function classifycanvas(){

classifier.classify(canvas,gotresult);

}

function gotresult(error,result){

if(error){

console.error(error);

}

else{

console.log(result);
document.getElementById("label").innerHTML = "Label:" + result[0].label;
document.getElementById("confidence").innerHTML = "Confidence" + Math.round(result[0].confidence*100)+'%';

utterthis = new SpeechSynthesisUtterance(result[0].label);
synth.speak(utterthis);

}


}