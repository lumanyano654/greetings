const theText = document.querySelector(".textbox");
const theButton = document.querySelector(".button");
const radioButton = document.querySelector(".radioButton");
const resultBox = document.querySelector(".return")



var name = "";
// var nameTyped = "hello , " + name


function greet() {

    var nameEntered = theText.value;
    var errorname = nameEntered == "";
    var language = document.querySelector("input[name='radioButton']:checked");
//    alert(nameEntered === "")
    //var langEntered = language;

    if (nameEntered === "" && language.value === null){

        resultBox.innerHTML = "please enter name and select language!!!"
    }

   else if (language.value === "isixhosa") {
        resultBox.innerHTML = "Molo, " + nameEntered;

     }

    else if (language.value === "english"){
        resultBox.innerHTML = "Hello, " + nameEntered
    }

    else if (language.value=== "afrikaans"){
        resultBox.innerHTML = "Halo, " + nameEntered
    }
    
    

    // resultBox.innerHTML = "Molo, " + nameEntered;

    // theText.innerHTML = name
    // resultBox.innerHTML = nameTyped
}
theButton.addEventListener("click", greet);

//alert(greet())
