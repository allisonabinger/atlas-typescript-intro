// Context for the currently playing song.
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { usePlaylistData } from "./hooks/usePlaylistData";

type Song = {
  id: number;
  title: string;
  artist: string;
  genre: string;
  duration: string;
  cover: string;
};

type MusicPlayerContextType = {
  playlist: Song[];
  currentSong: Song | null;
  isPlaying: boolean;
  playNextSong: () => void;
  playPrevSong: () => void;
  playSong: (song: Song) => void;
  togglePlay: () => void;
  loading: boolean;
  shuffle: boolean;
  setShuffle: (enabled: boolean) => void;
};

const MusicPlayerContext = createContext<MusicPlayerContextType | undefined>(
  undefined,
);

export const MusicPlayerProvider = ({ children }: { children: ReactNode }) => {
  const { data: playlist, loading } = usePlaylistData();
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [shuffle, setShuffle] = useState<boolean>(false);
  const [shuffledPlaylist, setShuffledPlaylist] = useState<Song[]>([]);

  // shuffle helper func
  function shuffleArray(array: Song[]): Song[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  useEffect(() => {
    if (!loading && playlist.length > 0) {
      if (!shuffle) {
        setShuffledPlaylist(shuffleArray(playlist));
        if (!currentSong) {
          setCurrentSong(shuffledPlaylist[0]);
          setIsPlaying(true);
        }
      } else {
        if (!currentSong) {
          setCurrentSong(playlist[0]);
          setIsPlaying(true);
        }
      }
    }
  }, [shuffle, playlist]);

  // plays next song in order or in shuffled order
  const playNextSong = () => {
    if (shuffle) {
      if (shuffledPlaylist.length === 0) {
        // reshuffles
        setShuffledPlaylist(shuffleArray(playlist));
      }
      const nextSong = shuffledPlaylist[0];
      // removes song that was just played from order of new playlst
      setShuffledPlaylist(shuffledPlaylist.slice(1));
      setCurrentSong(nextSong);
      setIsPlaying(true);
    } else {
      const currentIndex = playlist.findIndex(
        (song) => song.id === currentSong?.id,
      );
      const nextIndex = (currentIndex + 1) % playlist.length;
      setCurrentSong(playlist[nextIndex]);
    }
  };

  const playPrevSong = () => {
    const currentIndex = playlist.findIndex(
      (song) => song.id === currentSong?.id,
    );
    const prevIndex =
      currentIndex === 0 ? playlist.length - 1 : currentIndex - 1;
    setCurrentSong(playlist[prevIndex]);
  };

  // plays a specific song
  const playSong = (song: Song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  // pauses and toggles isPlaying
  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <MusicPlayerContext.Provider
      value={{
        loading,
        currentSong,
        playSong,
        isPlaying,
        playNextSong,
        playPrevSong,
        togglePlay,
        playlist,
        shuffle,
        setShuffle,
      }}
    >
      {children}
    </MusicPlayerContext.Provider>
  );
};

export const useMusicPlayer = () => {
  const context = useContext(MusicPlayerContext);
  if (!context) {
    throw new Error("useMusicPlay must be in a MusicPlayerProvider");
  }
  return context;
};
