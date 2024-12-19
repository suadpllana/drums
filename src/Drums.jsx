import React, { useEffect } from "react";
import crash from "./assets/crash.mp3";
import kick from "./assets/kick-bass.mp3";
import snare from "./assets/snare.mp3";
import tom1 from "./assets/tom-1.mp3";
import tom2 from "./assets/tom-2.mp3";
import tom3 from "./assets/tom-3.mp3";
import tom4 from "./assets/tom-4.mp3";
import drumBeat from "./assets/drum-beat-02-36276.mp3";
import drumRoll from "./assets/drum-roll-3-228357.mp3";
import jokeDrum from "./assets/joke-drums-242242.mp3";
import kickDrum from "./assets/kick-drum-230743.mp3";
import snare1 from "./assets/tr707-snare-drum-241412.mp3";
import snare2 from "./assets/tr909-snare-drum-241413.mp3";
import AudioRecord from "../src/Audio";
import DrumLessons from "./DrumLessons";

const Drums = () => {
  const sounds = {
    w: crash,
    s: kick,
    d: snare,
    a: tom1,
    r: tom2,
    f: tom3,
    g: tom4,
    t: drumBeat,
    q: drumRoll,
    e: jokeDrum,
    z: kickDrum,
    x: snare1,
    c: snare2,
  };

  const playSound = (key) => {
    const button = document.querySelector(`.${key}`);
    if (button) {
      button.classList.add("pressed");
      setTimeout(() => button.classList.remove("pressed"), 200);
    }

    if (sounds[key]) {
      const audio = new Audio(sounds[key]);
      audio.pause(); // Stop any existing playback
      audio.currentTime = 0; // Reset audio
      audio.play();
    } else {
      console.error("Invalid key press");
    }
  };

  useEffect(() => {
    const handleKeydown = (e) => {
      playSound(e.key);
    };

    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <div className="container">
      <h1>Play Drums</h1>
      <div className="drums">
        {Object.keys(sounds).map((key) => (
          <button
            key={key}
            className={`drum ${key}`}
            onClick={() => playSound(key)}
          >
            {key}
          </button>
        ))}
      </div>
      <AudioRecord />
      <DrumLessons/>
    </div>
  );
};

export default Drums;
