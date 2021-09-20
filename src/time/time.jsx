import React, { Component } from 'react'

export default class Time extends Component {
    render() {
        return (
            <div>
                {this.props.h}:{this.props.m}:{this.props.s}
            </div>
        )
    }
}
