import { Route, Routes } from "react-router-dom";
import Homepage from "./components/main/Homepage";
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        {/* <Route path="movies" element={<h1>Home</h1>} />
        <Route path="movies/:movieId" element={<h1>Home</h1>} />*/}
      </Routes>
    </>
  );
}

export default App;
