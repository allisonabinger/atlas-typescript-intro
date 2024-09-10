// Volume Control Component
import volumeSVG from "../assets/volume.svg";
import muteSVG from "../assets/mute.svg";
import { useState } from "react";

function VolumeControl() {
  const [volume, setVolume] = useState(75);
  const [muteStatus, setMuteStatus] = useState(false);
  const [lastVolume, setLastVolume] = useState(75);

  type InputEvent = React.ChangeEvent<HTMLInputElement>;

  function handleVolumeChange(event: InputEvent) {
    const newVolume = parseInt(event.target.value);

    if (newVolume === 0) {
      setMuteStatus(true);
    } else {
      setMuteStatus(false);
      setVolume(newVolume);
    }
  }

  function toggleMute() {
    if (muteStatus) {
      setMuteStatus(false);
      setVolume(lastVolume);
    } else {
      setLastVolume(volume);
      setMuteStatus(true);
      setVolume(0);
    }
  }

  return (
    <div className="flex items-center justify-center">
      <button className="volume" onClick={toggleMute}>
        {""}
        <img
          src={muteStatus || volume === 0 ? muteSVG : volumeSVG}
          alt="Volume Icon"
          className="size-7"
        />
      </button>
      <input
        type="range"
        id="volumeSlider"
        min={0}
        max={100}
        value={volume}
        className="w-full h-8 accent-vista-blue-700 outline-2 outline-transparent outline-offset-2"
        onChange={handleVolumeChange}
      ></input>
    </div>
  );
}
export default VolumeControl;
