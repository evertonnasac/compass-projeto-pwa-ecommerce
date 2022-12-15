import styled from "styled-components";
import { ProfileMobile } from "./ProfileMobile";
import { ProfileDektop } from "./desktop/ProfileDesktop";
import { ContextNavTab } from "../../Contexts/ContexNavTab";


const StyleContainer = styled.section` 
    width: 100% ;

`

export const Profile = () => {
    return (
        <ContextNavTab>
            <StyleContainer>
                <ProfileMobile/>
                <ProfileDektop/>
            </StyleContainer>
        </ContextNavTab>

    )
}