import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Landing from "./components/Landing";
import Main from "./components/Main";
import WeatherWindow from "./components/WeatherWindow";

const ProtectedHome = withAuthenticationRequired(Home);
const ProtectedWeather = withAuthenticationRequired(WeatherWindow);

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={isAuthenticated ? <Home /> : <Landing />} />

        {/* public routes */}
        <Route path="landing" element={<Landing />} />

        {/* protect these routes */}
        <Route path="home" element={<ProtectedHome />} />
        <Route path="weather" element={<ProtectedWeather />} />
      </Route>
    </Routes>
  );
}

export default App;
