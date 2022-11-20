import { Breadcrumbs } from "../components/tabs/Breadcrumbs";
import { Props, ItemProp} from "../components/tabs/Breadcrumbs";


export default {
    title: 'Components/Breadcrumbs',
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