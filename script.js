let id = 2

function addDice(num) {
    let diceArea = document.getElementById('dice-area')
    let newDice = document.createElement('div')
    newDice.setAttribute('class','card')

    switch (num) {
        case 20:
            id++
            newDice.innerHTML = `<label>dice d20</label>
<button id="d20-${id}" onclick="roll(20, this.id)" class="d20">d20</button><h1>-</h1>`
            diceArea.append(newDice)
            break;
        case 6:
            id++
            newDice.innerHTML = `<label>dice d6</label>
<button id="d6-${id}" onclick="roll(6, this.id)" class="d6">d6</button><h2>-</h2>`
            diceArea.append(newDice)
            break;
    }
}

function roll(num, id) {
    let res = Math.ceil(Math.random() * num)
    let domRes = document.getElementById(id).nextSibling
    domRes.innerHTML = String(res)
    return res
}

function clearAll(){
    let listH1 = document.getElementsByTagName('h1')
    let listH2 = document.getElementsByTagName('h2')
    for (let item of listH1){
        item.innerHTML = "-"
    }
    for (let item of listH2){
        item.innerHTML = "-"
    }
}