import { useMusicPlayer } from "../MusicPlayerContext";
import soundbarGIF from "../assets/soundbar.gif";

// PlayList Item Component
type PlaylistItemProps = {
  song: {
    id: number
    title: string;
    artist: string;
    duration: string;
    genre: string;
    cover: string;
  };
};

function PlayListItem({ song }: PlaylistItemProps) {
  const { isPlaying, currentSong, playSong } = useMusicPlayer();

  return (
    <div
      className="w-full mb-2 pr-3 flex justify-between font-medium"
      onClick={() => playSong(song)}
    >
      <div className="wrapper text-left text-sm">
        <div className="text-base flex">
          {song.title}{" "}
          {isPlaying && currentSong?.title == song.title ? (
            <img src={soundbarGIF} width={20} />
          ) : (
            ""
          )}
        </div>
        <div className="text-butterfly-bush-950">{song.artist}</div>
      </div>
      <div className="length flex items-center">
        <div className="text-sm text-butterfly-bush-950">{song.duration}</div>
      </div>
    </div>
  );
}
export default PlayListItem;
