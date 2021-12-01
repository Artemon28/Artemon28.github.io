let promiseCount = 0;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

function randomize(data){
    let randInt
    if (promiseCount < data.length){
        randInt = getRandomInt(data.length / 2, data.length);
    }
    else {
        randInt = getRandomInt(0, data.length);
    }
    promiseCount++;
    return data[randInt];
}

localStorage.clear()

function serialize(data){
    let userinfo = [];
    userinfo[0] = data['username'];
    userinfo[1] = data['name'];
    userinfo[2] = data['email'];
    userinfo[3] = data['address']['city'];
    userinfo[4] = data['phone'];
    userinfo[5] = data['website'];
    userinfo[6] = data['company']['name'];
    return userinfo;
}

function testPromise() {
    let testPromisee = document.getElementById("log");
    let gifLoad = document.createElement("img");
    gifLoad.id = "gif";
    gifLoad.src = "../content/loadGIF3.gif";
    testPromisee.appendChild(gifLoad);
    let p1 = new Promise(async (resolve, reject) => {
        let url = `https://jsonplaceholder.typicode.com/users`;
        let response = await fetch(url);
        if (response.ok) {
            let commits = await response.json();
            commits = randomize(commits);
            let userData = serialize(commits);
            resolve(userData);
        } else {
            reject(new Error("too long waiting"));
        }

    });
    p1.then(function(val) {
        let child = document.getElementById("gif");
        testPromisee.removeChild(child);
        let card = document.getElementById("userCard");
        var clone = card.content.cloneNode(true);
        for (i = 1; i <= val.length; i++){
            clone.childNodes[1].childNodes[i * 4 - 1].textContent = val[i - 1];
        }
        testPromisee.appendChild(clone);
    }).catch((reason) => {
        let child = document.getElementById("gif");
        testPromisee.removeChild(child);
        let errormessage = document.createElement("p");
        errormessage.textContent = `Something like this: (${reason}) went wrong`;
        testPromisee.appendChild(errormessage);
    });
}

document.addEventListener('DOMContentLoaded', LoadPromise, false);

async function LoadPromise() {
    let btn = document.getElementById("make-promise");
    btn.addEventListener("click", testPromise);
}