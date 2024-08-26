declare module "react-speech-to-text-toolkit" {
  export function useSpeechRecognition(): {
    startRecording: () => void;
    stopRecording: () => void;
    text: string;
    isRecording: boolean;
    isBrowserSupported: boolean;
  };
}
