import { useEffect, useState } from "react";
import styled from "styled-components";
import Main from "./components/Main/Main";
import Menu from "./components/Menu/Menu";
import Player from "./components/Player/Player";

const ResponsiveMenuContainer = styled.div`
  display: none;
`;

function App() {
  const [data, setData] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (selectedSong) {
      document.getElementById("player").pause();
      document.getElementById("player").play();
      setIsPlaying(true);
    }
  }, [selectedSong]);

  return (
    <>
      <Menu />
      <Main
        data={data}
        setData={setData}
        setSelectedSong={setSelectedSong}
        selectedSong={selectedSong}
      />
      <Player
        selectedSong={selectedSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <audio id="player" src={selectedSong?.preview}></audio>
    </>
  );
}

export default App;
