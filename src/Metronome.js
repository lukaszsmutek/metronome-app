import React, { Component } from 'react';
import './Metronome.css';

class Metronome extends Component {

    constructor(props){
        super(props);

        this.state = {
            playing: false,
            count: 0,
            bpm: 100,
            beatsPerMeasure: 4
        };

        this.click1 = new Audio(click1);
        this.click2 = new Audio(click2);
    }

    startStop =()=>{this.click1.play;}

    handleBpmChange = event => {
        const bpm = event.target.value;
        this.setState({ bpm });
    }
    render() {

        const {playing, bpm} = this.state;

        return (
            <div className="metronome">
                <div className="bpm-slider">
                    <h3>{bpm} bpm</h3>
                    <input type="range" min="0" max="240" value={bpm} onChange={this.handleBpmChange}/>
                </div>
                <button onClick={this.startStop()}>{playing ?'stop' : 'start'}</button>
            </div>
        )
    }
}

export default Metronome;