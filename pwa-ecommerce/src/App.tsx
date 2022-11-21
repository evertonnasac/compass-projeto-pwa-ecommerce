import { useState ,useContext } from "react"
import {TabHoriz, ItemPropNav} from "./components/tabs/TabHoriz"
import {Context as ContexNav, ContextNavTab}  from "./Contexts/ContexNavTab"
import {BottonNavigate} from "./components/mobile/BottonNavigate"
import { AppBar } from "./components/mobile/AppBar"
import { Ratings } from "./components/ratings/Retings"

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

  const {itemSelected} = useContext(ContexNav)
 
  return (
   
    <div className="App">
      <ContextNavTab>
        <TabHoriz array = {items}/> 
        <BottonNavigate/>
        <AppBar/>
        <Ratings rate={3}/>
      </ContextNavTab>
    </div>
)
}

export default App
