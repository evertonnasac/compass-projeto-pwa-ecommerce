import { Breadcrumbs } from "../components/tabs/Breadcrumbs";
import { withRouter } from 'storybook-addon-react-router-v6';


export default {
    title: 'Components/Breadcrumbs',
    component: Breadcrumbs,
    decorators: [withRouter],

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