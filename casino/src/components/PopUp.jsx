import React from 'react'

const PopUp = ({active, winBet}) => {
  return (
    <div className={active ? 'modal active' : 'modal'}>
      <div className="modal_content">
          <h1 className="modal_text">
            Congratulations!
          </h1>
          <h1 className="modal_text_second">
            You win {winBet}$
          </h1>
      </div>
      
    </div>
  )
}

export default PopUp
