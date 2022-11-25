import styled from "styled-components";
import { useContext } from "react";
import { Context } from "../../Contexts/ContexNavTab";

const StylerContainer = styled.section` 
    width: 100% ;
    height: 100% ;

`

const description = 
       <div>
            <p> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus scelerisque laoreet
                tortor cras molestie tincidunt malesuada malesuada. Neque, mauris duis dui id morbi 
                magna. Cras lacus, viverra auctor in turpis est quisque eget tristique. 
            </p>
            <p>
                Dolor augue mattis duis semper gravida enim eu imperdiet sit. Et pharetra platea 
                pretium nec feugiat tincidunt quam leo tristique. Nulla enim consectetur sit et tempus, 
                faucibus leo ac cras. Purus ut non eu mus volutpat. 
            </p>
            <p>
                Eget est vel sagittis amet sit eu eu ullamcorper tellus. Leo mauris, 
                faucibus vulputate adipiscing elementum tristique dictumst augue pellentesque. 
                Justo, sed nunc, pretium turpis scelerisque. Enim urna etiam morbi vestibulum 
                ac dictumst. Ac ut elementum molestie sit felis imperdiet.
            </p> 
       </div> 

const related =
        <div>
            <p>
                Dolor augue mattis duis semper gravida enim eu imperdiet sit. Et pharetra platea 
                pretium nec feugiat tincidunt quam leo tristique. Nulla enim consectetur sit et 
                tempus, faucibus leo ac cras. Purus ut non eu mus volutpat. 
            </p>
            <p>
                Dolor augue mattis duis semper gravida enim eu imperdiet sit. Et pharetra platea 
                pretium nec feugiat tincidunt quam leo tristique. Nulla enim consectetur sit et tempus, 
                faucibus leo ac cras. Purus ut non eu mus volutpat. 
            </p>
        </div>
  

const ratings = 
        <div>
            <p>
                Dolor augue mattis duis semper gravida enim eu imperdiet sit. Et pharetra platea 
                pretium nec feugiat tincidunt quam leo tristique. Nulla enim consectetur sit et tempus, 
                faucibus leo ac cras. Purus ut non eu mus volutpat. 
            </p>
        </div>



export const AboutProduct = () => {

    const {itemSelected} = useContext(Context)

    if(itemSelected == "Product Description" ){
        return (
            description
        )
    }

    else if(itemSelected == "Related Products"){
        return (
            related
        )
    }
    else {
        return(
            ratings
        )
    }
}