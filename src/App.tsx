
import { BrowserRouter, Routes , Route} from "react-router-dom"
import MemoTest from "./components/MemoTest"
import Navbar from "./components/Navbar"
import { facil, dificil } from "./utils"


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar/>} />
      <Route path="/facil" element={<MemoTest imagenes={facil}/>} />
      <Route path="/dificil" element={<MemoTest imagenes={dificil}/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
