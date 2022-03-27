let count = 0;
let countEl = document.getElementById("count")
let saveEl = document.querySelector("#save-el")

function incrementBtn() {
    count++
    countEl.innerText = count;
}


function save() {
    let msg = count + " - ";
    saveEl.innerHTML += msg
    countEl.innerText = 0
    count = 0

    

}

// save();



