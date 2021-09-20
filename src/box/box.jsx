import React, { Component } from 'react'

export default class Box extends Component {
    constructor(props){
        super(props)
    this.state = {
        target: `if (target[x] === " ")\n{arr.push(<h1>&nbsp;</h1>)
        }`,
        input: "",
        counter: 0
    }
    }

    // checkSingleChar(input,target){
    //     // let alreadyClear
    //     let arr = []
    //     if (input === target && this.state.input != ""){
    //         // this.setState({counter: this.state.counter+1})
            
    //         // debugger
    //         // alreadyClear = this.state.input           
    //         // console.log(arr) 
    //         arr.push(<h1 className="white">{input}</h1>)
    //         // return <h1 className="white">{this.state.input}</h1>
    //     }
       
    //     else{                       
    //         arr.push(<h1 className="black">{input}</h1>)                
                
    //     }
    //     return arr

    // }
    // loop

    checkWholepassage(input,target){
        let arr = []
        let arrWithSpace = []
        for (let x = 0; x < target.length; x++){
            if(target[x] === `\n`){
                arr.push(<h1>{`\n`}</h1>)
            }
            if (target[x] === " "){
                arr.push(<h1>&nbsp;</h1>)
            }
            if (input[x] === target[x]){
                arr.push(<h1 className="white">{target[x]}</h1>)                
            }            
            else if(input[x] && input[x] != target[x]){
                arr.push(<h1 className="red">{target[x]}</h1>)    
            }            
            else{
                arr.push(<h1 className="black">{target[x]}</h1>)
            }
        }
        for (let x = 0; x < arr.length; x++){
            arrWithSpace.push(arr[x])
            
            // arrWithSpace.push(<h1>_</h1>)
        }
        return arr
    }



 

    render() {
        
        // const checkSingleChar = this.checkSingleChar(this.state.input[this.state.input.length-1],this.state.target[this.state.input.length-1])
        const checkWholepassage = this.checkWholepassage(this.state.input,this.state.target)
        const arr2 = []
        // let arr4 = [<h1 className="white">Test</h1>,<h1 className="black">ing</h1>,<h1 className="white">s</h1>]
        // let arr5 = [<h1 className="white">Test</h1>,<h1 className="black">ing</h1>,<h1 className="white">s</h1>]
        // let arr6 = [arr4,arr5]

        return (
            <div className='box-render'>
                <div className='instruction'><h1>Type this</h1></div>
                <div className="game">
                    {/* {arr2} {checkWholepassage}                */}
                        {checkWholepassage.map((ele) => (
                            <div>
                                {ele}
                            </div>
                            
                            ))}  
                </div>
                {/* <div className='stateTarget'><h1>{this.state.target}</h1></div>                */}
                <div className='box-input'><textarea name="Text1" value={this.state.input} onChange={(e)=>this.setState({input: e.target.value})}/></div>    
                    
                {/* <div className='game'>
                    {   
                        <div className='game2'>
                        {arr2.map((ele) => ele)}                            
                        </div>
                    }
                </div> */}
          

                           
            </div>
        )
    }
}
