import { useState } from "react";
import "./App.css";

import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";

function App() {
  let heroData = [
    { text1: "Stripes Unleashed:", text2: "The Allure of Zebra Elegance" },
    { text1: "Zebra Magic:", text2: "Nature's Monochrome Marvels Revealed" },
    {
      text1: "eyond Black and White: ",
      text2: "The Enigmatic World of Zebras",
    },
  ];

  const [heroContent, setHeroContent] = useState(1);
  const [playStatus, setPlayStatus] = useState(false);

  return (
    <div className="App">
      <Background
        className="overlay"
        playStatus={playStatus}
        heroContent={heroContent}
      />
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroContent]}
        heroContent={heroContent}
        setHeroContent={setHeroContent}
        playStatus={playStatus}
      />
    </div>
  );
}

export default App;
