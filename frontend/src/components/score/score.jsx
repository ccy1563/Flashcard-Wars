import React, { Component } from 'react'
import '../newCss.css';
export default class score extends Component {
    render() {
        return (
            <div>
                <div className="scorebox-text">{this.props.text} {this.props.currentScore}</div>
            </div>
        )
    }
}

