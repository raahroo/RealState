import React from 'react';
import Logo from '../../logo.svg';

export default class Menu extends React.Component{

    render(){
        return(
            <div className="Menu container-fluid">
                <ul className="Menu__ul">
                    <li className="item">welkom</li>
                    <li className="item">history</li>
                    <li className="item">kamers</li>
                    <li className="item">content</li>
                    <li className="logo"><img src={Logo} className="App-logo"/></li>
                    <li className="item">cheving</li>
                    <li className="item">blog</li>
                    <li className="item">reserver</li>
                    <li className="item">contact</li>
                </ul>
                
            </div>
            
        );
    }
}