let headInput = document.getElementById('head_input');
let dataInput = document.getElementById('data_input');

let topContainer = document.getElementById('content');

let outputArray = [];
let entryList = [];

let headValue;
let dataValue;

class Entry {
    constructor(head, data, id) {
        this.head = head;
        this.data = data;
        this.id = id;
    }
}

GetDataFromLS();

document.addEventListener("keydown", function(event) {
    if (event.key !== 'Enter') return;
    console.log('Input requested by user');
    CheckChars();
} )

function CheckChars() {
    if (headInput.value.length === 0 || dataInput.value.length === 0) return;
    console.log('Chars OK');

    let currentTime = Date.now();
    let id = currentTime.toString();

    let newEntry = new Entry(headValue, dataValue, id);

    SaveToLS();
    PrintToOutput(newEntry);
}

async function GetDataFromLS(){   
    entryList = await JSON.parse(localStorage.getItem("entries"));
    if (entryList == null)
        entryList = [];

    entryList.forEach(PrintToOutput);
}

function SaveToLS() {
    let currentTime = Date.now();
    let id = currentTime.toString();

    let newEntry = new Entry(headValue, dataValue, id);

    entryList.push(newEntry);

    localStorage.setItem('entries', JSON.stringify(entryList));

    console.log(`Saved entry to LocalStorage with ID ${id}`);
}

let PrintToOutput = (entry) => {
    headValue = entry.head;
    dataValue = entry.data;
    idValue = entry.id;

    let newOutput = document.createElement('div');
    newOutput.className = 'output';
    newOutput.id = entry.id;
    let newH = document.createElement('h2');
    newH.className = 'output_h';
    let newP = document.createElement('p');
    newP.className = 'output_p';
    let newDelButton = document.createElement('button');
    newDelButton.onclick = DeleteElement;
    newDelButton.dataset.parentId = newOutput.id;
    let newSpacer = document.createElement('div');
    newSpacer.className = 'spacer_s';

    topContainer.appendChild(newOutput);
    newOutput.appendChild(newH);
    newOutput.appendChild(newP);
    newOutput.appendChild(newDelButton);
    newOutput.appendChild(newSpacer);

    newH.innerHTML = headValue;
    newP.innerHTML = dataValue;
    newDelButton.innerHTML = 'Delete';

    outputArray.push(newOutput);
}

function DeleteElement() {
    let elementToRemove = this.parentElement;
    let idToRemove = this.parentElement.id;
    elementToRemove.remove();

    console.log(idToRemove);

    let updatedEntryList = entryList.filter((o, i) => o.id !== idToRemove);
    entryList = updatedEntryList;

    console.log(entryList.length);

    localStorage.setItem("entries", JSON.stringify(entryList));
}