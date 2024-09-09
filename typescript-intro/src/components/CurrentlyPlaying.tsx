import { useMusicPlayer } from "../MusicPlayerContext";
import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControl from "./VolumeControl";
import placeholderImage from "../assets/placeholder.svg"

function CurrentlyPlaying() {
    const { currentSong } = useMusicPlayer();


  return (
    <div className="currently-playing w-full p-4 justify-center">
      <CoverArt imageURL={currentSong ? currentSong.cover : placeholderImage} />
      <SongTitle title={currentSong ? currentSong.title : "Nothing Playing..."} artist={currentSong ? currentSong.artist : ""} />
      <PlayControls />
      <VolumeControl />
    </div>
  );
}

export default CurrentlyPlaying;
