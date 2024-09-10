// Music Player Component
import { useMusicPlayer } from "./MusicPlayerContext";
import CurrentlyPlaying from "./components/CurrentlyPlaying";
import Playlist from "./components/Playlist";
import loadingGIF from "./assets/loadingGif.json";
import { Player } from '@lottiefiles/react-lottie-player';

type Song = {
  id: number;
  title: string;
  artist: string;
  genre: string;
  duration: string;
  cover: string;
};

export default function MusicPlayer() {
  const { loading, currentSong, playlist } = useMusicPlayer();

  return (
    <div>
      {loading ? (
        <div className="justify-center mt-8 w-full max-w-4xl ml-auto mr-auto">
            <Player src={loadingGIF} className="loading" loop autoplay style={{ height: '500px', width: '500px' }}/>
        </div>
      ) : (
        <div className="music-player-main">
          <CurrentlyPlaying />
          <Playlist />
        </div>
      )}
    </div>
  );
}
