//import {StyleHeader} from "./StyleHeader"
import { Nav } from "./Nav"
import { Logo } from "./Logo"
import { SearchBar } from "./SearchBar"
import { ContainerIcons } from "./ContainerIcons"
import {MainContainer} from "./styles"


export const Header = () => {
    return(
        <MainContainer>
            <Logo/>
            <Nav/>
            <SearchBar/>
            <ContainerIcons/>
        </MainContainer>
    )
}