import { useState, useRef, useEffect } from "react";

function useSpeechRecognition() {
  const [text, setText] = useState("");
  const [isBrowserSupported, setIsBrowserSupported] = useState(true);
  const [isRecording, setIsRecording] = useState(false);
  const recognitionRef = useRef(null);

  if (!window.webkitSpeechRecognition) {
    setIsSupported(false);
  }

  const startRecording = () => {
    if (!window.webkitSpeechRecognition) {
      setIsSupported(false);
      console.log("Speech Recognition is not supported in this browser");
      return;
    }
    const recognition = new window.webkitSpeechRecognition();
    recognition.interimResults = true;
    recognition.continuous = true;

    recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
      setText(transcript);
    };

    recognition.onend = () => {
      setIsRecording(false);
    };

    recognition.start();
    setIsRecording(true);
    recognitionRef.current = recognition;
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  };

  useEffect(() => {
    return () => {
      stopRecording();
    };
  }, []);

  return {
    startRecording,
    stopRecording,
    text,
    isRecording,
    isBrowserSupported,
  };
}

export default useSpeechRecognition;
