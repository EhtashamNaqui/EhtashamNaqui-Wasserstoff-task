import React from "react";
import { Hexmap, Iconcrown, Icontrend, Sidearrowright, Vectorpurchasechart } from "../../assets";
import "./PurchasePage.css";
import { TimeLine } from '../../components'

const PurchasePage = () => {
  return (
    <header>
      <div className="wrapper">
        <div className="wrapper-full">
        <div className="wrapper-left">
          <div className="cta">
            <p className="data-page">WSTF FRONT-END HACKATHON</p>
            <div className="user-text">
              <h1>All users</h1>
              <div className="detail">Details</div>
              <img src={Sidearrowright} className="side-arrow"></img>
            </div>
            
            <div className="buttonx">
            <div className="all-btn">
              <div className="earn-btn1">
              <div className="square1">
              <img src={Icontrend} className="trend"></img>
              </div>
              <div className="textbox-btn">
                <a href="#" className="text-btn">
                  Total earning
                </a>
                <p>540,549</p>
                </div>
                </div>
              
              <div className="earn-btn2">
              <div className="square2">
              <img src={Iconcrown} className="crown"></img>
              </div>
              <div className="textbox-btn">
                <a href="#" className="text-btn">
                  Sales
                </a>
                <p>540,549</p>
                </div>
                </div>
                
              
              <div className="earn-btn3">
              <div className="square3">
              <img src={Vectorpurchasechart} className="purchase-chart"></img>
                </div> 
              <div className="textbox-btn">
                <a href="#" className="text-btn">
                  Purchase
                </a>
                <p>540,549</p>
                </div>
                </div>
                
              
            </div>
                <h2>2,431,340</h2>
          </div>
        </div>
        <div className="wrapper-right">
          <img src={Hexmap} className="hexmap"></img>
        </div>
        </div>
        </div>
      <TimeLine/>
      </div>
    </header>
  );
};

export default PurchasePage;
