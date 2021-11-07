import React, { Component } from 'react'
import '../newCss.css';
export default class  Stats extends Component {
    render() {
        const array = this.props.array
        let list = []

       
        if (array){
            for (let x = 0; x < array.length ; x++){
                // 
                if(x === 0 ){
                    list.push(<ul>1st Place {array[x][0]} {array[x][1]} seconds </ul>)
                }
                else if(x === 1 && array[x][1]>=0){
                    list.push(<ul>2nd Place {array[x][0]} {array[x][1]} seconds </ul>)
                }else if(x === 2 && array[x][1]>=0){
                    list.push(<ul>3rd Place {array[x][0]} {array[x][1]} seconds </ul>)

                }
                
            }        
        }
        // console.log(list)
        // list.sort()  
        return (
            <div className="Stats" >
               <div>{list}</div>
            </div>
        )
    }
}
