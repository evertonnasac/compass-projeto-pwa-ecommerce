import { AppBarMobile } from "./mobile";
import { Header as HeaderDesktop } from "./desktop";

export const Header = () => {
    return(
        <>
            <AppBarMobile/>
            <HeaderDesktop/>
        </>
    )
}