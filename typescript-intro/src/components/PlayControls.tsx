// Play Controls Component
import backwardSVG from "../assets/backward.svg";
import playSVG from "../assets/play.svg";
import forwardSVG from "../assets/forward.svg";
import repeatSVG from "../assets/repeat.svg";
import repeatOneSVG from "../assets/repeatOne.svg";
import shuffleSVG from "../assets/shuffle.svg";
import pauseSVG from "../assets/pause.svg";
import { useState } from "react";

function PlayControls() {
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [playbackMode, setPlaybackMode] = useState("repeat-all");
  const [playbackSVG, setPlaybackSVG] = useState(repeatSVG);
  const [playStatus, setPlayStatus] = useState(true);

  function handlePlaybackToggle() {
    console.log("toggled");
    if (playbackMode === "repeat-all") {
        setPlaybackMode('repeat-one')
      setPlaybackSVG(repeatOneSVG);
    } else if (playbackMode === "repeat-one") {
      setPlaybackMode("shuffle");
      setPlaybackSVG(shuffleSVG);
    } else {
      setPlaybackMode("repeat-all");
      setPlaybackSVG(repeatSVG);
    }
  }

  function togglePlayStatus() {
    setPlayStatus((prevStatus) => !prevStatus);
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
        disabled={playStatus}
      >
        <img src={backwardSVG} alt="Reverse Button" className="size-6" />
      </button>
      <button
        className="btn-playcontrols"
        onClick={togglePlayStatus}
      >
        <img
          src={playStatus ? pauseSVG : playSVG}
          alt="Play Button"
          className="size-6"
        />
      </button>
      <button className="btn-playcontrols">
        <img src={forwardSVG} alt="Forward Button" className="size-6" />
      </button>
      <button className="btn-playcontrols" onClick={handlePlaybackToggle}>
        <img src={playbackSVG} alt="Playback Mode Button" className="size-6" />
      </button>
    </div>
  );
}

export default PlayControls;
