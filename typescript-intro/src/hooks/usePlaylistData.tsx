import { useState, useEffect } from "react";

type Song = {
    id: number;
    title: string;
    artist: string;
    genre: string;
    duration: string;
    cover: string;
};

export function usePlaylistData() {
    const [data, setData] = useState<Song[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    
    useEffect(() => {
        async function fetchPlaylist() {
            try {
                const response = await fetch('/api/playlist');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const playlist = await response.json();
                setData(playlist);
            } catch (error) {
                console.error('Error fetching playlist data:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchPlaylist();
    }, []);

    return { data, loading };
}
