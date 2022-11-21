import { TabHoriz, ItemPropNav } from "../components/tabs/TabHoriz"
import {ContextNavTab}  from "../Contexts/ContexNavTab"

const items : ItemPropNav[] = [
   {
     item: "Label 1",
   },
   {
     item: "Label 2",
   },
   {
     item: "Label 3",
   },
 ]

const Content : React.FC = () => {
   return(
      <ContextNavTab>
         <TabHoriz array = {items}/> 
      </ContextNavTab>
   )
}


export default {
    title: 'Components/Tabbar',
    component: Content,
}

export const Default = {}