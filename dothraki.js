var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var lingoOutput = document.querySelector("#lingo-output");
var serverUrl = "https://api.funtranslations.com/translate/dothraki.json";

function getUrlTranslation(txtInput) {

    return serverUrl + "?" + "text= " + txtInput;
}

function ifErrorHappens(error) {
    console.log("erroer occured" , error);
    alert("problem occurred, please try after some time");
}

function clickHandler() {

    var inputTxt = txtInput.value ;
    fetch (getUrlTranslation(inputTxt))
    .then (response => response.json())
    .then (json => { 
        var translatedOutputText = json.contents.translated ;
        lingoOutput.innerText = translatedOutputText; 
     }) 
    .catch(ifErrorHappens)

};

btnTranslate.addEventListener("click", clickHandler)

