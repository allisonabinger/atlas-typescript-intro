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
        const response = await fetch(
          "https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/playlist",
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const playlist = await response.json();

        setTimeout(() => {
          setData(playlist);
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.error("Error fetching playlist data:", error);
        setLoading(false);
      }
    }

    fetchPlaylist();
  }, []);

  return { data, loading };
}
