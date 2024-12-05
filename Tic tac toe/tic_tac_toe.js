let fieldArr;
let player;
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
    const item = document.createElement('div');
    const btn = document.createElement('buttton');
    const itemBtn = document.createElement('div');
    body.appendChild(itemBtn);
    itemBtn.appendChild(btn);
    itemBtn.style = 'text-align: center; padding: 15px 0';
    btn.style = "padding: 10px 10px; font-size: 30px; background-color: gray; border: 2px solid black; color: white; cursor: pointer; text-transform: uppercase";
    btn.textContent = 'обновить игру';
    btn.id = 'open_pop_up';
    
    item.style = "display: flex; flex-direction: column; margin-top: 200px; align-items:center;";
    body.appendChild(item);
    let indexItem = 0;
    for(let index = 0; index < fieldArr.length; index++) {
        const itemIn = document.createElement('div');
        item.appendChild(itemIn); 
        itemIn.style="display: flex;"
        for(let indexIn = 0; indexIn < fieldArr.length; indexIn++, indexItem++) {
            const h1 = document.createElement('h1');
            itemIn.appendChild(h1); 
            h1.style = "width: 80px; height: 80px; border: 2px solid black; text-align: center; font-size: 80px;";
            h1.id = `item${indexItem}`;
            h1.onclick = h1Click;
        }
    }

    // init user status message tag
    const msgTag = document.createElement('h1');
    msgTag.id = messageTagID;
    document.body.appendChild(msgTag);
    msgTag.style = 'font-size: 60px; text-align: center; margin-top: 40px';

}


function setUserMsg (userMsg) {
    const msgTag = document.querySelector(`#${messageTagID}`);
    msgTag.textContent = userMsg; 
}


function draw() {
    let counter = 0;
    for(let index = 0; index < fieldArr.length; index++) {
        for(let indexIn = 0; indexIn < fieldArr.length; indexIn++) {
            if(fieldArr[index][indexIn] !== '') {
                counter += 1;
                if(counter === fieldArr.length**2) {
                    setUserMsg('Ничья');
                    break;
                }
            }
    }
    }
}


function isDraw() {
    if (winner(fieldArr)[0]) {
        return false;
    }
    let isFieldFull = true;
    for (line of fieldArr) {
        isFieldFull &&= !line.includes('');
    }
    return isFieldFull;
}


function h1Click(e) {
    const tagIndex = Number(e.target.id.slice(4));
    const i = integerDivision(tagIndex, fieldArr.length);
    const j = tagIndex % fieldArr.length;
    if(winner(fieldArr)[0] || isDraw()) {
        return;
    }
    if(fieldArr[i][j] !== ''){
        setUserMsg(`Походите снова ${player}`);
        return false;
    }
    fieldArr[i][j] = player;
    player = player === 'X' ? '0' : 'X';
    renderView();
    const result = winner(fieldArr);
    if(result[0]){
        setUserMsg(`Победитель ${result[1]}`);
    } 
    else{
        setUserMsg(`Ход игрока ${player}`);
    }
    if (isDraw()) {
        setUserMsg('Ничья');
    }
}
  
  
function move (moveArr, position, player) {
  if (position < 1 || position > moveArr.length ** 2) {
    console.log('you asshole');
    return false;
  }
  const i = integerDivision((position - 1), moveArr.length);
  const j = (position - 1) % moveArr.length;
  if (moveArr[i][j] !== '_') {
    console.log('you asshole(reserved)');
    return false;
  }
  moveArr[i][j] = player;
  return true;
}



function winner (fieldArr) {

  for(let index = 0; index < fieldArr.length; index++) {
      let winnerX = 0;
      let winner0 = 0;
      for(let indexIn = 0; indexIn < fieldArr[index].length; indexIn++) {
          if(fieldArr[index][indexIn] === 'X') {
              winnerX += 1;
          }
          else if(fieldArr[index][indexIn] === '0') {
              winner0 += 1;
          }
      if(winnerX === fieldArr[index].length) {
          return [true, 'X'];
      }
      if(winner0 === fieldArr[index].length) {
          return [true, '0'];
      }
      }
  }

  for(let index = 0; index < fieldArr.length; index++) {
      let winnerX = 0;
      let winner0 = 0;
      for(let indexIn = 0; indexIn < fieldArr[index].length; indexIn++) {
          if(fieldArr[indexIn][index] === 'X') {
              winnerX += 1;
          }
          else if(fieldArr[indexIn][index] === '0') {
              winner0 += 1;
          }
      if(winnerX === fieldArr[index].length) {
          return [true, 'X'];
      }
      if(winner0 === fieldArr[index].length) {
          return [true, '0'];
      }
      }
  }

  let winnerDiagX = 0;
  let winnerDiag0 = 0;
  let winnerDiagEndX = 0;
  let winnerDiagEnd0 = 0;
  for(let index = 0; index < fieldArr.length; index++) {
      if(fieldArr[index][index] === 'X') {
          winnerDiagX += 1
      }
      else if(fieldArr[index][index] === '0') {
          winnerDiag0 += 1
      }
  }
  for(let index = 0; index < fieldArr.length; index++) {
      if(fieldArr[index][fieldArr.length - 1 - index] === 'X') {
          winnerDiagEndX += 1
      }
      else if(fieldArr[index][fieldArr.length - 1 - index] === '0') {
          winnerDiagEnd0 += 1
      }
  }
  if(winnerDiagX === fieldArr.length || winnerDiagEndX === fieldArr.length) {
          return [true, 'X'];
  }
  if(winnerDiag0 === fieldArr.length || winnerDiagEnd0 === fieldArr.length) {
          return [true, '0'];
  }

  
  return [false, null];
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
    fieldArr = [['','',''], ['','',''], ['','','']];
    player = 'X';
    initHTML();
    setUserMsg('Ход игрока X');
    showPopUp();
}


main();






