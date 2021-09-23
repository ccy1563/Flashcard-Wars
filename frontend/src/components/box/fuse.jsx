import React, { Component } from 'react'
import '../newCss.css';
export default class fuse extends Component {
    render() {
        return (
            // <div className="fuse-box">
                <div className='fuse'>{this.props.ele}</div>
            // </div>
        )
    }
}
