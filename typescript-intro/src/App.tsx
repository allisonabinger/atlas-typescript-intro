import { MusicPlayerProvider } from "./MusicPlayerContext";
import Footer from "./components/Footer";
import MusicPlayer from "./MusicPlayer";

function App() {
  return (
    <MusicPlayerProvider>
      <div className="justify-between flex flex-col h-full p-8 min-h-screen bg-gradient-to-t from-butterfly-bush-600 to-butterfly-bush-50">
        <MusicPlayer />
        <Footer />
      </div>
    </MusicPlayerProvider>
  );
}

export default App;
