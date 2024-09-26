import React, { useEffect } from "react";
import crash from "./assets/crash.mp3"
import kick from "./assets/kick-bass.mp3"
import snare from "./assets/snare.mp3"
import tom1 from "./assets/tom-1.mp3"
import tom2 from "./assets/tom-2.mp3"
import tom3 from "./assets/tom-3.mp3"
import tom4 from "./assets/tom-4.mp3"


const Drums = () => {



  function playSound(key) {
    const button = document.querySelector(`.${key}`)
    if (button) {
       
        button.classList.add("pressed");
    

        setTimeout(() => {
          button.classList.remove("pressed");
        }, 200);
      }
    switch (key) {
      case "w":
        let sound1 = new Audio(crash);
        sound1.play();
      
        break;
      case "s":
        let sound2 = new Audio(kick);
        sound2.play();
        break;
      case "d":
        let sound3 = new Audio(snare);
        sound3.play();
        break;
      case "a":
        let sound4 = new Audio(tom1);
        sound4.play();
        break;
      case "r":
        let sound5 = new Audio(tom2);
        sound5.play();
        break;
      case "f":
        let sound6 = new Audio(tom3);
        sound6.play();
        break;
      case "g":
        let sound7 = new Audio(tom4);
        sound7.play();
        break;
      default:
        console.error("Invalid key press");
        break;
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
    <div>
      <div className="container">
        <h1>Play Drums</h1>
        <div className="drums">
          <button className="drum w" onClick={() => playSound("w")}>w</button>
          <button className="drum s" onClick={() => playSound("s")}>s</button>
          <button className="drum d" onClick={() => playSound("d")}>d</button>
          <button className="drum a" onClick={() => playSound("a")}>a</button>
          <button className="drum r" onClick={() => playSound("r")}>r</button>
          <button className="drum f" onClick={() => playSound("f")}>f</button>
          <button className="drum g" onClick={() => playSound("g")}>g</button>
        </div>
      </div>
    </div>
  );
};

export default Drums;
