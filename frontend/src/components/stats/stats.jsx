import React, { Component } from 'react'
import '../newCss.css';
export default class  Stats extends Component {
    render() {
        const array = this.props.array
        let list = []

       
        if (array){
            for (let x = 0; x < 3 ; x++){
                // 
                if(x === 0){
                    list.push(<ul>{array[x]} seconds was the fastest</ul>)
                }
                else if(x === 1 && array[x]>=0){
                    list.push(<ul>{array[x]} seconds was a close second</ul>)
                }else if(x === 2 && array[x]>=0){
                    list.push(<ul>{array[x]} seconds was the bronze medalist</ul>)

                }
                
            }        
        }
        // console.log(list)
        // list.sort()  
        return (
            <div className="Stats">
               <div>{list}</div>
            </div>
        )
    }
}
