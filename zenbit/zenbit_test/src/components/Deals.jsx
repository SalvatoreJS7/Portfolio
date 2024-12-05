import React from 'react'

const Deals = () => {
  return (
    <div className='container' id='deal'>
      <div className="deals-title">Open Deals</div>
      <div className="deals">
        <div className="deals_img">
          <img src={require("./img/deals1.png")} alt="" className="deals_image"/>
          <div className="deals-text">
            <h2 className="deals_name">The Marina Torch</h2>
            <div className="deals_price_list">
              <div className="deals_price">
                <h3 className="price">6 500 000 Dhs</h3>
                <h3 className="price">Tiket - 60 000 Dhs</h3>
              </div>
              <div className="deals_price">
                <h3 className="price">Yield 9.25%</h3>
                <h3 className="price">Days left 150 </h3>
              </div>
              <div className="deals_price">
                <h3 className="price">Sold 75%</h3>
              </div>
            </div>
          </div>
        </div>
        
        <div className="deals_img">
          <img src={require("./img/deals2.png")} alt="" className="deals_image"/>
          <div className="deals-text">
            <h2 className="deals_name">HHHR Tower</h2>
            <div className="deals_price_list">
              <div className="deals_price">
                <h3 className="price">6 500 000 Dhs</h3>
                <h3 className="price">Tiket - 60 000 Dhs</h3>
              </div>
              <div className="deals_price">
                <h3 className="price">Yield 9.25%</h3>
                <h3 className="price">Days left 150 </h3>
              </div>
              <div className="deals_price">
                <h3 className="price">Sold 75%</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="deals_img">
          <img src={require("./img/deals3.png")} alt="" className="deals_image"/>
          <div className="deals-text">
            <h2 className="deals_name">Ocean peaks</h2>
            <div className="deals_price_list">
              <div className="deals_price">
                <h3 className="price">6 500 000 Dhs</h3>
                <h3 className="price">Tiket - 60 000 Dhs</h3>
              </div>
              <div className="deals_price">
                <h3 className="price">Yield 9.25%</h3>
                <h3 className="price">Days left 150 </h3>
              </div>
              <div className="deals_price">
                <h3 className="price">Sold 75%</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="deals_img">
          <img src={require("./img/deals4.png")} alt="" className="deals_image"/>
          <div className="deals-text">
            <h2 className="deals_name">Al Yaqoub Tower</h2>
            <div className="deals_price_list">
              <div className="deals_price">
                <h3 className="price">6 500 000 Dhs</h3>
                <h3 className="price">Tiket - 60 000 Dhs</h3>
              </div>
              <div className="deals_price">
                <h3 className="price">Yield 9.25%</h3>
                <h3 className="price">Days left 150 </h3>
              </div>
              <div className="deals_price">
                <h3 className="price">Sold 75%</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Deals
