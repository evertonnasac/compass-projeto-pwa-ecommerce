import { useState ,useContext } from "react"
import {TabHoriz, ItemPropNav} from "./components/tabs/TabHoriz"
import {Context as ContexNav, ContextNavTab}  from "./Contexts/ContexNavTab"
import {BottonNavigate} from "./components/mobile/BottonNavigate"

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
      </ContextNavTab>
    </div>
)
}

export default App
