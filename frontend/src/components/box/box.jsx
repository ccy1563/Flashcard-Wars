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
        ranking:[10,20,30]
    }
    this.resetGame = this.resetGame.bind(this)
    this.loadDeck = this.loadDeck.bind(this)


    }

    componentDidMount(){       
        this.props.fetchDeckFlashcards(this.props.deckId);
        // debugger
       
        this.startTimer()
        
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
                    for(let i = arr.length; i < 250; i++){
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
        this.startTimer()




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
        if (flashcards){
            for (let x = 0; x < flashcards.length;x++){
                arr.push(flashcards[x].text)
            }
            
            
            let object = Object.assign({}, arr)
          
            let oldState = this.state.flashcards
        
            if (oldState != object){
                this.setState({flashcards:object}) 
             
            }
            // 
        }else{
            console.log("not found")
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
    
    

 

    render() {
        

        const checkWholepassage2 = this.checkWholepassage2(this.state.input,this.state.flashcards[this.state.counter])
      
        let renderCount = this.state.renderCount
        const checkAll = this.checkAll(this.state.input,this.state.flashcards[this.state.counter]) 
        const stateEnded = this.state.ended
        const endOfGame = Object.keys(this.state.flashcards).length
        const resetGame = this.resetGame
        const loadDeck = this.loadDeck
        const someMethod = this.someMethod
        const timerEnd = this.state.timerEnd
        const ranking = this.state.ranking
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
                
                <Score className="scorebox-text" text={"Faster"} currentScore={this.state.timer} text2={"seconds has pass"} />
                <Score text={"You are on"} currentScore={this.state.counter} text3={"of"} text2={endOfGame}/>
                {/* <Score text={"Your record was"} currentScore={this.state.timer}/> */}
                    <div className='instruction'><div>Click below the text start typing</div></div>

                    <div className="game" for='Text1' >
                        {checkWholepassage2.map((ele,i) => (       
                                <Fuse className="textbox2" ele={ele} key={i}/>
                            ))}
                    </div>
                {
                   (checkAll === 'Done') ? this.addOne() : null
                }
               
                {
                    (stateEnded === false) 
                    ? <div className='box-input'><textarea className="Text1" spellcheck="false" value={this.state.input} onChange={(e)=>this.setState({input: e.target.value})}/></div>      
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

                
              
                
                
       
          
          <button onClick={resetGame}>Reset Flashcards</button>
          <button onClick={loadDeck}>Load Deck 1</button>
          <button onClick={someMethod}>Refresh</button>


                           
            </div>
        )
    }
}

export default withRouter(Box)
