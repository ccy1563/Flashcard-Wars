import React from 'react'
import '../newCss.css';
import Score from '../score/score.jsx'
import {withRouter} from "react-router-dom"
// import Time from '../time/time'
import Fuse from './fuse'
// import Datetime from 'react-datetime';
import Stats from '../stats/stats';
class Box extends React.Component {
    constructor(props){
        super(props)
    this.state = {
        flashcards: {
            },
        input: "",
        counter: 0,
        score:0,
        ended:false,
        renderCount:0,
        timer:0,
        timerEnd:false,
        ranking:[100,300,600],
        title:[],
        timerHasStarted:false
    }
    this.resetGame = this.resetGame.bind(this)
    this.loadDeck = this.loadDeck.bind(this)
    this.tabChange = this.tabChange.bind(this)
    var person = {
    firstName:"John",
    lastName:"Doe",
    age:20,
    nationality:"German"
    };

    }

    componentDidMount(){       
        this.props.fetchDeckFlashcards(this.props.deckId);
        // debugger
       
        // this.startTimer()
        
    }

    componentWillUnmount(){
        this.stopTimer()
        
    }



    // checkWholepassage(input,flashcards){
       
    //     let arr = []
    //     let subArray = []
    //     let arrWithSpace = []
    //     for (let x = 0; x < flashcards.length; x++){
    //         if(flashcards[x] === `\n`){               
    //             arr.push(<div>{`\n`}</div>)
    //         }
    //         if (flashcards[x] === " "){
    //             arr.push(<div>&nbsp;</div>)
    //         }
    //         if (input[x] === flashcards[x]){
    //             arr.push(<div className="white">{flashcards[x]}</div>)                
    //         }            
    //         else if(input[x] && input[x] !== flashcards[x]){
    //             arr.push(<div className="red">{flashcards[x]}</div>)    
    //         }            
    //         else{
    //             arr.push(<div className="black">{flashcards[x]}</div>)
    //         }
    //     }
    //     for (let x = 0; x < arr.length; x++){
    //         arrWithSpace.push(arr[x])
            
    //     }
    //     return arr
    // }




    checkWholepassage2(input,flashcards){
        let arr = []
        let mainArr = []
        let arrWithSpace = []
       

        if (flashcards){
            for (let x = 0; x < flashcards.length; x++){
                if(flashcards[x] === `\n`){
                    for(let i = arr.length; i < 500; i++){
                        arr.push(<div>&nbsp;</div>)
                    }
                    
                    mainArr.push(arr)
                    arr = []
                }
                if (flashcards[x] === " " && input[x] != " " && input[x] != undefined){
                    arr.push(<div className="WrongSpace">&nbsp;&nbsp;</div>)
                }else if (flashcards[x] === " "){
                    arr.push(<div>&nbsp;&nbsp;</div>)
                }
                if (input[x] === flashcards[x]){
                    arr.push(<div className="white">{flashcards[x]}</div>)                
                }            
                else if(input[x] && input[x] !== flashcards[x]){
                    arr.push(<div className="red">{flashcards[x]}</div>)    
                }            
                else{
                    arr.push(<div className="black">{flashcards[x]}</div>)
                }
            }
            for (let x = 0; x < arr.length; x++){
                arrWithSpace.push(arr[x])
                
            }
            mainArr.push(arr)
            arr = []
            return mainArr
        }else{
            return mainArr
        }
        
    }


    outputSingleWord(input,flashcards){
        let arr = []
        let mainArr = []
        let arrWithSpace = []
        let newStarting = 0
        // console.log(flashcards)
        // console.log(typeof flashcards)
        let split;
        if(flashcards){
            split = flashcards.split(" ")
        }
        // console.log(split)
        let counter = 0
        let size = 0
        if (input){
            // console.log(input.length,split[counter].length)
            if (input.length <= split[counter].length){
                // console.log(split[counter])
                // console.log(input.length+1, split[counter].length+size)
                if(input.length+1 > split[counter].length+size){
                    // console.log("Asd")
                    counter += 1
                    size+= split[counter].length
                }
            }
        }
        
        // let split = flashcards.split(" ")
        // console.log(split)
        // if (flashcards){
        //     for (let x = 0; x < flashcards.length; x++){
        //         console.log(flashcards.length)
        //         if(flashcards[x] === `\n` || flashcards[x] === ""){
        //             for(let i = newStarting; i < [x]; i++){
        //                 if (input[x] === flashcards[x]){
        //                     arr.push(<div className="white">{flashcards[x]}</div>)       
        //                 }            
        //                 else if(input[x] && input[x] !== flashcards[x]){
        //                     arr.push(<div className="red">{flashcards[x]}</div>)    
        //                 }            
        //                 else{
        //                     arr.push(<div className="black">{flashcards[x]}</div>)
        //                 }
        //             }
        //         }
        //     }
        // } 
        // console.log(arr)
    }

    


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
        

      
        
    }

    stopTimer(){
        clearInterval(this.interval)
        // this.setState({timerEnd:true})
    }

    startTimer(){
        this.interval = setInterval(() => {
            this.setState(prevState  =>({
                timer:prevState.timer + 1
            }))
        },1000)
    } 
    

   

    checkAll(input,flashcards){
        if(flashcards){
             for (let x = 0; x < flashcards.length; x++){
            if(input[x] !== flashcards[x]){
                return "Not Done"
            }
            
        }
        return "Done"
        }else{
            return "checkingall"
        }
       
    }

    resetGame(){   
        this.setState({counter:0})
        this.setState({score:0})
        this.setState({input:""})
        this.setState({ended:false})
        this.setState({timer:0})
        this.setState({timerHasStarted:false})

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

   

    propsTostate(){
        this.setState({renderCount:1}) 
        const{flashcards} = this.props
        let arr = []
        let titlearr = []
        if (flashcards){
            for (let x = 0; x < flashcards.length;x++){
                arr.push(flashcards[x].text)
                titlearr.push(flashcards[x].title)
            }
            this.setState({title:titlearr})
            
            
            
            let object = Object.assign({}, arr)
          
            let oldState = this.state.flashcards
        
            if (oldState != object){
                this.setState({flashcards:object}) 
             
            }
            // 
        }else{
            // console.log("not found")
        }
       
    }

    // inputIsEmpty(input){
    //     if(input){
    //         console.log("true")
    //         return true
    //     }else
    //     return false
    // }

    someMethod() {
        window.location.reload(false);
    }
    
    

    tabChange(e){
        if(e.code == "TAB" || e.code == "Tab" || e.code == "TABKEY"){
            e.preventDefault()
            // console.log(this.state.input)
            this.setState({input:this.state.input + "    "})
            // console.log(e)
        }
        if(this.state.timerHasStarted === false){
            this.setState({timerHasStarted:true})
            console.log("asd")
            this.startTimer()
        }
        
        
    }

    
    render() {
        
        
        const checkWholepassage2 = this.checkWholepassage2(this.state.input,this.state.flashcards[this.state.counter])
        let counter = this.state.counter
        let renderCount = this.state.renderCount
        const checkAll = this.checkAll(this.state.input,this.state.flashcards[this.state.counter]) 
        const stateEnded = this.state.ended
        const endOfGame = Object.keys(this.state.flashcards).length
        const resetGame = this.resetGame
        const loadDeck = this.loadDeck
        const someMethod = this.someMethod
        const timerEnd = this.state.timerEnd
        const ranking = this.state.ranking
        const outputSingleWord = this.outputSingleWord(this.state.input,this.state.flashcards[this.state.counter])
        // const timer = this.state.timer
        // const inputIsEmpty = this.inputIsEmpty(this.state.input)
        // if (inputIsEmpty && timer === 0){
        //     this.startTimer()
        // }
       
        // checkIfStarted ? this.startTimer() : ""
        // timer === 0 ? this.startTimer() : null
        const{flashcards} = this.props
        if (flashcards && renderCount === 0 ){
            this.propsTostate()
        }
        
     

        // flashcards && renderCount === 0 ? this.propsTostate()  : null

        return (
            <div className='box-render'>
                {/* <Datetime ref="datetime"/> */}
                {outputSingleWord}
                <Score className="scorebox-text" text={"Faster"} currentScore={this.state.timer} text2={"seconds has passed"} />
                <Score text={"You are on"} currentScore={this.state.counter} text3={"of"} text2={endOfGame}/>

                
                {/* <Score text={"Your record was"} currentScore={this.state.timer}/> */}
                    <div className='instruction'><div>Click on the delete gif to start typing</div></div>
                    <div className="button-div"><button onClick={resetGame}>Reset Flashcards</button>
                    <button onClick={loadDeck}>Load Deck 1</button>
                    <button onClick={someMethod}>Refresh</button></div>


                    <div className='title'>Title of this card is {this.state.title[counter]}</div>

                    <div className="game">
                        {checkWholepassage2.map((ele,i) => (       
                                <Fuse className="textbox2" ele={ele} key={i}/>
                            ))}
                    </div>
                {
                   (checkAll === 'Done') ? this.addOne() : null
                }
               
                {
                    (stateEnded === false) 
                    ? <div className='box-input'><textarea className="Text1" spellCheck="false" value={this.state.input} onKeyDown={this.tabChange} onChange={(e)=>this.setState({input: e.target.value})}/></div>      
                    : this.stopTimer() 
                    // : <Score text={"Your final score is"} currentScore={this.state.score}/> ? this.stopTimer() : null  ? console.log("asd") : null
                    // (stateEnded === true)
                    // ? console.log(this.state.ranking)
                    // : null
                }
                {
                    (stateEnded === true)

                    ?    <Stats array={this.state.ranking} currentTimer={this.state.timer}/>
                    : ""
                }
                

                
              
                
                
       
          
      


                           
            </div>
        )
    }
}

export default withRouter(Box)
