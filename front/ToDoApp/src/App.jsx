import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Menu from "./components/menu/Menu";
import Historial from "./pages/historial/Historial";


function App() {
 

  return (
    <>
    <BrowserRouter>
    <Menu/>
      <Routes>
        <Route path="/home" element={<Home />}/>
          <Route index element={<Home />} />
          <Route path="/historial"  element={<Historial />}/>
          
        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
