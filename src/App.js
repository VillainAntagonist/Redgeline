import './app.css'
import NavBar from "./components/NavBar/NavBar";
import LeftSide from "./components/leftSide/LeftSide";
import RightSide from "./components/rightSide/RightSide";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <LeftSide/>
            <RightSide/>
        </div>
    );
}

export default App;
