import { Audio } from "expo-av";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let soundObject: any = null;

let audioModeInitialized = false;

export async function initAudioMode(): Promise<void> {
  if (audioModeInitialized) return;
  try {
    await Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
      staysActiveInBackground: false,
    });
    audioModeInitialized = true;
  } catch {
    // Silently fail - sounds may still work with default mode
  }
}

export async function startAlertSoundLoop(): Promise<void> {
  try {
    await initAudioMode();
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/sounds/alert.mp3"),
      { isLooping: true }
    );
    soundObject = sound;
    await sound.setVolumeAsync(0.5);
    await sound.playAsync();
  } catch {
    // Silently fail - fallback to haptics is handled by caller
  }
}

export async function stopAlertSound(): Promise<void> {
  try {
    if (soundObject) {
      await soundObject.stopAsync();
      await soundObject.unloadAsync();
      soundObject = null;
    }
  } catch {
    soundObject = null;
  }
}
