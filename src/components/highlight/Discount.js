import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../utils/MyButton';



class Discount extends Component {
    state ={
        discountStart:0,
        discountEnd:30
    }

    porcentage=()=>{
    
        if(this.state.discountStart<this.state.discountEnd){
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }

    componentDidUpdate(){
        setTimeout(()=>{
            this.porcentage()
        },30)
    } 

    render() {
        return (
                
                <div className="center_wrapper">
                    <div className="discount_wrapper"> 
                        <Fade
                            onReveal={()=>this.porcentage()} 
                            >
                            <div className="discount_porcentage">
                                <span>{this.state.discountStart}% </span>
                                <span>OFF </span>
                            </div>
                    
                        </Fade>
                        <Slide right>
                            <div className="discount_description">
                                <h3>Purchase the tickets before April 31st </h3>
                                <p> Tour of Anoushka is very rare and enjoyable moments ofcourse with some discount hurry up and get your tickets</p>
                                <MyButton

                                            text="Purchase Tickets"
                                            bck="#ffa800"
                                            color="#ffffff"
                                            link="https://www.anoushkashankar.com/" 
                                
                                />
                            </div>
                           
                        </Slide>
                        
                    </div>
                
                </div>
            
            
        );
    }
}

export default Discount;