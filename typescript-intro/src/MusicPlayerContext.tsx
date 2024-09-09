// Context for the currently playing song.

import { createContext, useContext, useState } from "react";

type Song = {
    id: number;
    title: string;
    artist: string;
    genre: string;
    duration: string;
    cover: string;
}

type MusicPlayerContextType = {
    currentSong: Song | null;
    isPlaying: boolean;
    playSong: (song: Song) => void;
    togglePlay: () => void;
    setCurrentSong: (song: Song | null) => void;
    playlist: Song[];
    setPlaylist: (songs: Song[]) => void;
}

const MusicPlayerContext = createContext<MusicPlayerContextType | undefined>(undefined);

export const MusicPlayerProvider = ({ children }: { children: ReactNode }) => {
    const [currentSong, setCurrentSong] = useState<Song | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [playlist, setPlaylist] = useState<Song[]>([]);

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
        <MusicPlayerContext.Provider value={{ currentSong, setCurrentSong, isPlaying, playSong, togglePlay, playlist, setPlaylist }}>
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
