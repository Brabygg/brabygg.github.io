let catButton = document.getElementById('cat_button');
let usmButton = document.getElementById('usmode_button');
let comedyButton = document.getElementById('comedy_button');
let usCatsCon = document.getElementById('unsafe_cats');
let catsCon = document.getElementById('joke_cats');
let output = document.getElementById('output');

let usmEnabled;
let catsEnabled;

let requestAddress;

function USMClick() {
    if (usmEnabled) {
        usmEnabled = false;
        usCatsCon.hidden = true;
        comedyButton.innerHTML = 'Be Amazed';
    } else {
        usmEnabled = true;
        usCatsCon.hidden = false;
        comedyButton.innerHTML = 'Be Disappointed';
    }
}
function CatClick() {
    if (catsEnabled) {
        catsEnabled = false;
        catsCon.hidden = true;
    } else {
        catsEnabled = true;
        catsCon.hidden = false;
    }
}

function ReadCategories() {
    if (!catsEnabled) {
        requestAddress = requestAddress + 'Any';
        return;
    }
    if (m.checked)
        requestAddress = requestAddress + 'Misc';
    if (pr.checked)
        requestAddress = requestAddress + 'Programming';
    if (d.checked)
        requestAddress = requestAddress + 'Dark';
    if (pu.checked)
        requestAddress = requestAddress + 'Pun';
    if (sp.checked)
        requestAddress = requestAddress + 'Spooky';
    if (c.checked)
        requestAddress = requestAddress + 'Christmas';
}

function ReadUnsafeCategories() {
    if (!usmEnabled) {
        requestAddress = requestAddress + '?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';
        return;
    }
    if (!n.checked || !re.checked || !p.checked || !r.checked || !s.checked)
        requestAddress = requestAddress + '?blacklistflags=';
    if (!n.checked)
        requestAddress = requestAddress + 'nsfw';
    if (!re.checked)
        requestAddress = requestAddress + 'religious';
    if (!p.checked)
        requestAddress = requestAddress + 'political';
    if (!r.checked)
        requestAddress = requestAddress + 'racist';
    if (!s.checked)
        requestAddress = requestAddress + 'sexist';
    return;
}

function GetJoke() {

    requestAddress = 'https://v2.jokeapi.dev/joke/'

    ReadCategories();
    ReadUnsafeCategories();

    console.log(requestAddress);

    fetch(
        requestAddress,
        {
            method: "GET",
            headers: new Headers({
                Accept: "application/json"
            })
        }
    )
        .then(res => res.json())
        .then(response => {
            
            let joke = "Balls. (this isn't actually a joke, and there's been an error for some reason)";

            if (response.type = 'twopart') {
                joke = response.setup + " " + response.delivery;
            } else {
                joke = response.joke;
            }

            output.innerHTML = joke;
            console.log(response.id);

            
        })
        .catch(error => console.log(error));
}