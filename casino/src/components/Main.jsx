import React, { useCallback, useEffect, useState } from "react";
import PopUp from './PopUp.jsx';
import BigPopUp from './BigPopUp.jsx';

const Main = () => {
    const maxBet = 64;
    const minBet = 1;
    const betStep = 2;
    const [balance, setBalance] = useState(100);
    const [bet, setBet] = useState(1);
    const [useEffectState, setUseEffectState] = useState(false); 
    const [number, setNumber] = useState([7,8,9]);
    const [numberSecond, setNumberSecond] = useState([3,4,5]);
    const [numberThird, setNumberThird] = useState([9,8,7]);
    const [modalActive, setModalActive] = useState(false);
    const [bigpopupActive, setBigpopupActive] = useState(false);
    const win = bet * 100;
    const bigWin = bet * 500;
    const [btnClickOn, setBtnClickOn] = useState(true);
    

    const spin = () => {
        setModalActive(false);
        const spinIterationsAmount = 20;
        const startTime = 50;
        const endTime = 150;
        const step = (endTime - startTime) / spinIterationsAmount;
        const change = (column) => {
                const newColumn = [Math.floor((Math.random() * 7)) + 3, column[0], column[1]];
                return newColumn;
            }
            
        const main = (i) => {
            const wait = startTime + step * (i - 1);
            
            if(i >= spinIterationsAmount) {
                setBtnClickOn(true);
                setUseEffectState(true);
                return;
            }
            
            
            setTimeout(() => {
                setBtnClickOn(false);
                setNumber(change);
                setNumberSecond(change);
                setNumberThird(change);
                main(i + 1);
                
            }, wait)

        }

        if(balance >= bet && btnClickOn) {
            main(1);
        }
    }

    
    useEffect(() => {
        if(useEffectState) {
            winner(number[1], numberSecond[1], numberThird[1]);
            setUseEffectState(false);
        }
       
    }, [useEffectState])

    const winner = (number, numberSecond, numberThird) => {
        console.log(number, numberSecond, numberThird)
        if(number === 7 && numberSecond === 7 && numberThird === 7){
            setBigpopupActive(true);
            setBalance((balance) => balance + bigWin);
        }
        else if (number === numberSecond && number === numberThird ) {
            setBalance((balance) => balance + win);
            setModalActive(true);
            setTimeout(() => {setModalActive(false)}, 2000);
        }
        else{
            setBalance((balance) => balance - bet);
        }
    }
    
    
    return (
        <div>
            <div className="header">
                <div className="slots">

                    <div className="slots_num">
                        <h1 className="square square_back">{number[0]}</h1>
                        <h1 className="square square_back">{numberSecond[0]}</h1>
                        <h1 className="square square_back">{numberThird[0]}</h1>
                    </div>
                    <div className="slots_num">
                        <h1 className="square">{number[1]}</h1>
                        <h1 className="square">{numberSecond[1]}</h1>
                        <h1 className="square">{numberThird[1]}</h1>
                    </div>
                    <div className="slots_num">
                        <h1 className="square square_back">{number[2]}</h1>
                        <h1 className="square square_back">{numberSecond[2]}</h1>
                        <h1 className="square square_back">{numberThird[2]}</h1>
                    </div>

                    <div className="slots_btn">
                        <button className="btn" onClick={spin}>Spin</button>
                    </div>
                </div>
                <div className="win_balance">
                    <div className="win_condition">
                        <h3 className="win_condition_text">Win Condition</h3>
                        <h4 className="num">333</h4>
                        <h4 className="num">444</h4>
                        <h4 className="num">555</h4>
                        <h4 className="num">666</h4>
                        <h4 className="num">777</h4>
                        <h4 className="num">888</h4>
                        <h4 className="num">999</h4>
                    </div>
                    <div className="balance">
                        <h3 className="bet">balance: {balance}$</h3>
                        <h3 className="bet bet_down">bet: {bet}$</h3>
                        <div className="tringle_up" onClick={() => {
                            if(bet < maxBet){
                                setBet(bet * betStep);
                            }
                        }}>
                        </div>
                        <div className="tringle_down" onClick={() => {
                            if(bet > minBet) {
                                setBet(bet / betStep);
                            }
                        }}>

                        </div>
                    </div>
                </div>
            </div>

            <PopUp active={modalActive} winBet={win}/>
            <BigPopUp active={bigpopupActive} setActive={setBigpopupActive} betBigWin={bigWin}/>
        
        </div>
    )
}

export default Main
