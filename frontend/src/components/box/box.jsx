import React from 'react'
// import '../newCss.css';
import Score from '../score/score.jsx'
import {withRouter} from "react-router-dom"
// import Time from '../time/time'
import Fuse from './fuse'
// import Datetime from 'react-datetime';
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
        renderCount:0
    }
    this.resetGame = this.resetGame.bind(this)
    this.loadDeck = this.loadDeck.bind(this)
    }

    componentDidMount(){       
        this.props.fetchDeckFlashcards(this.props.deckId);
        // debugger
    }



    checkWholepassage(input,flashcards){
       
        let arr = []
        let subArray = []
        let arrWithSpace = []
        for (let x = 0; x < flashcards.length; x++){
            if(flashcards[x] === `\n`){               
                arr.push(<div>{`\n`}</div>)
            }
            if (flashcards[x] === " "){
                arr.push(<div>&nbsp;</div>)
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
        return arr
    }


    checkWholepassage2(input,flashcards){
        let arr = []
        let mainArr = []
        let arrWithSpace = []
        if (flashcards){
            for (let x = 0; x < flashcards.length; x++){
                if(flashcards[x] === `\n`){
                    for(let i = arr.length; i < 1000; i++){
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

 

    render() {
        

        const checkWholepassage2 = this.checkWholepassage2(this.state.input,this.state.flashcards[this.state.counter])
      
        let renderCount = this.state.renderCount
        const checkAll = this.checkAll(this.state.input,this.state.flashcards[this.state.counter]) 
        const stateEnded = this.state.ended
        const endOfGame = Object.keys(this.state.flashcards).length
        const resetGame = this.resetGame
        const loadDeck = this.loadDeck
        const{flashcards} = this.props

        if(flashcards && renderCount === 0 ){
            this.propsTostate()
        }
        // flashcards && renderCount === 0 ? this.propsTostate()  : null

        return (
            <div className='box-render'>
                {/* <Datetime ref="datetime"/> */}
                {/* <Score className="scorebox-text" text={"Your current score is"} currentScore={this.state.score}/> */}
                <div className='instruction'><div>Type this</div></div>
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
                    ? <div className='box-input'><textarea name="Text1" value={this.state.input} onChange={(e)=>this.setState({input: e.target.value})}/></div> 
                    : <Score text={"Your final score is"} currentScore={this.state.score+1}/>
                }
                
                
       
          
          <button onClick={resetGame}>Reset Flashcards</button>
          <button onClick={loadDeck}>Load Deck 1</button>

                           
            </div>
        )
    }
}

export default withRouter(Box)
