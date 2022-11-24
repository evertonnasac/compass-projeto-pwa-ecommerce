import { useState ,useContext } from "react"
import {TabHoriz, ItemPropNav} from "./components/tabs/TabHoriz"
import {Context as ContexNav, ContextNavTab}  from "./Contexts/ContexNavTab"
import {BottonNavigate} from "./components/mobile/BottonNavigate"
import { AppBar } from "./components/mobile/AppBar"
import { Ratings } from "./components/ratings/Retings"
import { CheckBox } from "./components/inputs/Checkbox"
import { ProductAny } from "./components/cards/ProductAny"
import { Home } from "./pages/Home"

const items : ItemPropNav[] = [
  {
    item: "Teste 1",
  },
  {
    item: "Teste 2",
  },
  {
    item: "Teste 3",
  },
]

function App() {
 
  return (
   
    <div className="App" style={{"width" : "100%"}}>
      <Home/>
    </div>
)
}

export default App
