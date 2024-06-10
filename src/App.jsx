import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import Favorites from "./views/Favorites";
import Home from "./views/Home";
import FotoProvider from "./context/ContextFotos";

const App = () => {
  return (
  <FotoProvider>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/favoritos" element={<Favorites />}/>
        </Routes>
      </div>
    </FotoProvider>
  );
};
export default App;
