import { Breadcrumbs } from "../components/menus/Breadcrumbs";
import { Props, ItemProp} from "../components/menus/Breadcrumbs";


export default {
    title: 'Components/Menu Navegação Horizontal',
    component: Breadcrumbs,

    args: {
      itens : [
        {
           item: "Home",
           link: "link.home"

        },
        {
            item: "Handbag",
            link: "link.bag"
 
         },
         {
            item: "Label",
            link: ""
 
         }

      ]
    } 

}

export const Default = {}