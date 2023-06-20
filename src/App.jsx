import "./index.css";
import NavigationBar from "./components/NavigationBar.jsx";
import Hero from "./components/Hero.jsx";
import Platform from "./components/Platform.jsx";
import Video from "./components/Video.jsx";
import GameConcept from "./components/GameConcept";

function App() {
  return (
    <>
      {/* TODO Video and Images from recent main branch */}
      <NavigationBar text={"OctoPi"} />
      <Hero text={"Willkommen zu unserer Homepage zu unserem Spiel"} />
      <GameConcept />
      <Video
        text={"Laufe zur Plattform und spiele ein Minispiel!"}
        video={"/Movie.mov"}
        description={"Description. [...]"}
      />
      <Platform text={"Unsere Plattform, die Du erkunden kannst:"} />
      <Video
        text={"Klicke auf die Röhren um an Ziel zu kommen!"}
        video={"/Second_Movie.mov"}
        description={"Description. [...]"}
      />
    </>
  );
}

export default App;
