// const spin = () => {
//     setModalActive(false);
//     let counter = 0;
//     const spinIterationsAmount = 10;
//     if(intervalId === 0 && balance >= bet) {
            
//         setInterval(() => {
//             if (counter < 3) {
//                 const newNumber = Math.floor((Math.random() * 7)) + 3;
//                 const newNumberSecond = Math.floor((Math.random() * 7)) + 3;
//                 const newNumberThird = Math.floor((Math.random() * 7)) + 3;
//                 setNumber(newNumber);
//                 setNumberSecond(newNumberSecond);
//                 setNumberThird(newNumberThird);
//                 counter += 1;
//                 setIntervalId(interval);
//             } 
//         },40);

//         setInterval(() => {
//             if (counter < 5) {
//                 const newNumber = Math.floor((Math.random() * 7)) + 3;
//                 const newNumberSecond = Math.floor((Math.random() * 7)) + 3;
//                 const newNumberThird = Math.floor((Math.random() * 7)) + 3;
//                 setNumber(newNumber);
//                 setNumberSecond(newNumberSecond);
//                 setNumberThird(newNumberThird);
//                 counter += 1;
//                 setIntervalId(interval);
//             } 
//         },80);

//         setInterval(() => {
//             if (counter < 8) {
//                 const newNumber = Math.floor((Math.random() * 7)) + 3;
//                 const newNumberSecond = Math.floor((Math.random() * 7)) + 3;
//                 const newNumberThird = Math.floor((Math.random() * 7)) + 3;
//                 setNumber(newNumber);
//                 setNumberSecond(newNumberSecond);
//                 setNumberThird(newNumberThird);
//                 counter += 1;
//                 setIntervalId(interval);
//             } 
//         },120);

//         const interval = setInterval(() => {
//             const newNumber = Math.floor((Math.random() * 7)) + 3;
//             const newNumberSecond = Math.floor((Math.random() * 7)) + 3;
//             const newNumberThird = Math.floor((Math.random() * 7)) + 3;
//             setNumber(newNumber);
//             setNumberSecond(newNumberSecond);
//             setNumberThird(newNumberThird);
//             counter += 1;
//             setIntervalId(interval);
            
//             if (counter >= spinIterationsAmount) {
//                 clearInterval(interval);
//                 setIntervalId(0);
//                 // setUseEffectState(useEffectState + 1)
//                 winner(newNumber, newNumberSecond, newNumberThird);
//             }
            
//         },200)
//     }
// }


let num = 1;

function time (x) {
    let delay = 100;
 setTimeout(() => {
  if (x < 11) {
    console.log(x);
    time(x + 1);
 }
 }, delay + 100 * x)
}

time(num)


const spin = () => {
    setModalActive(false);
    let counter = 0;
    const spinIterationsAmount = 10;
    if(intervalId === 0 && balance >= bet) {

        const interval = setTimeout(() => {
            const newNumber = [Math.floor((Math.random() * 7)) + 3, number[0], number[1]];
            const newNumberSecond = [Math.floor((Math.random() * 7)) + 3, numberSecond[0], numberSecond[1]];
            const newNumberThird = [Math.floor((Math.random() * 7)) + 3, numberThird[0], numberThird[1]];
            setNumber(newNumber);
            setNumberSecond(newNumberSecond);
            setNumberThird(newNumberThird);
            counter += 1;
            setIntervalId(interval);
            
            if (counter >= spinIterationsAmount) {
                clearTimeout(interval);
                setIntervalId(0);
                // setUseEffectState(useEffectState + 1)
                winner(newNumber[1], newNumberSecond[1], newNumberThird[1]);
            }
            
        }, 100)
    }
}


// const spin = () => {
//     setModalActive(false);
//     const spinIterationsAmount = 20;
//     const startTime = 50;
//     const endTime = 200;
//     const step = (endTime - startTime) / spinIterationsAmount;
//     if(intervalId === 0 && balance >= bet) {

//         const change = () => {
//             setNumber([Math.floor((Math.random() * 7)) + 3, number[0], number[1]]);
//             setNumberSecond([Math.floor((Math.random() * 7)) + 3, numberSecond[0], numberSecond[1]]);
//             setNumberThird([Math.floor((Math.random() * 7)) + 3, numberThird[0], numberThird[1]]);
//         }

//         const main = (i) => {
//             const wait = startTime + step * (i - 1);
            
//             const interval = setTimeout(() => {
//                 change();
//                 main(i + 1);
//                 setIntervalId(interval);
            
//             }, wait)
            
//             if(i >= spinIterationsAmount) {
//                 clearTimeout(interval);
//                 setIntervalId(0);
//                 // return;
//             }
//         }

//         main(1)

       
//     }
// }