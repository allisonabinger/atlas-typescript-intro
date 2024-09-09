// Music Player Component
import { useEffect, useState } from "react";
import { useMusicPlayer } from "./MusicPlayerContext";
import CurrentlyPlaying from "./components/CurrentlyPlaying";
import Playlist from "./components/Playlist";

type Song = {
  id: number;
  title: string;
  artist: string;
  genre: string;
  duration: string;
  cover: string;
};

export default function MusicPlayer() {
  const { setCurrentSong, setPlaylist } = useMusicPlayer();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSongData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/playlist",
        );
        const data: Song[] = await response.json();
        setPlaylist(data);
        setCurrentSong(data[0]);
      } catch (error) {
        console.error("Error fetching song data from API", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSongData();
  }, [setCurrentSong, setPlaylist]);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex flex-col md:flex md:flex-row p-0 justify-center h-full w-full max-w-4xl ml-auto mr-auto overflow-hidden rounded-lg shadow-lg bg-gradient-to-b from-vista-blue-100 to-butterfly-bush-400">
          <CurrentlyPlaying />
          <Playlist />
        </div>
      )}
    </div>
  );
}
