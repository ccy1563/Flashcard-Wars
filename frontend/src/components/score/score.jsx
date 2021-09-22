import React, { Component } from 'react'
import '../newCss.css';
export default class score extends Component {
    render() {
        return (
            <div>
                <div className="scorebox-text">{this.props.text}, {this.props.currentScore} {this.props.text3} {this.props.text2}</div>
            </div>
        )
    }
}

