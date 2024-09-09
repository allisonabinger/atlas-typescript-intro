import { useMusicPlayer } from "../MusicPlayerContext";
import PlayListItem from "./PlayListItem";

function Playlist() {
  const { playSong, playlist } = useMusicPlayer();

  return (
    <div className="p-8 w-full border-t md:border-l md:border-t-0">
      <h2 className="mb-4 text-lg font-semibold">Playlist</h2>
      {playlist.map((item) => (
        <div
          key={item.title}
          onClick={() => playSong(item)}
          className="cursor-pointer"
        >
          <PlayListItem
            title={item.title}
            artist={item.artist}
            duration={item.duration}
          />
        </div>
      ))}
    </div>
  );
}

export default Playlist;
