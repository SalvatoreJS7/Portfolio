let fieldArr;
let fieldNum;
let gameNum;
let saveNum;
const messageTagID = 'statusMessage';


function integerDivision (num, divider) {
    return Math.trunc(num / divider);
}


function renderView () {
    for(let position = 0; position < fieldArr.length**2; position++) {
        const i = integerDivision(position, fieldArr.length);
        const j = position % fieldArr.length;
        const sym = fieldArr[i][j];
        const tag = document.querySelector(`#item${position}`);
        tag.textContent = sym;
    }
}


function initHTML() {
    clearBody();
    const body = document.querySelector('body');
    const btn = document.createElement('buttton');
    const itemBtn = document.createElement('div');
    body.appendChild(itemBtn);
    itemBtn.appendChild(btn);
    itemBtn.style = 'text-align: center; padding: 15px 0';
    btn.style = "padding: 10px 10px; font-size: 30px; background-color: gray; border: 2px solid black; color: white; cursor: pointer; text-transform: uppercase";
    btn.textContent = 'обновить игру';
    btn.id = 'open_pop_up';
    
    createFieldArr();
    createFieldNum();

    const msgTag = document.createElement('h1');
    msgTag.id = messageTagID;
    document.body.appendChild(msgTag);
    msgTag.style = 'font-size: 60px; text-align: center; margin-top: 40px';
}


function createFieldArr () {
    const body = document.querySelector('body');
    const item = document.createElement('div');
    body.appendChild(item);
    item.style = "display: flex; flex-direction: column; margin-top: 200px; align-items:center; position: relative;";
    const itemh1 = document.createElement('div');
    item.appendChild(itemh1);
    let indexItem = 0;
    for(let index = 0; index < fieldArr.length; index++) {  
        const itemIn = document.createElement('div');
        itemh1.appendChild(itemIn); 
        itemIn.style="display: flex;"
        for(let indexIn = 0; indexIn < fieldArr.length; indexIn++, indexItem++) {
            const h1 = document.createElement('h1');
            itemIn.appendChild(h1);
            h1.style = "width: 80px; height: 80px; border: 2px solid black; text-align: center; font-size: 80px;";
            h1.id = `item${indexItem}`;
            h1.onclick = h1Click;
        }
    }
}


function createFieldNum () {
    const body = document.querySelector('body');
    const item = document.createElement('div');
    const itemh2 = document.createElement('div');
    body.appendChild(item);
    item.appendChild(itemh2);
    let indexItemNum = 0;
    for(let index = 0; index < fieldNum.length; index++){
        const itemNum = document.createElement('div');
        itemh2.appendChild(itemNum);
        itemh2.style = 'position: absolute;';
        itemNum.style = 'display: flex;';
        for(let indexIn = 0; indexIn < fieldNum.length; indexIn++, indexItemNum++){
            const h2 = document.createElement('h1');
            itemNum.appendChild(h2);
            h2.style = "width: 84px; height: 84px; text-align: center; font-size: 80px; display: none";
            h2.id = `itemNum${indexItemNum}`; 
        }
    }
}


function setUserMsg (userMsg) {
    const msgTag = document.querySelector(`#${messageTagID}`);
    msgTag.textContent = userMsg; 
}


function winner () {
    if(Math.ceil(fieldNum.length**2 / 2) === saveNum.length) {
        return true;
    }
}


function addColorRed () {
    let position = 0;
        for(let index = 0; index < fieldArr.length; index++){
            for(let indexIn = 0; indexIn < fieldArr.length; indexIn++, position++){
                if(fieldArr[index][indexIn] === 'X') {
                    const h1Red = document.querySelector(`#item${position}`);
                    h1Red.style = "width: 80px; height: 80px; border: 2px solid black; text-align: center; font-size: 80px; background-color: red";
                }
            }
        }
}


function addColorLime () {
    let position = 0;
    for(let index = 0; index < fieldArr.length; index++){
        for(let indexIn = 0; indexIn < fieldArr.length; indexIn++, position++){
            if(fieldArr[index][indexIn] === gameNum[0]) {
                const h1Green = document.querySelector(`#item${position}`);
                h1Green.style = "width: 80px; height: 80px; border: 2px solid black; text-align: center; font-size: 80px; background-color: lime";
            }
        }
    }
}


function h1Click(e) {
    const tagIndex = Number(e.target.id.slice(4));
    const i = integerDivision(tagIndex, fieldArr.length);
    const j = tagIndex % fieldArr.length;

    if(winner()){
        return;
    }
    if(fieldArr[i][j] !== ''){
        setUserMsg('Походите снова');
        return false;
    }
    else{
        setUserMsg('');
    }
    fieldArr[i][j] = fieldNum[i][j];
    gameNum.push(fieldArr[i][j]);
    if(gameNum[0] === 'X') {
        addColorRed();
        gameNum.splice(0,1);
    }
    if(gameNum[1] === 'X') {
        addColorRed();
        gameNum.splice(1,1);
    }
    if(gameNum.length === 2) {
        if(gameNum[0] !== gameNum[1]) {
            for(let index = 0; index < fieldArr.length; index++){
                for(let indexIn = 0; indexIn < fieldArr.length; indexIn++){
                    if(fieldArr[index][indexIn] !== '' && !saveNum.includes(fieldArr[index][indexIn])) {
                        setTimeout(() => {
                            fieldArr[index][indexIn] = '';
                            renderView();
                        }, 300);
                    }
                }
            }
            gameNum.splice(0,2);
        }
        else{
            addColorLime();
            saveNum.push(gameNum[0]);
            gameNum.splice(0,2);
        }
    }
    renderView();
    if(winner()) {
        setUserMsg('Вы великолепны');
    }
}


function clearBody () {
    const body = document.querySelector('body');
    const bodyElements = Array.from(body.children);
    console.log(body.children);
    for(let index = 0; index < bodyElements.length; index++) {
        if (bodyElements[index].tagName.toLowerCase() !== 'script' && bodyElements[index].id !== 'pop_up') {
            bodyElements[index].remove(); 
        }
    }
}


function createNum (fieldNum) {
    let number = 1;
    for(let index = 0; index < fieldNum.length; index++){
        for(let indexIn = 0; indexIn < fieldNum.length; indexIn++, number++) {
            if(number < Math.ceil(fieldNum.length**2 / 2)) {
                fieldNum[index][indexIn] = String(number);
            }
            else{
                number = 1;
                fieldNum[index][indexIn] = String(number);
            }
        }
    }

    if(fieldNum.length**2 % 2 !== 0) {
        fieldNum[fieldNum.length - 1][fieldNum.length - 1] = 'X';
    }
    else{
        fieldNum[fieldNum.length - 1][fieldNum.length - 1] = 'X';
        fieldNum[fieldNum.length - 1][fieldNum.length - 2] = 'X';
    }
}


function randomNum(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = arr[i].length - 1; j > 0; j--) {
            const randomI = Math.floor(Math.random() * (i + 1));
            const randomJ = Math.floor(Math.random() * (j + 1));
            [arr[i][j], arr[randomI][randomJ]] = [arr[randomI][randomJ], arr[i][j]];
        }
    }
}


function showPopUp() {
    const openPopUp = document.getElementById('open_pop_up');
    const closePopup = document.getElementById('pop_up_close');
    const closePopupX = document.querySelector('#pop_up_btn_close');
    const popUp = document.getElementById('pop_up');
    const popUpBtn = document.getElementById('pop_up_btn');
    popUpBtn.onclick = main;
    openPopUp.addEventListener('click', function(e){
        e.preventDefault();
        popUp.classList.add('active');
    })
    closePopup.addEventListener('click', () => {
        popUp.classList.remove('active');
    })
    popUpBtn.addEventListener('click', () => {
        popUp.classList.remove('active');
    })
    closePopupX.addEventListener('click', () => {
        popUp.classList.remove('active');
    })
}


function main() {
    fieldArr = [['','','','',''], ['','','','',''], ['','','','',''], ['','','','',''], ['','','','','']];
    fieldNum = [['','','','',''], ['','','','',''], ['','','','',''], ['','','','',''], ['','','','','']];
    gameNum = [];
    saveNum = ['X'];
    initHTML();
    showPopUp();
    setUserMsg('Начать игру');
    createNum(fieldNum);
    randomNum(fieldNum);
}


main();
