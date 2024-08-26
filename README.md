# react-text-to-speech-converter

react-speech-to-text-converter is a lightweight library for integrating speech-to-text functionality into your React applications. Leveraging the Web Speech API, this package provides a simple and effective way to convert speech into text.

## Installation

To install react-text-to-speech-converter dependency into your React project:

```bash
  npm install react-speech-to-text-converter
```

## Example Usage

```javascript
import { useSpeechRecognition } from "react-speech-to-text-converter";
function App() {
  const {
    startRecording,
    stopRecording,
    text,
    isRecording,
    isBrowserSupported,
  } = useSpeechRecognition();

  if (!isBrowserSupported) {
    return <p>Browser does not support speech recognition</p>;
  }
  return (
    <>
      <button onClick={startRecording}>Start Recording</button>
      <button onClick={stopRecording}>Stop Recording</button>
      <p>Speech To Text: {text}</p>
    </>
  );
}

export default App;
```

## Author

[Zohaib Ahmad](https://www.github.com/zohaibahmad12)
