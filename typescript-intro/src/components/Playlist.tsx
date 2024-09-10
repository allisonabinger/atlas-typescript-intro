import { useMusicPlayer } from "../MusicPlayerContext";
import PlayListItem from "./PlayListItem";

function Playlist() {
  const { playSong, playlist } = useMusicPlayer();

  return (
    <div className="p-8 w-full border-t md:border-l md:border-t-0">
      <h2 className="mb-4 text-lg font-semibold">Playlist</h2>
      {playlist.map((song) => (
        <div
          key={song.title}
          onClick={() => playSong(song)}
          className="cursor-pointer"
        >
          <PlayListItem
            title={song.title}
            artist={song.artist}
            duration={song.duration}
          />
        </div>
      ))}
    </div>
  );
}

export default Playlist;
