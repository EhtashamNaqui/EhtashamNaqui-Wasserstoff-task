import React from 'react'
import { Graph } from '../../assets'
import "./TimeLine.css"

const TimeLine = () => {
  return (
    
    <div className='timeline'>

    <div className="graph">
    <img src={Graph} className="bar-graph"></img>
        <div className="sale-fig">
    <p>Sales Figures</p> <h1>$10, 430</h1>
    </div>
    <div className="chart">
    {Array.from({length: 72}, (_, i) => (
        <div className={`column${i+1}`} />
    ))}
    </div>
    <Line/>
    </div>
    </div>

    
    

    
  )
}

export default TimeLine

function Info2 (props) {
     const { spanText1, spanText2 } = props;
     
return (
    <div className="info">
         <div className="value">
             <div className="value-1">
             <div className="title roboto-normal-astronaut-14px">
                <span className="roboto-normal-astronaut-14px">{spanText1}</span>
                </div>

                <div className="value-2 poppins-semi-bold-astronaut-22px">
                <span className="poppins-semi-bold-astronaut-22px">{spanText2}</span>
                    </div>
                </div>
            </div>
        </div>
    );
    }

    function Line() {
        return (

            <div className="line">
            
            <div className="overlap-group">
                 <div className="yellow-line"></div>
                 <div className="red-line"></div>
                 <div className="purple-line"></div>
            
            </div>
            </div>
        );
    }