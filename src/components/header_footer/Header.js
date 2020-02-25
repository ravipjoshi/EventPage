import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/core/Menu'
import IconButton from '@material-ui/core/IconButton'

class Header extends Component {
    render() {
        return (
            <div>
                <AppBar

                    position="fixed"
                    style ={{
                        background:'#2f2f2f',
                        boxShadow:'none',
                        padding: '10px 0px'
                }}
                >
                   <Toolbar>
                        <div className="header_logo">
                            <div className="font_righteous header_logo_venue"> The Event </div>
                            <div className="header_logo_title"> Free Events </div>
                        </div>
                        <IconButton 
                            aria-label="Menu"
                            onClick={()=> console.log("open")}
                        >
                            <MenuIcon/>
                        </IconButton>
                   
                   </Toolbar> 
                    
                </AppBar>
            </div>
        );
    }
}

export default Header;