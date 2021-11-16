# [Slipper](https://slippers.herokuapp.com/)

<img align="center" width="500" height="300" src="https://github.com/ccy1563/Flashcard-Wars/blob/main/slipper.gif">

## Overview
Don't just memorize, Type and Memorize.

Active learning should be more than just memorizing. Why not make it more "active". 

Slipper aims to improve your typing speed while memorizing key information at the same time.

## Functionality & MVPs
<img align="center" width="500" height="300" src="https://github.com/ccy1563/Flashcard-Wars/blob/main/flashcard_show.jpg">

* Splash page featuring the goal the application.
* Deck splash page featuring decks created by various users.
* Deck page so that users may visit other users decks and view the flashcards. 
* Users may also save other user's decks to their own profile page and/or comment on the deck page.
* User profile page featuring all the decks the user has created, as well as decks created by other users that were saved.
* Users can apply CRUD features to decks, flashcards, and comments.
* Users can type out contents of any deck through our typing feature for improved rote memory.

## Technology
* MongoDB
* Express
* React.js
* Redux

## Code Snippet
* In order for the typing test to give a visual representation of whether the word is correct, it was necessary to color code words based on if it matches the flashcard.
* The code below is used to push letters into an array with a class name and css style in order for it to re-render for every output the user types.

```Javascript
    let arr = []
        let mainArr = []
        let arrWithSpace = []
        if (flashcards){
            for (let x = 0; x < flashcards.length; x++){
                if(flashcards[x] === `\n`){
                    arr.push(<div></div>)                    
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
        } else{
            return mainArr
        }
```