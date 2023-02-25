
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Landing from "./components/Landing";
import Main from "./components/Main";
import WeatherWindow from "./components/WeatherWindow";



function App() {

  return (
    <Routes>
      <Route path="/*" element={<Main />}>
        {/* public routes */}
        <Route index path="landing" element={<Landing />} />

        {/* protect these routes */}
        <Route path="home" element={<Home />} />
        <Route path="weather" element={<WeatherWindow />} />
       
       
      </Route>
    </Routes>
  );
}


export default App