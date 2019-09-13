import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



class WordCloud extends React.Component{



    render() {
        return (
            <h1>yo</h1>
        );
    } 
}


class Word extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: "Hello world",
            wordCount: undefined,
            listOfWords: undefined

        }

        this.updateWordCount = this.updateWordCount.bind(this);
        
    }


    updateWordCount(event){
        let string = event.target.value; 
        
        if (string.charAt(string.length-1) == " "){
            console.log("stoooop")
            return; 
        };

        let wordArr = string.split(" ");

        wordArr.map(str => str.replace(/\s/g, ''));

        let numWords = wordArr.length; 

        let wordCounter = new Map();

        for (let i = 0; i < wordArr.length; i++){
            if (!wordCounter.has(wordArr[i])){
                wordCounter.set(wordArr[i], 1);
            } else {
                let count = wordCounter.get(wordArr[i]) + 1;
                wordCounter.delete(wordArr[i])
                wordCounter.set(wordArr[i], count);
            }
        }

        let wordList = [];
        for (let [key, value] of wordCounter){
            wordList.push(key + ": " + value + " ");
        };

        this.setState({wordCount: numWords, listOfWords: wordList})
        console.log(this.state.wordCount)
    }

    render() {
        return (
            <div>
                <form>
                    <label>Input text
                    <input type="text" onChange={this.updateWordCount}></input>
                    </label>
                </form>
                <div className="status">
                    <h3>Current text: {this.state.text}</h3>
                    {this.state.wordCount}
                    
                </div>
                <p>{this.state.listOfWords}</p>
            </div>
        );
    }
}

class Main extends React.Component {
    
    render() {
        return (
            <div className="game">
                
                <div className="game-board">
                    <Word />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);


