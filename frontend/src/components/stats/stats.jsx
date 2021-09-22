import React, { Component } from 'react'
import '../newCss.css';
export default class Stats extends Component {
    render() {
        const array = this.props.array
        const timer = this.props.currentTimer

        let list = []
       
        // console.log(timer)
        if (array){
            array.push(timer)
            let sorted = array.sort(function(a, b) {
                return a - b;
              });
            for (let x = 0; x < 3 ; x++){
                if(x === 0){
                    list.push(<ul>{sorted[x]} seconds was the fastest</ul>)
                }
                else if(x === 1){
                    list.push(<ul>{sorted[x]} seconds was a close second</ul>)
                }else{
                    list.push(<ul>{sorted[x]} seconds was the bronze medalist</ul>)

                }
                
            }        
        }
        // console.log(list)
        list.sort()
        return (
            <div className="Stats">
               {list}
            </div>
        )
    }
}
