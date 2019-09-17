import React from 'react';
import ReactDOM from 'react-dom';



var div;



// To do: Add checks for submiting an empty input  
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
        let keys = [];
        for (let i = 0; i < words.length; i++){
            let word = words[i]
            if (wordCounts[word]){
                wordCounts[word]++;
                
            } else{
                wordCounts[word] = 1;
                keys.push(word);
            }
        };


        console.log(wordCounts);
        console.log(keys);
        
        let newDiv = []
        
        
        for (let i = 0; i < keys.length; i++){
            let divStyle = {
            fontSize: 1,
            padding: 0,
            margin: 0,
            };  
            console.log("wordCount: " + wordCounts[keys[i]]);
            
            divStyle["fontSize"] = wordCounts[keys[i]]*10; 
            console.log("DivStyle: " + divStyle["fontSize"]);
            newDiv.push(<p style={divStyle} key={i} >{keys[i]}</p>);
        };

        this.setState({counts: newDiv});

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
                 {this.state.counts}
            </div>
            </div>
        );
    }



};


export default CountWords;