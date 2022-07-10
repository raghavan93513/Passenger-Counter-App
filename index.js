let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let resetEl = document.getElementById("reset-el")
let saveretEl = document.getElementById("savere-el")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    let savevar = count + " - "
    saveEl.textContent += savevar
}

function reset() {
    countEl.innerText = 0
    count = 0
    saveEl.textContent = "Previous Entries: "
}

function savere() {
    let savevar = count + " - "
    saveEl.textContent += savevar
    countEl.innerText = 0
    count = 0
}
