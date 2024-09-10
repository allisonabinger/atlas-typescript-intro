import { useMusicPlayer } from "../MusicPlayerContext";
import soundbarGIF from "../assets/soundbar.gif"

// PlayList Item Component
type PlaylistItemProps = {
  title: string;
  artist: string;
  duration: string;
};

function PlayListItem({ title, artist, duration }: PlaylistItemProps) {

    const { isPlaying, currentSong } = useMusicPlayer();

  return (
    <div className="w-full mb-2 pr-3 flex justify-between font-medium">
      <div className="wrapper text-left text-sm">
        <div className="text-base flex">
          {title} {isPlaying && currentSong?.title == title ? <img src={soundbarGIF} width={20} /> : ""}
        </div>
        <div className="text-butterfly-bush-950">{artist}</div>
      </div>
      <div className="length flex items-center">
        <div className="text-sm text-butterfly-bush-950">{duration}</div>
      </div>
    </div>
  );
}
export default PlayListItem;
