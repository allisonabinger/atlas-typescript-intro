import { useMusicPlayer } from "../MusicPlayerContext";
import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControl from "./VolumeControl";
import placeholderImage from "../assets/placeholder.svg"
import { useEffect } from "react";

function CurrentlyPlaying() {
    const { currentSong, playlist, playSong } = useMusicPlayer();

    useEffect(() => {
        if(!currentSong) {
            playSong(playlist[0])
        }
    }, [currentSong, playlist, playSong]);


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
