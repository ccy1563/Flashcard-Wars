import React, { Component } from 'react'
import Score from '../score.jsx/score'
// import Time from '../time/time'
import Fuse from './fuse'
export default class Box extends Component {
    constructor(props){
        super(props)
    this.state = {
        flashcards: {2:`asdasdas asdasdsa`,
                1:`for (let i = 0; i < 5; i++) {\n &#9;text += "The number is " + i + "<br>"\n;\n}`,
                3:`asd`,
                4:`asd`,
                5:`asd`,
                6:"Done"
            },
        input: "",
        counter: 1,
        score:0,
        ended:false
    }
    this.resetGame = this.resetGame.bind(this)
    this.loadDeck = this.loadDeck.bind(this)
    }

    // componentDidMount(){
    //     getDeck
    // }

    // checkSingleChar(input,flashcards){
    //     // let alreadyClear
    //     let arr = []
    //     if (input === flashcards && this.state.input != ""){
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

    checkWholepassage(input,flashcards){
        let arr = []
        let subArray = []
        let arrWithSpace = []
        for (let x = 0; x < flashcards.length; x++){
            if(flashcards[x] === `\n`){               
                arr.push(<h1>{`\n`}</h1>)
            }
            if (flashcards[x] === " "){
                arr.push(<h1>&nbsp;</h1>)
            }
            if (input[x] === flashcards[x]){
                arr.push(<h1 className="white">{flashcards[x]}</h1>)                
            }            
            else if(input[x] && input[x] !== flashcards[x]){
                arr.push(<h1 className="red">{flashcards[x]}</h1>)    
            }            
            else{
                arr.push(<h1 className="black">{flashcards[x]}</h1>)
            }
        }
        for (let x = 0; x < arr.length; x++){
            arrWithSpace.push(arr[x])
            
            // arrWithSpace.push(<h1>_</h1>)
        }
        return arr
    }


    checkWholepassage2(input,flashcards){
        let arr = []
        let mainArr = []
        let arrWithSpace = []
        for (let x = 0; x < flashcards.length; x++){
            if(flashcards[x] === `\n`){
                for(let i = arr.length; i < 1000; i++){
                    arr.push(<h1>&nbsp;</h1>)
                }
                
                mainArr.push(arr)
                arr = []
            }
            if (flashcards[x] === " " && input[x] != " "){
                arr.push(<h1 className="WrongSpace">&nbsp;</h1>)
            }else if (flashcards[x] === " "){
                arr.push(<h1>&nbsp;</h1>)
            }
            if (input[x] === flashcards[x]){
                arr.push(<h1 className="white">{flashcards[x]}</h1>)                
            }            
            else if(input[x] && input[x] !== flashcards[x]){
                arr.push(<h1 className="red">{flashcards[x]}</h1>)    
            }            
            else{
                arr.push(<h1 className="black">{flashcards[x]}</h1>)
            }
        }
        for (let x = 0; x < arr.length; x++){
            arrWithSpace.push(arr[x])
            
            // arrWithSpace.push(<h1>_</h1>)
        }
        mainArr.push(arr)
        arr = []
        console.log(mainArr)
        return mainArr
    }

    // checkWholepassage(input,flashcards){
    //     let arr = []
    //     let subArray = []
    //     let arrWithSpace = []
    //     for (let x = 0; x < flashcards.length; x++){
    //         if(flashcards[x] === `\n`){
    //             arr.push(<h1>{`\n`}</h1>)
    //         }
    //         if (flashcards[x] === " "){
    //             arr.push(<h1>&nbsp;</h1>)
    //         }
    //         if (input[x] === flashcards[x]){
    //             arr.push(<h1 className="white">{flashcards[x]}</h1>)                
    //         }            
    //         else if(input[x] && input[x] !== flashcards[x]){
    //             arr.push(<h1 className="red">{flashcards[x]}</h1>)    
    //         }            
    //         else{
    //             arr.push(<h1 className="black">{flashcards[x]}</h1>)
    //         }
    //     }
    //     for (let x = 0; x < arr.length; x++){
    //         arrWithSpace.push(arr[x])
            
    //         // arrWithSpace.push(<h1>_</h1>)
    //     }
    //     return arr
    // }

    addOne(){
        let oldcounter = this.state.counter
        let oldScore = this.state.score
        let oldEnded = this.state.ended
        if(Object.keys(this.state.flashcards).length > oldcounter){          
            this.setState({counter:oldcounter+1})
            this.setState({input:""})
            this.setState({score:oldScore+1})
        }

        if(Object.keys(this.state.flashcards).length === oldcounter+1){          
            this.setState({ended:true})
        }
        

        // if(Object.keys(this.state.flashcards).length === oldcounter){
        //     this.setState({ended:!oldEnded})
        // }
        
    }

    // endOfGame(stateEnded){
    //     state
    // }

    checkAll(input,flashcards){
        for (let x = 0; x < flashcards.length; x++){
            if(input[x] !== flashcards[x]){
                return "Not Done"
            }
            
        }
        return "Done"
    }

    resetGame(){
        // this.setState({
        //     flashcards: {1:`asd`,
        //             2:`qwe`,
        //             3:`asd`,
        //             4:`asd`,
        //             5:`asd`,
        //             6:"Done"
        //         })
        this.setState({counter:1})
        this.setState({score:0})
        this.setState({input:""})
        this.setState({ended:false})



    }


    loadDeck(){
        this.setState({flashcards: {1:`deck1`,
                    2:`deck2`,
                    3:`deck3`,
                    4:`abcd`,
                    5:`abcde`,
                    6:"Done"
                }})
        this.setState({counter:1})
        this.setState({score:0})
        this.setState({input:""})
        this.setState({ended:false})


    }

   

    

 

    render() {
        
        // const checkSingleChar = this.checkSingleChar(this.state.input[this.state.input.length-1],this.state.flashcards[this.state.input.length-1])
        const checkWholepassage = this.checkWholepassage(this.state.input,this.state.flashcards[this.state.counter])
        const checkWholepassage2 = this.checkWholepassage2(this.state.input,this.state.flashcards[this.state.counter])
        const firstPassage = checkWholepassage2[0]
        const firstPassage1 = checkWholepassage2[1]
        const firstPassage2 = checkWholepassage2[1]

        const checkAll = this.checkAll(this.state.input,this.state.flashcards[this.state.counter])
        // const thisState = Object.keys(this.state.flashcards).length
        // const checkAll = this.checkAll(this.state.input,this.state.flashcards[this.state.counter])
        const stateEnded = this.state.ended
        const endOfGame = Object.keys(this.state.flashcards).length
        const resetGame = this.resetGame
        const loadDeck = this.loadDeck
        

        // const arr2 = []
        // let arr4 = [<h1 className="white">Test</h1>,<h1 className="black">ing</h1>,<h1 className="white">s</h1>]
        // let arr5 = [<h1 className="white">Test</h1>,<h1 className="black">ing</h1>,<h1 className="white">s</h1>]
        // let arr6 = [arr4,arr5]

        return (
            <div className='box-render'>
                {/* <Time h={5}m={4}s={3}/> */}
                <Score className="scorebox-text" text={"Your current score is"} currentScore={this.state.score}/>
                <div className='instruction'><h1>Type this</h1></div>
                <div className="game">
                    {/* {arr2} {checkWholepassage}                */}
                        {checkWholepassage2.map((ele,i) => (
                            // ele.map((ele2,i) => (
                                <div className="textbox2">
                                    <Fuse ele={ele}/>
                                    {/* {console.log(ele)} */}
                                </div>
                               
                                // <div className="textbox2">
                                  
                                // </div>
                                
                                // ))
                            // <div className="textbox2">
                              
                            // </div>
                            
                            ))}  
                      
                </div>
                {
                   (checkAll === 'Done') ? this.addOne() : null
                }
               
                {
                    (stateEnded === false) 
                    ? <div className='box-input'><textarea name="Text1" value={this.state.input} onChange={(e)=>this.setState({input: e.target.value})}/></div> 
                    : <Score text={"Your final score is"} currentScore={this.state.score}/>
                }
                
                {/* <div className='stateflashcards'><h1>{this.state.flashcards}</h1></div>                */}
                
                   
                {/* <div className='game'>
                    {   
                        <div className='game2'>
                        {arr2.map((ele) => ele)}                            
                        </div>
                    }
                </div> */}
          
          <button onClick={resetGame}>Reset Flashcards</button>
          <button onClick={loadDeck}>Load Deck 1</button>

                           
            </div>
        )
    }
}
