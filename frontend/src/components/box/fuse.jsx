import React, { Component } from 'react'
import '../newCss.css';
export default class fuse extends Component {
    render() {
        return (
            <div >
                <h6 className='fuse'>{this.props.ele}</h6>
            </div>
        )
    }
}
