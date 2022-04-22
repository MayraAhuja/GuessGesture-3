var guess1="";
var guess2= "";


Webcam.set({
    width:400,
    height:300,
    image_format:"png",
    png_quality:100

});

Webcam.attach("#webcamDiv");

function takeSnap() {
    Webcam.snap(function(uri){
        document.getElementById("snapDiv").innerHTML='<img id="snapshot" src="'+uri+'">';
    });
}


console.log(ml5.version);
 model= ml4.imageClassifier("https://teachablemachine.withgoogle.com/models/wn4B4YQ0F/model.json",modelUpdate);

function modelUpdate() {
    console.log("Model is loaded ;)");
}


function checkGesture() {
    var image = document.getElementById("snapshot");
    model.classify(image,getResults);
}



function speak() {
    var speechKit= window.speechSynthesis;
    var speakThis= "I think you are "+guess1+" or "+guess2;
    var textToSpeech= new SpeechSynthesisUtterance(speakThis);
    speechKit.speak(textToSpeech);
}


function getResults(errorArray,resultsArray) {
    if (errorArray) {
        console.error(errorArray);
    } else {
        console.log(resultsArray);
        guess1=resultsArray[0].label;
        guess2=resultsArray[1].label;
        speak();
        

        if (guess1=="I need help finding what it is called the camera not working") {
            document.getElementById("prediction1").innerHTML="&#128522;";
        }

        if (guess2= "I need help finding what it is called The camera not working") {
            document.getElementById("prediction2").innerHTML="&#128522;";
        }



        //I need help finding what it is called The camera not working//
    } }