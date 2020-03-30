 import React, { Component } from 'react';
 import Slide from 'react-reveal/Slide';
 
 class TimeUntil extends Component {
    state ={

    }
  
    render() {
         return (
           <Slide left delay={100}>  
             <div className="countdown_wrapper">
                 <div className="countdown_top">
                        Event Starts In
                 </div>
                 <div className="countdown_bottom">
                    <div className="countdown_item">
                        <div className="countdown_time">
                            21
                        </div>
                        <div className="countdown_tag">
                            Days
                        </div>
                    </div>
                    <div className="countdown_item">
                        <div className="countdown_time">
                            10
                        </div>
                        <div className="countdown_tag">
                            hs
                        </div>
                    </div>
                    <div className="countdown_item">
                        <div className="countdown_time">
                            25
                        </div>
                        <div className="countdown_tag">
                            mins
                        </div>
                    </div>
                   
                    <div className="countdown_item">
                        <div className="countdown_time">
                            2
                        </div>
                        <div className="countdown_tag">
                            sec
                        </div>
                    </div>
                 </div>
             </div>
            </Slide>

         );
     }
 }
 
 export default TimeUntil;