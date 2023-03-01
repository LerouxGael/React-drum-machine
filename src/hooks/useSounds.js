import { useEffect, useRef } from 'react';
import * as Tone from 'tone';
import { createAudioContext } from 'tone/build/esm/core/context/AudioContext';
import Clap from 'assets/sounds/Clap.wav';
import Crash from 'assets/sounds/Crash.wav';
import HiHat from 'assets/sounds/HiHat.wav';
import Kick from 'assets/sounds/Kick.wav';


export default function useSounds(){
    const mySampler = useRef(null);
    useEffect(() => {
        const sampler = new Tone.Sampler({
                "C4": Clap,
                "D#4": Crash,
                "F#4": HiHat,
                "A4": Kick,
           
        }).toDestination();

        Tone.loaded().then(() => {
            mySampler.current = sampler;
            createAudioContext();
        })
    }, [])
    
    ;

    const buttonsList = [
        {soundPlay : () => mySampler.current.triggerAttackRelease(["C4"], 4)},
        {soundPlay : () => mySampler.current.triggerAttackRelease(["D#4"],4 )},
        {soundPlay : () => mySampler.current.triggerAttackRelease(["F#4"], 4)},
        {soundPlay : () => mySampler.current.triggerAttackRelease(["A4"], 4)}
    ];
    
    return { buttonsList};
}