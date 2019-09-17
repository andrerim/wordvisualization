import React from 'react';
import ReactDOM from 'react-dom';


class CountWords extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            words: "",
            counts: ""

        };
        this.updateWordCount = this.updateWordCount.bind(this);
        this.displayWordCounts = this.displayWordCounts.bind(this);
    }


    updateWordCount(event){
        this.setState({words: event.target.value});
        console.log(this.state.words)
    }

    displayWordCounts(event){
        event.preventDefault();

        // TO-DO: Finn en bedre regex
        let words = this.state.words.split(/\W+/)

        let wordCounts = {};
        for (let i = 0; i < words.length; i++){
            let word = words[i]
            if (wordCounts[word]){
                wordCounts[word]++;
            } else{
                wordCounts[word] = 1;
            }
        };
        console.log(wordCounts);
        
        

    }

    render() {

        return (
            <div>
            <form onSubmit={this.displayWordCounts}>
                <label>Input text
                <input type="text" value={this.state.value} onChange={this.updateWordCount}></input>
                </label>
                <input type="submit" value="Submit" />
            </form>

            <div className="output">
                 {this.state.words}
                 {this.state.counts}
            </div>
            </div>
        );
    }



};


export default CountWords;