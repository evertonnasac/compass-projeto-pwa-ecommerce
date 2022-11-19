import {StyleHeader} from "./StyleHeader"
import { NavHeader } from "./NavHeader"
import { HeaderPartial } from "./HeaderPartial"
import { Logo } from "./Logo"
import { ContainerSearch } from "./ContainerSearch"
import { ContainerIcon } from "./ContainerIcon"

export const Header = () => {
    return(
        <StyleHeader>
            <HeaderPartial>
                <Logo/>
                <NavHeader/>
            </HeaderPartial>
            <HeaderPartial>
                <ContainerSearch/>
                <ContainerIcon/>
            </HeaderPartial>
        </StyleHeader>
    )
}