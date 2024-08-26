# react-speech-to-text-toolkit

react-speech-to-text-toolkit is a lightweight library for integrating speech-to-text functionality into your React applications. Leveraging the Web Speech API, this package provides a simple and effective way to convert speech into text.

## Installation

To add `react-speech-to-text-toolkit` to your React project, use the following command:

```bash
  npm install react-speech-to-text-toolkit
```

or if you are using Yarn:

```bash
  yarn add react-speech-to-text-toolkit
```

## Usage

Import the useSpeechRecognition hook from the package:

```javascript
import { useSpeechRecognition } from "react-speech-to-text-toolkit";
```

Initialize the useSpeechRecognition hook in your component:

```javascript
const { startRecording, stopRecording, text, isRecording, isBrowserSupported } =
  useSpeechRecognition();
```

## Example

Here's a basic example of how to use react-speech-to-text-toolkit:

```javascript
import { useSpeechRecognition } from "react-speech-to-text-toolkit";
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

## API

The `useSpeechRecognition` hook provides the following functionalities and state information:

### `startRecording`

- **Type:** Function
- **Description:** Starts the speech recognition process. Use this function to begin capturing and transcribing speech.

### `stopRecording`

- **Type:** Function
- **Description:** Stops the speech recognition process. Use this function to end the current speech recognition session.

### `text`

- **Type:** String
- **Description:** The current transcript of the speech. This state is updated with the transcribed text from the user's speech.

### `isRecording`

- **Type:** Boolean
- **Description:** Indicates if recording is in progress. This boolean value is `true` while the speech recognition is active and `false` otherwise.

### `isBrowserSupported`

- **Type:** Boolean
- **Description:** Indicates if the browser supports speech recognition. This value is `true` if the Web Speech API is available in the browser and `false` otherwise.

## Author

[Zohaib Ahmad](https://www.github.com/zohaibahmad12)
