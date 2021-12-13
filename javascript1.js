
// let count = 50;
// count = count + 50;
// count = count - 25;


// document.getElementById("header").innerText = count;



let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let errorParagraph = document.getElementById("error");

let count = 0;
console.log(saveEl);
function increment () {
    count += 1
   countEl.textContent = count;

}
function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
   
}
function purchase() {
    errorParagraph.textContent="something went wrong please try again "
}
