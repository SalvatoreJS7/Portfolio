import React from 'react'

const BigPopUp = ({active, setActive, betBigWin}) => {
  return (
    <div className={active ? "pop_up active" : 'pop_up'}>
        <div className="pop_up_container">
            <div className="pop_up_body">
                <h1 className="pop_up_text">Mega Win</h1>
                <h1 className="pop_up_text"></h1>
                <h1 className="pop_up_text">{betBigWin}$</h1>
                <button className="pop_up_close" onClick = {() => {setActive(false)}}>X</button>
            </div>
        </div>
    </div>
  )
}

export default BigPopUp
