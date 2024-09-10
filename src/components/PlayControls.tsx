// Play Controls Component
import backwardSVG from "../assets/backward.svg";
import playSVG from "../assets/play.svg";
import forwardSVG from "../assets/forward.svg";
import repeatSVG from "../assets/repeat.svg";
import shuffleSVG from "../assets/shuffle.svg";
import pauseSVG from "../assets/pause.svg";
import { useState } from "react";
import { useMusicPlayer } from "../MusicPlayerContext";
import { usePlaylistData } from "../hooks/usePlaylistData";

function PlayControls() {
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [playbackSVG, setPlaybackSVG] = useState(repeatSVG);

  const {
    isPlaying,
    currentSong,
    playNextSong,
    playPrevSong,
    togglePlay,
    shuffle,
    setShuffle,
  } = useMusicPlayer();
  const { data: playlist } = usePlaylistData();

  function handlePlaybackToggle() {
    if (shuffle) {
      setShuffle(false);
      setPlaybackSVG(repeatSVG);
    } else {
      setShuffle(true);
      setPlaybackSVG(shuffleSVG);
    }
  }

  function togglePlaybackSpeed() {
    setPlaybackSpeed((prevSpeed) => {
      if (prevSpeed < 3) {
        return parseFloat((prevSpeed + 1).toFixed(2));
      } else {
        return 1;
      }
    });
  }

  return (
    <div className="player-controls mb-4 flex items-center justify-between">
      <button className="btn-playcontrols" onClick={togglePlaybackSpeed}>
        <span className="text-lg text-vista-blue-800 font-medium">
          {playbackSpeed}x
        </span>
      </button>
      <button
        className="btn-playcontrols"
        onClick={playPrevSong}
        disabled={
          !currentSong ||
          playlist.findIndex((song) => song.id === currentSong.id) === 0
        }
      >
        <img src={backwardSVG} alt="Reverse Button" className="size-6" />
      </button>
      <button className="btn-playcontrols" onClick={togglePlay}>
        <img
          src={isPlaying ? pauseSVG : playSVG}
          alt="Play Button"
          className="size-6"
        />
      </button>
      <button className="btn-playcontrols" onClick={playNextSong}>
        <img src={forwardSVG} alt="Forward Button" className="size-6" />
      </button>
      <button className="btn-playcontrols" onClick={handlePlaybackToggle}>
        <img src={playbackSVG} alt="Playback Mode Button" className="size-6" />
      </button>
    </div>
  );
}

export default PlayControls;
