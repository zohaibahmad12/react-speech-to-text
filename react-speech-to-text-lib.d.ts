declare module "react-speech-to-text-lib" {
  export function useSpeechRecognition(): {
    startRecording: () => void;
    stopRecording: () => void;
    text: string;
    isRecording: boolean;
    isBrowserSupported: boolean;
  };
}
