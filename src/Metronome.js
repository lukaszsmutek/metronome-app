import React, { Component } from 'react';
import './Metronome.css';

class Metronome extends Component {
    render() {
        let bpm = 100;
        let playing = false;

        return (
            <div className="Metronome">
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