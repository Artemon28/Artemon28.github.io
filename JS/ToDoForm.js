// // function docReady(fn) {
// //     // see if DOM is already available
// //     if (document.readyState === "complete" || document.readyState === "interactive") {
// //         // call on next available tick
// //         setTimeout(fn, 1);
// //     } else {
// //         document.addEventListener("DOMContentLoaded", fn);
// //     }
// // }
//
// function addLine() {
//
//     let input = document.createElement('input');
//     input.id = "lastLine"
//     lastLine.id = "oldLine"
//     input.placeholder = "Новая задача"
//     lastLine.after(input)
// }
//
// function makeForm() {
//     let input1 = document.createElement('input');
//     input1.placeholder = "Новая задача"
//
//     let div = document.createElement('div');
//     div.className = "alert";
//     div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
//
//
//     var form = document.getElementsByClassName("new-lines")[0];
//     form.append(input1);
//
//     input1.onsubmit = makeForm;
//     input1.on
//     // input1.onclick = makeForm;
// }
//
// function loadedFunctions(){
//     let lastLine = document.getElementById("lastLine");
//     lastLine.onsubmit = addLine;
// }
//
// // docReady(loadedFunctions);
//
// window.onload = loadedFunctions
//
//
//
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('foo');
//     }, 300);
// });
//
// promise1.then((value) => {
//     console.log(value);
//     // expected output: "foo"
// });
//
// console.log(promise1);

function getNumber(string) {
    if (string[string.length - 1] === 'd')
        return string.slice(0, -1);
    else
        return string;
}

var count = 0;

function oldTasks() {
    let keys = Object.keys(localStorage);
    keys.sort(function(a, b) {
        return getNumber(a) - getNumber(b);
    });
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        let lineValue = localStorage.getItem(key);
        newLine(lineValue, key);
        count = getNumber(key)
    }
}
window.onload = oldTasks
var close = document.getElementsByClassName("close");

function newElement(temp) {
    var inputValue = document.getElementById("myInput").value;
    if (inputValue === '') {
        alert("Вы должны что-то написать!");
    } else {
        count++;
        localStorage.setItem(count, inputValue);
        newLine(inputValue, count);
    }
}

function newLine(value, key) {
    var li = document.createElement("li");
    li.className = "taskLine"
    li.appendChild(document.createElement("p").appendChild(document.createTextNode(value)));
    document.getElementById("myUL").appendChild(li);
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("|X|");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    if (key[key.length - 1] === 'd')
        li.style.textDecoration = "line-through";

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let line = this.parentElement;
            let keys = Object.keys(localStorage);
            keys.sort();
            for (let i = 0; i < keys.length; i++) {
                let key = keys[i];
                if (localStorage.getItem(key) === line.childNodes[0].data) {
                    // if (key.length <= 1) {
                    if (key[key.length - 1] !== "d") {
                        line.style.textDecoration = "line-through";
                        localStorage.removeItem(key);
                        localStorage.setItem(key + "d", line.childNodes[0].data);
                    } else {
                        line.style.textDecoration = "none";
                        localStorage.removeItem(key);
                        localStorage.setItem(getNumber(key), line.childNodes[0].data);
                    }
                }
            }
        }
    }
}