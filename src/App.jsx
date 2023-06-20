import "./index.css";
import NavigationBar from "./components/NavigationBar.jsx";
import Hero from "./components/Hero.jsx";
import Platform from "./components/Platform.jsx";
import Video from "./components/Video.jsx";
import GameConcept from "./components/GameConcept";
import Footer from "./components/Footer";
import Compatibility from "./components/Compatibility";

function App() {
  return (
    <>
      {/* TODO Video and Images from recent main branch */}
      <NavigationBar logoNameText={"OctoPi"} />
      <Hero text={"Willkommen zu unserer Homepage zu unserem Spiel"} />
      <GameConcept />
      <Video
        text={"Laufe zur Plattform und spiele ein Minispiel!"}
        video={"/Movie.mov"}
        description={
          "Bewege dich in Richtung goldene Plattform um ein Minispiel zu starten. Wenn du das Minispiel gelöst hast erscheinst du automatisch wieder auf die Hauptplattform."
        }
      />
      <Platform
        text={"Unsere 6 Plattformen, die Du erkunden kannst:"}
        description={
          "Shipment, Design, Engineering, Production, Parts und Monitoring."
        }
      />
      <Compatibility />
      <Video
        text={"Klicke auf die Röhren um an Ziel zu kommen!"}
        video={"/Second_Movie.mov"}
        description={
          "Sobald du alle Röhren mit dem Trichter verbunden hast, gewinnst du."
        }
      />
      <Footer />
    </>
  );
}

export default App;
