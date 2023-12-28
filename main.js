function startClassification() {

navigator.mediaDevices.getUserMedia({ audio: true});
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/j-mFxpfM7/model.jsol', modelReady);


}

function modelReady(){
    classifier.classify(gotResults);
}