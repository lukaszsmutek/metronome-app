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
    }
    render() {

        const {playing, bpm} = this.state;

        return (
            <div className="metronome">
                <div className="bpm-slider">
                    <h3>{bpm} bpm</h3>
                    <input type="range" min="0" max="240"/>
                </div>
                <button>{playing ?'stop' : 'start'}</button>
            </div>
        )
    }
}

export default Metronome;