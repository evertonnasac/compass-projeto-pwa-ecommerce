import { useState ,useContext } from "react"
import coracao from "../public/vite.svg"
//import './App.css'
import { Button } from './components/buttons/Button'
import { Header } from "./components/header/Header"
import {TabHoriz, ItemPropNav} from "./components/tabs/TabHoriz"
import {Context as ContexNav, ContextNavTab}  from "./Contexts/ContexNavTab"

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
      </ContextNavTab>
          
        
    </div>
)
}

export default App
