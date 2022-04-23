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
 model= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/wn4B4YQ0F/model.json",modelUpdate);

function modelUpdate() {
    console.log("Model is loaded ;)");
}


function guessGesture() {
    var image = document.getElementById("snapshot");
    model.classify(image,getResults);
}



function speak() {
    var speechKit= window.speechSynthesis;
    var speakThis= "I think you are holding "+guess1+" or "+guess2;
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
        

        if (guess1=="Peace") {
            document.getElementById("prediction1").innerHTML="&#9996;";
        }

        if (guess2= "Peace") {
            document.getElementById("prediction2").innerHTML="&#9996;";
        }

        if (guess1=="Down") {
            document.getElementById("prediction1").innerHTML="&#128071;";
        }

        if (guess2= "Down") {
            document.getElementById("prediction2").innerHTML="&#128071;";
        }


        if (guess1=="wave") {
            document.getElementById("prediction1").innerHTML="&#128400;";
        }

        if (guess2= "wave") {
            document.getElementById("prediction2").innerHTML="&#128400;";
        }



        //I need help finding what it is called The camera not working//
    } }