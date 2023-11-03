
import lupa from "/icons-header/lupa.png"
import { SearchBar as Style } from "./styles";



export const SearchBar = () =>{
    return (
        <Style>
            <img src= {lupa} alt="Lupa"/>
            <input type="search" name="search" id="search_header"  placeholder="Search for products or brands....."/>
        </Style>
    )
}