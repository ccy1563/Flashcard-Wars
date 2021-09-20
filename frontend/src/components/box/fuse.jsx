import React, { Component } from 'react'
import '../newCss.css';
export default class fuse extends Component {
    render() {
        return (
            <div className="fuse-box">
                <h6 className='fuse'>{this.props.ele}</h6>
            </div>
        )
    }
}
