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
            wordCount: undefined

        }

        this.updateWordCount = this.updateWordCount.bind(this);
        
    }


    updateWordCount(event){
        let string = event.target.value; 
        let wordArr = string.split(" ");
        let wordCounter = wordArr.length;
        
        


        this.setState({wordCount: wordCounter})
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


