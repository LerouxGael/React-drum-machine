import { useState, useEffect, useRef } from 'react';
import * as Tone from 'tone';
import { createAudioContext } from 'tone/build/esm/core/context/AudioContext';
import Clap from 'assets/sounds/Clap.wav';
import Crash from 'assets/sounds/Crash.wav';
import HiHat from 'assets/sounds/HiHat.wav';
import Kick from 'assets/sounds/Kick.wav';


export default function useSounds(){
    const mySampler = useRef(null);

    const [isClapPlayed, setIsClapPlayed] = useState(false);
    const [isCrashPlayed, setIsCrashPlayed] = useState(false);
    const [isHiHatPlayed, setIsHiHatPlayed] = useState(false);
    const [isKickPlayed, setIsKickPlayed] = useState(false);

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
    }, []
    );

    function soundPlay(note){
        mySampler.current.triggerAttackRelease([note], 4);
    };

    function handleKeyDown({key}) {
        switch (key){
            case "a": 
                setIsClapPlayed(true);
                window.setTimeout(()=> setIsClapPlayed(false), 200);
                soundPlay("C4");
                break;
            case "z": 
                setIsCrashPlayed(true);
                window.setTimeout(()=> setIsCrashPlayed(false), 200);
                soundPlay("D#4");
                break;
            case "e": 
                setIsHiHatPlayed(true);
                window.setTimeout(()=> setIsHiHatPlayed(false), 200);
                soundPlay("F#4");
                break;
            case "r": 
                setIsKickPlayed(true);
                window.setTimeout(()=> setIsKickPlayed(false), 200);
                soundPlay("A4");
                break;
            default : break;

        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);

        };
    });

    function handleSampleChange(note, file){
        let fileURL = URL.createObjectURL(file);
        let buffer= new Tone.Buffer(fileURL);
        mySampler.current.add(note, buffer, ()=> alert("Sample successfully changed"));
    };

    const buttonsList = [
        {
            soundPlay : () => soundPlay("C4"),
            isPlayed : isClapPlayed,
            id: "Clap",
            handleSampleChange : (e) => handleSampleChange("C4", e.target.files[0])
        },
        {
            soundPlay : () => soundPlay("D#4"),
            isPlayed : isCrashPlayed,
            id: "Crash",
            handleSampleChange : (e) => handleSampleChange("D#4", e.target.files[0])
        },
        {
            soundPlay : () => soundPlay("F#4"),
            isPlayed : isHiHatPlayed,
            id: "HiHat",
            handleSampleChange : (e) => handleSampleChange("F#4", e.target.files[0])
        },
        {
            soundPlay : () => soundPlay("A4"),
            isPlayed : isKickPlayed,
            id: "Kick",
            handleSampleChange : (e) => handleSampleChange("A4", e.target.files[0])
        },
    ];
    
    return { buttonsList};
}