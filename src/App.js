import logo from "./logo.svg";
import AudioFile from "./AudioFile";
function App() {
  return (
    <div className="App">
      <h1>Add an image below</h1>
      <img src={logo} height={200} alt="IMG" />
      <AudioFile />
    </div>
  );
}

export default App;
