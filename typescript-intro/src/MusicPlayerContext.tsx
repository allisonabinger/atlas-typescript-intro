// Context for the currently playing song.
import { createContext, useContext, useState, ReactNode } from "react";
import { usePlaylistData } from "./hooks/usePlaylistData";

type Song = {
    id: number;
    title: string;
    artist: string;
    genre: string;
    duration: string;
    cover: string;
}

type MusicPlayerContextType = {
    playlist: Song[];
    currentSong: Song | null;
    isPlaying: boolean;
    playSong: (song: Song) => void;
    togglePlay: () => void;
    loading: boolean
}

const MusicPlayerContext = createContext<MusicPlayerContextType | undefined>(undefined);

export const MusicPlayerProvider = ({ children }: { children: ReactNode }) => {
    const { data: playlist, loading } = usePlaylistData();
    const [currentSong, setCurrentSong] = useState<Song | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    // sets the current song to selection and toggles isPlaying
    const playSong = (song: Song) => {
        setCurrentSong(song);
        setIsPlaying(true);
    };

    // pauses and toggles isPlaying
    const togglePlay = () => {
        setIsPlaying((prev) => !prev);
    };

    return (
        <MusicPlayerContext.Provider value={{ loading, currentSong, isPlaying, playSong, togglePlay, playlist }}>
            {children}
        </MusicPlayerContext.Provider>
    );
};

export const useMusicPlayer = () => {
    const context = useContext(MusicPlayerContext);
    if (!context) {
        throw new Error('useMusicPlay must be in a MusicPlayerProvider');
    }
    return context
}
