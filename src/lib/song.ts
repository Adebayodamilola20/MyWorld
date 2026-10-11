// One shared <audio> for "Stuck on You".
// Phones only allow sound to start from a tap, so the password button "unlocks"
// this element early; the music player can then start it without another tap.

const SONG_SOURCE = "/audio/stuck-on-you.mp3";

let song: HTMLAudioElement | null = null;
let unlocked = false;

export const getSong = () => {
  if (!song) {
    song = new Audio(SONG_SOURCE);
    song.loop = true;
    song.preload = "auto";
    song.volume = 0.75;
  }
  return song;
};

// Call from inside a tap/click handler.
export const unlockSong = () => {
  if (unlocked) return;
  const audio = getSong();
  audio.muted = true;
  audio
    .play()
    .then(() => {
      audio.pause();
      audio.currentTime = 0;
      audio.muted = false;
      unlocked = true;
    })
    .catch(() => {
      audio.muted = false;
    });
};
