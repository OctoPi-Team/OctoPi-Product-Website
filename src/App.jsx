import "./index.css";
import NavigationBar from "./components/NavigationBar.jsx";
import Logo from "/Logo.png"
import Hero from "./components/Hero.jsx";
import Platform from "./components/Platform.jsx";
import Video from "./components/Video.jsx";

function App() {

  return (
    <>
        <div className="bg-logo-blue w-full h-24 flex justify-center items-center text-white text-4xl">
            <div className={"flex items-center gap-5"}>
                <img className={"w-14"} src={Logo} alt={"Logo"} />
                <NavigationBar text={"OctoPi"} />
            </div>
        </div>
        <Hero text={"Willkommen zu unserer Homepage zu unserem Spiel"} />
        <Video text={"Klicke auf die Röhren um an Ziel zu kommen!"} video={"/Second_Movie.mov"}/>
        <Platform text={"Unsere Plattform die Du erkundigen kannst:"} />
        <Video text={"Laufe zur Plattform und spiele ein Minispiel!"} video={"/Movie.mov"}/>
    </>
  )
}

export default App
