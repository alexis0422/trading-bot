import React, { Component } from 'react';
import "./header.css"

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            connectedAddress: ''
        }
    }
    render() {
        return (
            <div className='header'>
                <p>Dex Trading bot</p>
            </div>
        );
    }
}

export default Header;