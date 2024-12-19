import React, { useState, useRef } from "react";

const AudioRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);

      audioChunksRef.current = [];
      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) audioChunksRef.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/mp3" });
        const audioURL = URL.createObjectURL(audioBlob);
        setAudioURL(audioURL);
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setIsRecording(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Audio Recorder</h1>
      {!isRecording ? (
        <button onClick={startRecording} style={{ padding: "10px 20px" }}>
          Start Recording
        </button>
      ) : (
        <button onClick={stopRecording} style={{ padding: "10px 20px" }}>
          Stop Recording
        </button>
      )}
      {audioURL && (
        <div style={{ marginTop: "20px" }}>
          <audio controls src={audioURL}></audio>
          <br />
          <a href={audioURL} download="recording.mp3">
            <button style={{ padding: "10px 20px" }}>Download Recording</button>
          </a>
        </div>
      )}
    </div>
  );
};

export default AudioRecorder;